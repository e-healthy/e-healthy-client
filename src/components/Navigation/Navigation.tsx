'use client';

import './Navigation.scss';

import Logo from '@/components/Logo';
import useMediaQuery from '@/hooks/useMediaQuery';

const Navigation: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const logoSize = isMobile ? 'xxsmall' : 'xsmall';

  return (
    <nav>
      <div>
        <Logo variant="wordmark" size={logoSize} />
      </div>
    </nav>
  );
};

export default Navigation;
