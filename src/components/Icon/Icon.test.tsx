import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon, { TSizes } from './Icon';

const defaultProps = {
  name: 'home',
  alt: 'Ícone de casa',
  size: 'medium' as TSizes,
};

const setup = (props = defaultProps) => render(<Icon {...props} />);

describe('<Icon />', () => {
  it('should render the icon with the correct src path', () => {
    setup();

    const image = screen.getByAltText('Ícone de casa');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/icons/home.svg');
  });

  it('should render with the correct alt text', () => {
    setup({
      name: 'settings',
      alt: 'Ícone de configurações',
      size: 'small',
    });

    const image = screen.getByAltText('Ícone de configurações');
    expect(image).toBeInTheDocument();
  });

  it('should render the icon with the correct size for xsmall', () => {
    setup({ name: 'profile', alt: 'Ícone de perfil', size: 'xsmall' });

    const image = screen.getByAltText('Ícone de perfil');
    expect(image).toHaveAttribute('height', '25');
    expect(image).toHaveAttribute('width', '25');
  });

  it('should render the icon with the correct size for small', () => {
    setup({ name: 'profile', alt: 'Ícone de perfil', size: 'small' });

    const image = screen.getByAltText('Ícone de perfil');
    expect(image).toHaveAttribute('height', '50');
    expect(image).toHaveAttribute('width', '50');
  });

  it('should render the icon with the correct size for medium', () => {
    setup({ name: 'profile', alt: 'Ícone de perfil', size: 'medium' });

    const image = screen.getByAltText('Ícone de perfil');
    expect(image).toHaveAttribute('height', '75');
    expect(image).toHaveAttribute('width', '75');
  });

  it('should render the icon with the correct size for large', () => {
    setup({ name: 'profile', alt: 'Ícone de perfil', size: 'large' });

    const image = screen.getByAltText('Ícone de perfil');
    expect(image).toHaveAttribute('height', '100');
    expect(image).toHaveAttribute('width', '100');
  });

  it('should render with a non-existing icon name, showing the default src', () => {
    setup({
      name: 'non-existing-icon',
      alt: 'Ícone inexistente',
      size: 'medium',
    });

    const image = screen.getByAltText('Ícone inexistente');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/icons/non-existing-icon.svg');
  });
});
