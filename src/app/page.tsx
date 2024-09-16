'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import Image from 'next/image';

import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Typography from '@/components/Typography';
import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';
import Modal from '@/components/Modal';
import useMediaQuery from '@/hooks/useMediaQuery';
import { subscribe, TSubscribe } from '@/services/subscribe';

import styles from './page.module.scss';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [subscribeError, setSubscribeError] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const schema = z.object({
    terms: z.boolean().refine((value) => value === true, 'Campo obrigatório.'),
    communications: z.boolean().refine((value) => value === true),
    email: z.string().email({
      message: 'Email inválido.',
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      terms: false,
      communications: false,
      email: '',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: TSubscribe) => {
    setSubscribeError(false);

    const subscribeResponse = await subscribe(data);

    if (subscribeResponse.error) {
      setSubscribeError(true);
      return;
    }

    reset();
    openModal();
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const logoSize = isMobile ? 'medium' : 'large';
  const titleSize = isMobile ? 'h5' : 'h3';
  const contentSize = isMobile ? 'body' : 'body';

  const classes = {
    root: classNames(styles['p-root']),
    logo: classNames(styles['p-root__logo']),
    content: classNames(styles['p-root__content']),
    title: classNames(styles['p-root__content__title']),
    label: classNames(styles['p-root__content__label']),
    email: classNames(styles['p-root__content__email']),
    error: classNames(styles['p-root__content__error']),
  };

  return (
    <main>
      <Navigation />
      <section className={classes.root}>
        <Modal isOpen={isModalOpen} onClose={closeModal} closeByIcon>
          <Typography variant="bodyLarge" styling="bold">
            Obrigado por demonstrar interesse!
          </Typography>
          <Typography variant="body">
            Em breve você receberá mais informações.
          </Typography>
        </Modal>

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Checkbox
              id="terms"
              label={
                <Typography variant="bodySmall" className={classes.label}>
                  Li e estou de acordo com o Termo de Uso e Política de
                  Privacidade.
                </Typography>
              }
              error={errors?.terms?.message}
              {...register('terms')}
            />
            <Checkbox
              id="communications"
              label={
                <Typography variant="bodySmall" className={classes.label}>
                  Desejo receber comunicações sobre promocões e novidades.
                </Typography>
              }
              {...register('communications')}
            />

            <div className={classes.email}>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                startAdornment={
                  <Image src="/email.svg" alt="Email" width={20} height={16} />
                }
                error={errors?.email?.message}
                {...register('email')}
              />
              <Button type="submit">
                <Image
                  src="/arrow-foward.svg"
                  alt="Email"
                  width={16}
                  height={16}
                />
              </Button>
            </div>
            {subscribeError && (
              <Typography
                variant="bodySmall"
                color="error"
                className={classes.error}
              >
                Esse email já está cadastrado.
              </Typography>
            )}
          </form>

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
