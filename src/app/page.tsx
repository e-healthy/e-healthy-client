'use client';

import styles from './page.module.scss';

import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Typography from '@/components/Typography';
import useMediaQuery from '@/hooks/useMediaQuery';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const logoSize = isMobile ? 'medium' : 'large';
  const titleSize = isMobile ? 'h5' : 'h3';
  const contentSize = isMobile ? 'body' : 'body';

  return (
    <main>
      <Navigation />
      <section className={styles.main}>
        <div className={styles.logo}>
          <Logo size={logoSize} />
        </div>
        <div className={styles.content}>
          <Typography variant={titleSize} as="h1">
            Conheça o E-Healthy
          </Typography>
          <Typography variant={contentSize} align="justify">
            Somos um portal dedicado ao cuidado da sua saúde mental, oferecendo
            uma variedade de funcionalidades para promover equilíbrio, bem-estar
            e inspiração no seu dia-a-dia. Nosso espaço seguro e acolhedor
            inclui ferramentas de autoavaliação para monitorar seu progresso.
            Estamos comprometidos em te ajudar a alcançar um bem-estar mental
            duradouro e uma vida mais plena e satisfatória.
          </Typography>
        </div>
      </section>
    </main>
  );
};

export default Home;
