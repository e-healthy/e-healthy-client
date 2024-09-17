'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import Image from 'next/image';

import Card from './components/Card';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import Modal from '@/components/Modal';
import Navigation from '@/components/Navigation';
import Typography from '@/components/Typography';
import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import { subscribe, TSubscribe } from '@/services/subscribe';

import database from './database.json';
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
  const titleVariant = isMobile ? 'h5' : 'h3';

  const classes = {
    primary: classNames(styles['s-primary']),
    logo: classNames(styles['s-primary__logo']),
    content: classNames(styles['s-primary__content']),
    title: classNames(styles['s-primary__content__title']),
    label: classNames(styles['s-primary__content__label']),
    email: classNames(styles['s-primary__content__email']),
    error: classNames(styles['s-primary__content__error']),
    secondary: classNames(styles['s-secondary']),
  };

  const db = database;

  return (
    <>
      <Navigation />
      <main>
        <section className={classes.primary}>
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
              variant={titleVariant}
              as="h1"
              align="center"
              className={classes.title}
            >
              {db.primary.title}
            </Typography>
            <Typography variant="body" align="justify">
              {db.primary.content}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Checkbox
                id="terms"
                label={
                  <Typography variant="bodySmall" className={classes.label}>
                    {db.primary.forms.terms}
                  </Typography>
                }
                error={errors?.terms?.message}
                {...register('terms')}
              />
              <Checkbox
                id="communications"
                label={
                  <Typography variant="bodySmall" className={classes.label}>
                    {db.primary.forms.communications}
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
                    <Icon name="email" alt="Ícone de Email" size="xxsmall" />
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
                  {db.primary.forms.error}
                </Typography>
              )}
            </form>

            <Typography variant="bodySmall" align="justify" styling="bold">
              {db.primary.forms.disclaimer}
            </Typography>
          </div>
        </section>

        <section className={classes.secondary}>
          {db.secondary.cards.map(({ id, iconName, iconAlt, title, text }) => {
            return (
              <Card
                key={id}
                iconName={iconName}
                iconAlt={iconAlt}
                title={title}
                text={text}
              />
            );
          })}
        </section>
      </main>

      <Footer> {db.footer} </Footer>
    </>
  );
};

export default Home;
