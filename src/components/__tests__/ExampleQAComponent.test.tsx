import { describe, it, expect, vi } from 'vitest';
import { render, screen, testAccessibility } from '@/test/utils';
import { ExampleQAComponent } from '../ExampleQAComponent';

describe('ExampleQAComponent', () => {
  it('renders with title', () => {
    render(<ExampleQAComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onAction when button is clicked', async () => {
    const handleAction = vi.fn();
    const { user } = render(
      <ExampleQAComponent title="Test" onAction={handleAction} />
    );

    const button = screen.getByRole('button', { name: /perform example action/i });
    await user.click(button);

    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard interaction on custom button', async () => {
    const handleAction = vi.fn();
    const { user } = render(
      <ExampleQAComponent title="Test" onAction={handleAction} />
    );

    const customButton = screen.getByRole('button', { name: /alternative action button/i });
    
    // Test Enter key
    customButton.focus();
    await user.keyboard('{Enter}');
    expect(handleAction).toHaveBeenCalledTimes(1);

    // Test Space key
    await user.keyboard(' ');
    expect(handleAction).toHaveBeenCalledTimes(2);
  });

  it('passes accessibility tests', async () => {
    const { container } = render(
      <ExampleQAComponent title="Accessible Component" />
    );

    await testAccessibility(container);
  });

  it('has proper ARIA attributes', () => {
    render(<ExampleQAComponent title="Test" />);

    const region = screen.getByRole('region', { name: /example qa component/i });
    expect(region).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /perform example action/i });
    expect(button).toHaveAttribute('aria-label');
  });

  it('renders within performance budget', async () => {
    const startTime = performance.now();
    render(<ExampleQAComponent title="Performance Test" />);
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    // Component should render in under 50ms
    expect(renderTime).toBeLessThan(50);
  });

  it('maintains focus trap when tabbing', async () => {
    const { user } = render(<ExampleQAComponent title="Focus Test" />);

    // Tab through interactive elements
    await user.tab();
    expect(screen.getByRole('button', { name: /perform example action/i })).toHaveFocus();

    await user.tab();
    expect(screen.getByRole('button', { name: /alternative action button/i })).toHaveFocus();
  });
});