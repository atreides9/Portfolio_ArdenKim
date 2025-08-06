'use client';

import { ThemeProvider } from './ThemeProvider';
import { Navigation } from '@/components/layouts/Navigation/Navigation';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navigation />
      {children}
    </ThemeProvider>
  );
}