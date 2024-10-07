/* eslint-disable no-irregular-whitespace */

import classNames from 'classnames';

import Breadcrumb from '@/components/Breadcrumb';
import Typography from '@/components/Typography';

import styles from '../layout.module.scss';

const PrivacyPolice = () => {
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
              text: 'Política de Privacidade',
              href: '/sobre/politica-de-privacidade',
            },
          ]}
        />

        <Typography
          variant="h4"
          as="h1"
          align="center"
          className={classes.title}
        >
          Política de Privacidade
        </Typography>

        <Typography variant="bodySmall">
          Na E-Healthy, levamos sua privacidade a sério. Esta Política de
          Privacidade descreve como coletamos, usamos, armazenamos e protegemos
          suas informações pessoais ao visitar e interagir com nosso site.
        </Typography>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            1. Coleta de Informações
          </Typography>
          <Typography variant="bodySmall">
            <strong>1.1 Informações que você nos fornece: </strong>
            Podemos coletar informações pessoais que você nos fornece
            diretamente, como seu nome, endereço de e-mail, número de telefone,
            e outras informações de contato quando você se cadastra em nosso
            site, preenche formulários, ou entra em contato conosco.
          </Typography>

          <Typography variant="bodySmall">
            <strong>1.2 Informações coletadas automaticamente: </strong>
            Podemos coletar automaticamente certas informações sobre sua visita
            ao nosso site, incluindo seu endereço IP, tipo de navegador, tempo
            de acesso, páginas visualizadas, e os links em que você clicou.
            Usamos cookies e outras tecnologias de rastreamento para coletar
            essas informações e melhorar a experiência do usuário.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            2. Uso das Informações
          </Typography>
          <Typography variant="bodySmall">
            As informações que coletamos podem ser usadas para:
          </Typography>
          <ul className={classes.list.list}>
            <li>
              <Typography variant="bodySmall">
                - Fornecer, operar e manter nosso site;
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                - Melhorar, personalizar e expandir nossos serviços;
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                - Desenvolver novos produtos, serviços, recursos e
                funcionalidades;
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                - Enviar e-mails periódicos, incluindo atualizações e
                informações relacionadas ao serviço;
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                - Proteger, investigar e deter atividades fraudulentas, não
                autorizadas ou ilegais.
              </Typography>
            </li>
          </ul>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            3. Compartilhamento de Informações
          </Typography>
          <Typography variant="bodySmall">
            Não vendemos, trocamos ou transferimos suas informações pessoais
            para terceiros, exceto nos seguintes casos:
          </Typography>
          <ul className={classes.list.list}>
            <li>
              <Typography variant="bodySmall">
                - <strong>Provedores de serviços:</strong> Podemos compartilhar
                suas informações com provedores de serviços de terceiros que nos
                ajudam a operar nosso site ou conduzir nossos negócios, desde
                que essas partes concordem em manter essas informações
                confidenciais.
              </Typography>
            </li>
            <li>
              <Typography variant="bodySmall">
                - <strong>Exigências legais:</strong> Podemos divulgar suas
                informações pessoais se for exigido por lei, ou se acreditarmos
                que tal ação é necessária para cumprir uma obrigação legal,
                proteger nossos direitos, ou proteger a segurança de nossos
                usuários.
              </Typography>
            </li>
          </ul>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            4. Segurança das Informações
          </Typography>
          <Typography variant="bodySmall">
            Tomamos medidas razoáveis para proteger suas informações pessoais
            contra perda, roubo, uso indevido, acesso não autorizado,
            divulgação, alteração e destruição. No entanto, nenhum método de
            transmissão pela Internet ou armazenamento eletrônico é 100% seguro,
            e não podemos garantir a segurança absoluta de suas informações.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            5. Seus Direitos
          </Typography>
          <Typography variant="bodySmall">
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais que mantemos. Se desejar exercer esses direitos, entre em
            contato conosco através do e-mail [endereço de e-mail].
            Responderemos à sua solicitação dentro de um prazo razoável.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            6. Links para Sites de Terceiros
          </Typography>
          <Typography variant="bodySmall">
            Nosso site pode conter links para sites de terceiros. Não somos
            responsáveis pelas práticas de privacidade ou pelo conteúdo desses
            sites. Recomendamos que você revise as políticas de privacidade de
            qualquer site de terceiros que visitar.
          </Typography>
        </div>

        <div className={classes.list.item}>
          <Typography variant="body" as="h2">
            7. Alterações nesta Política de Privacidade
          </Typography>
          <Typography variant="bodySmall">
            Podemos atualizar esta Política de Privacidade periodicamente para
            refletir mudanças em nossas práticas ou por outros motivos
            operacionais, legais ou regulamentares. Quaisquer alterações serão
            publicadas nesta página, e a data de revisão será atualizada.
          </Typography>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolice;
