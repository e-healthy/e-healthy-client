import { render, screen } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

describe('<Breadcrumb />', () => {
  const breadcrumbsMock = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  it('should render without crashing', () => {
    render(<Breadcrumb breadcrumbs={breadcrumbsMock} />);
    const breadcrumbList = screen.getByRole('list');
    expect(breadcrumbList).toBeInTheDocument();
  });

  it('should render the correct number of breadcrumbs', () => {
    render(<Breadcrumb breadcrumbs={breadcrumbsMock} />);
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems.length).toBe(3);
  });

  it('should render the home icon for the first breadcrumb', () => {
    render(<Breadcrumb breadcrumbs={breadcrumbsMock} />);
    const homeIcon = screen.getByAltText('Ícone de voltar à página anterior');
    expect(homeIcon).toBeInTheDocument();
  });

  it('should render the correct href and text for each breadcrumb', () => {
    render(<Breadcrumb breadcrumbs={breadcrumbsMock} />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('should not render home icon if the first breadcrumb is not Home or Página Inicial', () => {
    const nonHomeBreadcrumbs = [
      { text: 'About', href: '/about' },
      { text: 'Services', href: '/services' },
    ];

    render(<Breadcrumb breadcrumbs={nonHomeBreadcrumbs} />);
    const homeIcon = screen.queryByAltText('Ícone de voltar à página anterior');
    expect(homeIcon).not.toBeInTheDocument();
  });
});
