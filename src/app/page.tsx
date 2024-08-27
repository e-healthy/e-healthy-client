'use client';

import Image from 'next/image';
import classNames from 'classnames';

import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Typography from '@/components/Typography';
import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';
import useMediaQuery from '@/hooks/useMediaQuery';

import styles from './page.module.scss';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const logoSize = isMobile ? 'medium' : 'large';
  const titleSize = isMobile ? 'h5' : 'h3';
  const contentSize = isMobile ? 'body' : 'body';

  const classes = {
    root: classNames(styles['p-root']),
    logo: classNames(styles['p-root__logo']),
    content: classNames(styles['p-root__content']),
    title: classNames(styles['p-root__content__title']),
    email: classNames(styles['p-root__content__email']),
  };

  return (
    <main>
      <Navigation />
      <section className={classes.root}>
        <div className={classes.logo}>
          <Logo size={logoSize} />
        </div>
        <div className={classes.content}>
          <Typography
            variant={titleSize}
            as="h1"
            align="center"
            className={classes.title}
          >
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

          <form>
            <Checkbox
              id="terms"
              label={
                <Typography variant="body">
                  Li e estou de acordo com o Termo de Uso e Política de
                  Privacidade.
                </Typography>
              }
              error={'Por favor, concorde com os termos.'}
            />
            <Checkbox
              id="communications"
              label={
                <Typography variant="body">
                  Desejo receber comunicações sobre promocões e novidades.
                </Typography>
              }
            />
          </form>

          <div className={classes.email}>
            <Input
              id="email"
              placeholder="Digite seu email"
              startAdornment={
                <Image src="/email.svg" alt="Email" width={20} height={16} />
              }
              error="Email inválido"
            />
            <Button>
              <Image
                src="/arrow-foward.svg"
                alt="Email"
                width={16}
                height={16}
              />
            </Button>
          </div>

          <Typography variant="bodySmall" align="justify" styling="bold">
            Ao preencher este formulário você a equipe do E-Healthy, a te
            contactar por e-mail. Nenhum dos seus dados será utilizado por
            terceiros e interrompemos a sua assinatura a qualquer momento que
            desejar.
          </Typography>
        </div>
      </section>
    </main>
  );
};

export default Home;
