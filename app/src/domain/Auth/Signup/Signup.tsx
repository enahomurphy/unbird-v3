import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Div, H1, Page, Space, P } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input';
import { Color } from 'lib/themes/interface';
import { Main } from '../Styles';
import { ISignUp } from 'domain/Auth/interfaces';
import { storage } from 'lib/utils/storage';
import { SIGNUP_MUTATION } from './graphql/mutation';
import { schema } from './validationSchema';

const Signup: FC = (): ReactElement => {
  const { t: translate } = useTranslation();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const [createUser, { error: signupServerError, loading }] = useMutation(
    SIGNUP_MUTATION
  );

  const signupUser = async (data: ISignUp) => {
    const { firstName, lastName, email, password, jobTitle } = data;
    try {
      const {
        data: { signup },
      } = await createUser({
        variables: { firstName, lastName, email, password, jobTitle },
      });
      storage.setToken(signup.token);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Page color={Color.black} background="#ffffff">
      <Main>
        <Div
          width="inherit"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <P
            className="signup-text1"
            color={Color.black}
            width="396px"
            fontSize="18px"
            lineHeight="24px"
          >
            {translate('signup.signupText')}
          </P>
          <Space height="16px" />
          <H1 fontSize="24px" color={Color.black}>
            {translate('signup.tryUnbird')}
          </H1>
          <Space height="32px" />
          <Div className="form-content" width="30%">
            <form className="form-input-container">
              <Input
                errorMessage={errors.firstName?.message}
                title="First name"
                name="firstName"
                register={register}
                placeholder={translate('signup.placeholder.firstName')}
              />
              <Input
                errorMessage={errors.lastName?.message}
                title="Last name"
                name="lastName"
                register={register}
                placeholder={translate('signup.placeholder.lastName')}
              />
              <Input
                errorMessage={errors.email?.message}
                title="Email Address"
                name="email"
                register={register}
                placeholder={translate('signup.placeholder.email')}
              />
              <Input
                errorMessage={errors.password?.message}
                title="Password"
                type="password"
                name="password"
                register={register}
                placeholder={translate('signup.placeholder.password')}
              />
              <Input
                errorMessage={errors.confirmPassword?.message}
                title="Confirm password"
                type="password"
                name="confirmPassword"
                register={register}
                placeholder={translate('signup.placeholder.confirmPassword')}
              />
              <Input
                errorMessage={errors.jobTitle?.message}
                title={translate('signup.placeholder.job')}
                name="jobTitle"
                register={register}
                placeholder={translate('signup.placeholder.job')}
              />
            </form>
            <Space height="32px" />
            <Button
              background="#18C1E0"
              width="100%"
              borderRadius="10px"
              textTransform="uppercase"
              padding="12px 24px"
              color={Color.white}
              onClick={handleSubmit(signupUser)}
              disabled={loading}
            >
              {translate('signup.signupBtnText')}
            </Button>
            <Space height="32px" />
          </Div>
          <P
            fontWeight="400"
            fontSize="14px"
            lineHeight="14px"
            color={Color.darkAsh}
          >
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}
            >
              {translate('signup.toLogin')}
            </Link>
          </P>
        </Div>
      </Main>
    </Page>
  );
};

export default Signup;
