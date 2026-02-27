"use client";

import { MapPin } from 'lucide-react';
import { EmptyState } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function EmptyDestinations() {
  const router = useRouter();
  const locale = useLocale();

  return (
    <EmptyState
      icon={MapPin}
      title="No Destinations Found"
      description="We couldn't find any destinations matching your criteria. Try adjusting your filters or explore all destinations."
      action={{
        label: "View All Destinations",
        onClick: () => router.push(`/${locale}/destinations`)
      }}
    />
  );
}

