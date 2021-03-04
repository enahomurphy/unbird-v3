import React, { FC, ReactElement, useState } from 'react';
import { useTranslation} from 'react-i18next';

import { Div, H1, Page, Space, P } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input'
import { Color } from 'lib/themes/interface';
import { Unbird } from 'components/Icons';

const Login: FC = (): ReactElement => {
  const { t } = useTranslation();
  const [data, setData] = useState({ username: '', password: '' })

  const onInputChange = (field, data, setData, event) => {
    return setData({ ...data, [field]: event.target.value });
  };

  return (
    <Page color={Color.black} background='#ffffff' padding='21px 32px'>
      <Div display="flex" alignItems='baseline' width='90px' justifyContent='space-between'>
        <Unbird /><H1 fontSize='18px' color={Color.black}>unbird</H1>
      </Div>
      <main style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px' }}>
        <div style={{ width: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Space height='30px'>
            <H1 color={Color.black} fontSize='24px' lineHeight='16px'>{t('translation.header1')}</H1>
          </Space>
          <P fontWeight='400' fontSize='14px' lineHeight='14px' color={Color.darkAsh}>{t('translation.welcome.part1')}<br />{t('translation.welcome.part2')}</P>
          <Space height='17px' />
          <Div className='form-content' width='30%'>
            <Div className='form-input-container'>
              <Input errorMessage='' renderTitle={false} title='username' onInputChange={(e) => onInputChange('username', data, setData, e)} value={data.username} placeholder='johndoe@gmail.com' />
              <Input renderTitle={false} title='password' type='password' onInputChange={(e) => onInputChange('password', data, setData, e)} value={data.password} placeholder='password' />
            </Div>
            <Space height='32px' />
            <Button background='#18C1E0' width='100%' borderRadius='44px' textTransform='uppercase'>LOG IN</Button>
            <Space height='32px' />
          </Div>
          <P fontWeight='400' fontSize='14px' lineHeight='14px' color={Color.darkAsh}>{t('translation.lostPassword.part1')} <a href='#' style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}>{t('translation.lostPassword.part2')}</a></P>
          <Space height='8px' />
          <P fontWeight='400' fontSize='14px' lineHeight='14px' color={Color.darkAsh}>New here? <a href='#' style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}>Create a new workspace</a> for your organization</P>
        </div>
      </main>
    </Page>
  );
};

export default Login;
