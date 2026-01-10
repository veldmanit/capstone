import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';
import '@/styles/variables.css';
import '@/styles/global.css';
import '@/styles/grid.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fieldsman - Strategic Growth Plan',
  description: 'Premium corporate report: From 50 to 3,000 Kitchens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
