import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';

expect.extend(toHaveNoViolations);

const ROUTES = [
  ['/', /bring the storm/i],
  ['/registration/', /registration is open/i],
  ['/schedule/', /where to be/i],
  ['/equipment/', /gear up/i],
  ['/area-teams/', /the next level/i],
  ['/contact/', /got questions/i],
  ['/does-not-exist', /page not found/i],
];

function renderRoute(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe.each(ROUTES)('%s', (path, heading) => {
  test('renders one h1 inside the layout landmarks', () => {
    renderRoute(path);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(heading);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('skip link is the first focusable element', () => {
    const { container } = renderRoute(path);
    const first = container.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
    expect(first).toHaveTextContent('Skip to main content');
  });

  test('has no axe violations', async () => {
    const { container } = renderRoute(path);
    expect(await axe(container)).toHaveNoViolations();
  });
});

test('menu button exposes its state', () => {
  renderRoute('/');
  const button = screen.getByRole('button', { name: 'Menu' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(button).toHaveAttribute('aria-controls', 'primary-nav');
});
