import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePerformance, useMemoryMonitor } from '@/hooks/usePerformance';
import { useAccessibilityCheck } from '@/utils/accessibility';

interface ExampleQAComponentProps {
  title: string;
  onAction?: () => void;
}

/**
 * Example component demonstrating QA tools integration
 */
export const ExampleQAComponent = ({ title, onAction }: ExampleQAComponentProps) => {
  // Performance monitoring
  usePerformance({
    componentName: 'ExampleQAComponent',
    warnThreshold: 16, // Warn if render takes > 16ms
  });

  // Memory monitoring
  useMemoryMonitor('ExampleQAComponent');

  // Accessibility checking in development
  useAccessibilityCheck();

  return (
    <Card className="w-full max-w-md" role="region" aria-label="Example QA Component">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This component demonstrates proper QA practices including:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>TypeScript strict mode compliance</li>
          <li>Performance monitoring hooks</li>
          <li>Accessibility attributes</li>
          <li>Error boundary compatibility</li>
        </ul>
        
        <Button 
          onClick={onAction}
          aria-label="Perform example action"
          className="w-full"
        >
          Perform Action
        </Button>

        {/* Example of keyboard accessible custom element */}
        <div
          role="button"
          tabIndex={0}
          className="p-4 border rounded-lg cursor-pointer hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={onAction}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onAction?.();
            }
          }}
          aria-label="Alternative action button"
        >
          Keyboard Accessible Custom Button
        </div>
      </CardContent>
    </Card>
  );
};