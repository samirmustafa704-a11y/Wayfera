import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Provide a default locale if undefined
  const validLocale = locale || 'en';
  
  // Load all message files from the language subfolder
  let messages = {} as Record<string, any>;
  
  // Import all JSON files from the language-specific folder
  const messageFiles = [
    'nav', 'hero', 'destinations', 'services', 'booking', 
    'footer', 'about', 'contact', 'legal'
  ];
  
  for (const file of messageFiles) {
    try {
      const imported = await import(`@/messages/${validLocale}/${file}.json`);
      const fileMessages = imported.default || imported;
      // Namespace the messages under the file name
      messages[file] = fileMessages;
    } catch (error) {
      console.warn(`Failed to load message file: ${file}.json for locale: ${validLocale}`);
      // Set empty object as fallback
      messages[file] = {};
    }
  }
  
  return {
    locale: validLocale,
    messages
  };
});