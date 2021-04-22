import React, { FC, ReactElement } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Div, H1, Page, Space, P } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input';
import { Color } from 'lib/themes/interface';
import { ILogin } from 'domain/Auth/interfaces';
import { storage } from 'lib/utils/storage';
import { Main } from '../Styles';
import { LOGIN_MUTATION } from './graphql/mutation';
import { schema } from './validationSchema';

const Login: FC = (): ReactElement => {
  const { t: translate } = useTranslation();
  const [login, { error, loading }] = useMutation(LOGIN_MUTATION);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const loginUser = async (data: ILogin) => {
    const { email, password } = data;
    try {
      const {
        data: { login: loginData },
      } = await login({
        variables: { email, password },
      });
      storage.setToken(loginData.token);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Page color={Color.black} background='#ffffff'>
      <Main>
        <Div
          width='inherit'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <H1 color={Color.black} fontSize='24px'>
            {translate('login.header')}
          </H1>
          <Space height='16px' />
          <P
            fontWeight='400'
            fontSize='14px'
            lineHeight='14px'
            color={Color.darkAsh}
          >
            {translate('login.welcome.userMessage')}
            <br />
            {translate('login.welcome.passwordMessage')}
          </P>
          {/* To be uncommented when design for server error is available */}
          {/* <RenderIf isTrue={Boolean(error?.message)}>
            <Space height='8px' />
            <Div
              background='pink'
              padding='15px'
              borderRadius='20px'
              color={Color.inputError}
            >
              {error?.message}
            </Div>
            <Space height='8px' />
          </RenderIf> */}
          <Space height='17px' />
          <Div className='form-content' width='30%'>
            <Div className='form-input-container'>
              <Input
                errorMessage={errors.email?.message}
                title='Email address'
                type='email'
                name='email'
                register={register}
                placeholder='johndoe@gmail.com'
              />
              <Input
                errorMessage={errors.password?.message}
                title='Password'
                type='password'
                register={register}
                name='password'
                placeholder='password'
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
              onClick={handleSubmit(loginUser)}
              disabled={loading}
            >
              {translate('login.login')}
            </Button>
            <Space height='32px' />
          </Div>
          <P
            fontWeight='400'
            fontSize='14px'
            lineHeight='14px'
            color={Color.darkAsh}
          >
            {translate('login.lostPassword.recover')}{' '}
            <Link
              to='/resetpassword'
              style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}
            >
              {translate('login.lostPassword.here')}
            </Link>
          </P>
          <Space height='8px' />
          <P
            fontWeight='400'
            fontSize='14px'
            lineHeight='14px'
            color={Color.darkAsh}
          >
            New here?{' '}
            <Link
              to='/signup'
              style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}
            >
              Create a new workspace
            </Link>{' '}
            for your organization
          </P>
        </Div>
      </Main>
    </Page>
  );
};

export default Login;
