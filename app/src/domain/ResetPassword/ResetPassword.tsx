import React, { FC, ReactElement, BaseSyntheticEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Div, H1, Page, Space, P, Span } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input';
import { Color } from 'lib/themes/interface';
import { Unbird, Check } from 'components/Icons';
import RenderIf from 'components/RenderIf';
import { Main } from '../Styles';

const ResetPassword: FC = (): ReactElement => {
  const { t: translate } = useTranslation();
  const [data, setData] = useState({ email: '', recoverySent: false });
  const history = useHistory();

  const onInputChange = (
    field: string,
    data: object,
    setData: Function,
    event: BaseSyntheticEvent
  ) => {
    return setData({ ...data, [field]: event.target.value });
  };

  return (
    <Page color={Color.black} background='#ffffff' padding='21px 32px'>
      <Unbird />
      <Main>
        <Div
          width='inherit'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <RenderIf isTrue={!data.recoverySent}>
            <H1 color={Color.black} fontSize='24px'>
              {translate('resetpassword.header')}
            </H1>
            <Space height='16px' />
            <P
              fontWeight='400'
              fontSize='14px'
              lineHeight='14px'
              color={Color.darkAsh}
              width='366px'
            >
              {translate('resetpassword.resetMessage')}
            </P>
            <Space height='17px' />
            <Div className='form-content' width='30%'>
              <Div className='form-input-container'>
                <Input
                  errorMessage=''
                  title='Email address'
                  type='email'
                  onInputChange={(e) =>
                    onInputChange('email', data, setData, e)
                  }
                  value={data.email}
                  placeholder='johndoe@gmail.com'
                />
              </Div>
              <Space height='32px' />
              <Button
                background='#18C1E0'
                width='100%'
                borderRadius='10px'
                textTransform='uppercase'
                padding='12px 24px'
                color={Color.white}
              >
                {translate('resetpassword.reset')}
              </Button>
              <Space height='32px' />
            </Div>
            <P
              fontWeight='400'
              fontSize='14px'
              lineHeight='14px'
              color={Color.darkAsh}
            >
              <Link
                to='/login'
                style={{
                  textDecoration: 'none',
                  color: '#666',
                  fontWeight: 700,
                }}
              >
                {translate('resetpassword.backToLogin')}
              </Link>{' '}
            </P>
          </RenderIf>
          <RenderIf isTrue={data.recoverySent}>
            <Div
              background='linear-gradient(134.64deg, #05C1E0 -25.8%, #149FB8 74.84%)'
              width='39px'
              height='39px'
              padding='10px'
              borderRadius='50%'
            >
              <Check />
            </Div>
            <Space height='22px' />
            <H1 color={Color.black} fontSize='24px'>
              {translate('resetpassword.messageSent')}
            </H1>
            <Space height='13px' />
            <P
              fontWeight='400'
              fontSize='14px'
              lineHeight='14px'
              color={Color.darkAsh}
              width='366px'
            >
              {translate('resetpassword.resetSuccess')}
            </P>
            <Space height='35px' />
            <Button
              background='#fff'
              fontSize='14px'
              color={Color.darkAsh}
              borderRadius='44px'
              padding='0'
              width='192px'
              onClick={() => history.push('/login')}
            >
              <Div
                fontWeight='400'
                fontSize='14px'
                lineHeight='14px'
                color={Color.darkAsh}
                border='1px solid #D8D8D8'
                borderRadius='44px'
                padding='13px 19px'
                width='inherit'
                display='flex'
                justifyContent='space-between'
              >
                <Span className='reset-arrow-back'>{'<'}</Span>
                <P marginRight='34px' fontWeight='400'>
                  {translate('resetpassword.backToLogin')}
                </P>{' '}
              </Div>
            </Button>
          </RenderIf>
        </Div>
      </Main>
    </Page>
  );
};

export default ResetPassword;
