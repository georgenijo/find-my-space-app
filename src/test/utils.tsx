import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/providers/ThemeProvider';
import userEvent from '@testing-library/user-event';
import { runAccessibilityTests, formatA11yViolations } from '@/utils/accessibility';

// Create a custom render function that includes all providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  queryClient?: QueryClient;
}

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const AllTheProviders: React.FC<{ children: React.ReactNode; queryClient: QueryClient }> = ({
  children,
  queryClient,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export const customRender = (
  ui: ReactElement,
  {
    route = '/',
    queryClient = createTestQueryClient(),
    ...renderOptions
  }: CustomRenderOptions = {}
): RenderResult & { user: ReturnType<typeof userEvent.setup> } => {
  window.history.pushState({}, 'Test page', route);

  const user = userEvent.setup();

  return {
    user,
    ...render(ui, {
      wrapper: ({ children }) => (
        <AllTheProviders queryClient={queryClient}>{children}</AllTheProviders>
      ),
      ...renderOptions,
    }),
  };
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Accessibility testing helper
export const testAccessibility = async (_container: HTMLElement) => {
  const violations = await runAccessibilityTests();
  if (violations.length > 0) {
    throw new Error(`Accessibility violations found:\n${formatA11yViolations(violations)}`);
  }
};

// Common test data factories
export const createMockSpot = (overrides = {}) => ({
  id: '1',
  title: 'Test Parking Spot',
  description: 'A test parking spot description',
  price: 25,
  location: 'Test Location',
  availability: 'available',
  imageUrl: 'https://example.com/image.jpg',
  ...overrides,
});

export const createMockUser = (overrides = {}) => ({
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  role: 'user',
  ...overrides,
});

// Mock Supabase client
export const mockSupabaseClient = {
  auth: {
    getUser: vi.fn(),
    signIn: vi.fn(),
    signOut: vi.fn(),
    onAuthStateChange: vi.fn(),
  },
  from: vi.fn(() => ({
    select: vi.fn(() => ({
      eq: vi.fn(() => Promise.resolve({ data: [], error: null })),
      single: vi.fn(() => Promise.resolve({ data: null, error: null })),
    })),
    insert: vi.fn(() => Promise.resolve({ data: null, error: null })),
    update: vi.fn(() => Promise.resolve({ data: null, error: null })),
    delete: vi.fn(() => Promise.resolve({ data: null, error: null })),
  })),
};

// Performance testing helper
export const measureRenderTime = async (
  component: ReactElement,
  options?: CustomRenderOptions
): Promise<number> => {
  const start = performance.now();
  const { unmount } = customRender(component, options);
  const end = performance.now();
  unmount();
  return end - start;
};

// Wait for element to be removed
export const waitForElementToBeRemoved = async (
  callback: () => HTMLElement | null,
  options = { timeout: 4000 }
) => {
  const startTime = Date.now();
  
  while (callback() !== null) {
    if (Date.now() - startTime > options.timeout) {
      throw new Error(`Element was not removed within ${options.timeout}ms`);
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
};