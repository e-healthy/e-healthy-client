/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */

import classNames from 'classnames';

import Breadcrumb from '@/components/Breadcrumb';
import Typography from '@/components/Typography';

import styles from '../layout.module.scss';

const TermsOfUse = () => {
  const classes = {
    default: classNames(styles['p-about']),
    title: classNames(styles['p-about__title']),
    list: {
      default: classNames(styles['p-about__list']),
      item: classNames(styles['p-about__list__item']),
      list: classNames(styles['p-about__list__item__list']),
    },
  };

  return (
    <>
      <main className={classes.default}>
        <Breadcrumb
          breadcrumbs={[
            { text: 'Página Inicial', href: '/' },
            {
              text: 'Termos de Uso',
              href: '/sobre/termos-de-uso',
            },
          ]}
        />

        <Typography
          variant="h4"
          as="h1"
          align="center"
          className={classes.title}
        >
          Termos de Uso
        </Typography>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            1. Aceitação dos Termos
          </Typography>
          <Typography variant="bodySmall">
            Ao acessar e utilizar este site, você concorda em cumprir e estar
            vinculado aos seguintes Termos de Uso.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            2. Alterações nos Termos
          </Typography>
          <Typography variant="bodySmall">
            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer
            momento, sem aviso prévio. É de sua responsabilidade revisar estes
            termos periodicamente. O uso contínuo do site após a publicação de
            quaisquer alterações constitui aceitação das mesmas.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            3. Uso do Site
          </Typography>
          <Typography variant="bodySmall">
            Você concorda em usar o site apenas para fins legais e de acordo com
            estes Termos de Uso. Você não deve usar o site de qualquer maneira
            que possa danificar, desativar, sobrecarregar ou prejudicar o site
            ou interferir no uso de qualquer outra parte.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            4. Propriedade Intelectual
          </Typography>
          <Typography variant="bodySmall">
            Você não pode reproduzir, distribuir, modificar, ou criar obras
            derivadas deste conteúdo sem a permissão expressa por escrito de
            E-Healthy.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            5. Limitação de Responsabilidade
          </Typography>
          <Typography variant="bodySmall">
            Este site e todo o conteúdo fornecido nele são oferecidos "como
            estão" e "conforme disponíveis", sem garantias de qualquer tipo,
            expressas ou implícitas. E-Healthy não será responsável por
            quaisquer danos diretos, indiretos, incidentais, consequenciais, ou
            punitivos decorrentes do uso ou incapacidade de uso deste site.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            6. Links para Terceiros
          </Typography>
          <Typography variant="bodySmall">
            Este site pode conter links para sites de terceiros que não são
            controlados por E-Healthy. Não nos responsabilizamos pelo conteúdo,
            políticas de privacidade, ou práticas de qualquer site de terceiros.
            O acesso a esses sites é por sua conta e risco.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            7. Privacidade
          </Typography>
          <Typography variant="bodySmall">
            O uso deste site também está sujeito à nossa Política de
            Privacidade, que descreve como coletamos, usamos e protegemos suas
            informações pessoais.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            8. Lei Aplicável
          </Typography>
          <Typography variant="bodySmall">
            Estes Termos de Uso serão regidos e interpretados de acordo com as
            leis do Brasil, sem considerar os conflitos de leis. Qualquer
            disputa decorrente destes Termos de Uso será resolvida
            exclusivamente nos tribunais competentes no Brasil.
          </Typography>
        </div>
      </main>
    </>
  );
};

export default TermsOfUse;
