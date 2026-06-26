"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Calendar as CalendarIcon, MapPin, Users, CreditCard, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Calendar } from '@/app/_components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/_components/ui/popover';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { cn } from '@/app/_lib/utils';

const bookingSchema = z.object({
  destination: z.string().min(1, 'Destination is required'),
  checkin: z.date(),
  checkout: z.date(),
  adults: z.number().min(1, 'At least 1 adult is required'),
  children: z.number().min(0),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  cardNumber: z.string().min(16, 'Valid card number is required'),
  expiryDate: z.string().min(1, 'Expiry date is required'),
  cvv: z.string().min(3, 'Valid CVV is required')
}).refine((data) => data.checkin, {
  message: "Check-in date is required",
  path: ["checkin"],
}).refine((data) => data.checkout, {
  message: "Check-out date is required",
  path: ["checkout"],
});

type BookingFormData = z.infer<typeof bookingSchema>;

const steps = [
  { id: 'destination', icon: MapPin, title: 'Destination' },
  { id: 'details', icon: CalendarIcon, title: 'Details' },
  { id: 'payment', icon: CreditCard, title: 'Payment' }
];

export function BookingSection() {
  const t = useTranslations('booking');
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkinDate, setCheckinDate] = useState<Date>();
  const [checkoutDate, setCheckoutDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      adults: 1,
      children: 0
    }
  });

  const adults = watch('adults');
  const children = watch('children');

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Booking confirmed! Check your email for details.');
    setIsSubmitting(false);
    
    // Reset form
    setCurrentStep(0);
  };

  const adjustGuests = (type: 'adults' | 'children', operation: 'increment' | 'decrement') => {
    const currentValue = type === 'adults' ? adults : children;
    const newValue = operation === 'increment' ? currentValue + 1 : Math.max(0, currentValue - 1);
    
    if (type === 'adults' && newValue < 1) return;
    
    setValue(type, newValue);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let us help you plan your perfect getaway
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }`}>
                      {isCompleted ? (
                        <Check className="w-8 h-8" />
                      ) : (
                        <IconComponent className="w-8 h-8" />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'
                    }`}>
                      {t(`steps.${step.id}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </div>
          </div>

          {/* Form */}
          <Card className="glass glass-dark border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Destination */}
                  {currentStep === 0 && (
                    <motion.div
                      key="destination"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Where would you like to go?
                      </h3>
                      
                      <div>
                        <Label htmlFor="destination" className="text-lg font-medium">
                          Destination
                        </Label>
                        <Input
                          id="destination"
                          {...register('destination')}
                          placeholder="e.g., Santorini, Greece"
                          className="mt-2 h-14 text-lg"
                        />
                        {errors.destination && (
                          <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-lg font-medium">
                            Check-in Date
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full h-14 mt-2 justify-start text-left font-normal text-lg",
                                  !checkinDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-5 w-5" />
                                {checkinDate ? format(checkinDate, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={checkinDate}
                                onSelect={(date) => {
                                  setCheckinDate(date);
                                  if (date) setValue('checkin', date);
                                }}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                          {errors.checkin && (
                            <p className="text-red-500 text-sm mt-1">{errors.checkin.message as string}</p>
                          )}
                        </div>

                        <div>
                          <Label className="text-lg font-medium">
                            Check-out Date
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full h-14 mt-2 justify-start text-left font-normal text-lg",
                                  !checkoutDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-5 w-5" />
                                {checkoutDate ? format(checkoutDate, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={checkoutDate}
                                onSelect={(date) => {
                                  setCheckoutDate(date);
                                  if (date) setValue('checkout', date);
                                }}
                                initialFocus
                                disabled={(date) => date < (checkinDate || new Date())}
                              />
                            </PopoverContent>
                          </Popover>
                          {errors.checkout && (
                            <p className="text-red-500 text-sm mt-1">{errors.checkout.message as string}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Details */}
                  {currentStep === 1 && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Guest Information
                      </h3>

                      {/* Guest Selector */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-lg font-medium">Adults</Label>
                          <div className="flex items-center justify-between mt-2 p-4 border rounded-lg">
                            <span className="text-lg">{adults}</span>
                            <div className="flex space-x-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => adjustGuests('adults', 'decrement')}
                                disabled={adults <= 1}
                              >
                                -
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => adjustGuests('adults', 'increment')}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label className="text-lg font-medium">Children</Label>
                          <div className="flex items-center justify-between mt-2 p-4 border rounded-lg">
                            <span className="text-lg">{children}</span>
                            <div className="flex space-x-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => adjustGuests('children', 'decrement')}
                                disabled={children <= 0}
                              >
                                -
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => adjustGuests('children', 'increment')}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-lg font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="your@email.com"
                            className="mt-2 h-14 text-lg"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-lg font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            {...register('phone')}
                            placeholder="+1 (555) 123-4567"
                            className="mt-2 h-14 text-lg"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Payment */}
                  {currentStep === 2 && (
                    <motion.div
                      key="payment"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Payment Information
                      </h3>

                      <div>
                        <Label htmlFor="cardNumber" className="text-lg font-medium">
                          Card Number
                        </Label>
                        <Input
                          id="cardNumber"
                          {...register('cardNumber')}
                          placeholder="1234 5678 9012 3456"
                          className="mt-2 h-14 text-lg"
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="expiryDate" className="text-lg font-medium">
                            Expiry Date
                          </Label>
                          <Input
                            id="expiryDate"
                            {...register('expiryDate')}
                            placeholder="MM/YY"
                            className="mt-2 h-14 text-lg"
                          />
                          {errors.expiryDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="cvv" className="text-lg font-medium">
                            CVV
                          </Label>
                          <Input
                            id="cvv"
                            {...register('cvv')}
                            placeholder="123"
                            className="mt-2 h-14 text-lg"
                          />
                          {errors.cvv && (
                            <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Order Summary */}
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Order Summary
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Base Package</span>
                            <span>$1,299</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Guests ({adults + children})</span>
                            <span>${(adults + children - 1) * 199}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Taxes & Fees</span>
                            <span>$129</span>
                          </div>
                          <hr className="my-2" />
                          <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>${1299 + (adults + children - 1) * 199 + 129}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      {isSubmitting ? 'Processing...' : 'Complete Booking'}
                      <Check className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}