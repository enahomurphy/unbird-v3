import { H1 } from 'components/Styles';
import React, { FC, ReactElement } from 'react';
import { useTranslation} from 'react-i18next';

const Home: FC = (): ReactElement => {
  const {t} = useTranslation();
  return <H1>{t('header.welcome')}</H1>
};

export default Home;
