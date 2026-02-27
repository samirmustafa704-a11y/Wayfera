import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wayfera - Travel Agency',
  description: 'Discover amazing destinations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
