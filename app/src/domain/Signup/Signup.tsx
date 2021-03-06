import React, { FC, ReactElement, useState } from 'react';
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';

import { Div, H1, Page, Space, P } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input'
import { Color } from 'lib/themes/interface';
import { Unbird } from 'components/Icons';
import { Main } from '../Styles';

const Login: FC = (): ReactElement => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
    job: '',
    aboutUs: ''
  });

  const onInputChange = (field, data, setData, event) => {
    return setData({ ...data, [field]: event.target.value });
  };

  return (
    <Page color={Color.black} background='#ffffff' padding='21px 32px'>
      <Div display="flex" alignItems='baseline' width='90px' justifyContent='space-between'>
        <Unbird /><H1 fontSize='18px' color={Color.black}>unbird</H1>
      </Div>
      <Main>
        <Div width='inherit' display='flex' flexDirection='column' alignItems='center'>
          <P className='signup-text1' color={Color.black} width='396px' fontSize='18px' lineHeight='24px'>{t('signup.text1')}</P>
          <Space height='30px' />
          <Div className='form-content' width='30%'>
            <Div className='form-input-container'>
              <Input errorMessage='' renderTitle={false} title='company' onInputChange={(e) => onInputChange('company', data, setData, e)} value={data.company} placeholder={t('signup.placeholder.company')} />
              <Input errorMessage='' renderTitle={false} title='email' onInputChange={(e) => onInputChange('email', data, setData, e)} value={data.email} placeholder={t('signup.placeholder.email')} />
              <Input renderTitle={false} title='password' type='password' onInputChange={(e) => onInputChange('password', data, setData, e)} value={data.password} placeholder={t('signup.placeholder.password')} />
              <Input renderTitle={false} title='confirmPassword' type='password' onInputChange={(e) => onInputChange('confirmPassword', data, setData, e)} value={data.confirmPassword} placeholder={t('signup.placeholder.confirmPassword')} />
              <Input errorMessage='' renderTitle={false} title='job' onInputChange={(e) => onInputChange('job', data, setData, e)} value={data.job} placeholder={t('signup.placeholder.job')} />
              <Input errorMessage='' renderTitle={false} title='aboutUs' onInputChange={(e) => onInputChange('aboutUs', data, setData, e)} value={data.aboutUs} placeholder={t('signup.placeholder.aboutUs')} />
            </Div>
            <Space height='32px' />
            <Button background='#18C1E0' width='100%' borderRadius='44px' textTransform='uppercase'>{t('signup.signupText')}</Button>
            <Space height='32px' />
          </Div>
          <P fontWeight='400' fontSize='14px' lineHeight='14px' color={Color.darkAsh}><Link to='/login' style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}>{t('signup.toLogin')}</Link></P>
        </Div>
      </Main>
    </Page>
  );
};

export default Login;
