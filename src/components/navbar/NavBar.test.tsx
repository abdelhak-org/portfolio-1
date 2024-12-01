import { render, screen } from '@test-utils';
import { NavBar } from './NavBar';

describe('Navbar component', () => {
  it('has correct Vite guide link', () => {
    render(<NavBar />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
