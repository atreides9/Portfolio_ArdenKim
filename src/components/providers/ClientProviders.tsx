'use client';

import { Navigation } from '@/components/layouts/Navigation/Navigation';
import { ThemeProvider } from './ThemeProvider';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navigation />
      {children}
    </ThemeProvider>
  );
}
