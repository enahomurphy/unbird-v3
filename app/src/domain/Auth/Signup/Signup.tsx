import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import PageWithLogo from '../../components/PageWithLogo';
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
      history.push('/workspace/setup');
    } catch (e) {
      console.log(e);
    }
  };

  const LoginButton = (
    <Link
      to="/login"
      style={{ textDecoration: 'none', color: '#666', fontWeight: 700 }}
    >
      <Button
        border="1.5px solid #DADDE0"
        background="white"
        borderRadius="8px"
        color={Color.steele0}
        width='75px'
        height='35px'
      >
        Log In
      </Button>
    </Link>
  );

  return (
    <PageWithLogo rightItem={LoginButton}>
      <Main>
        <Div
          width="inherit"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <H1 fontSize="24px" color={Color.black} lineHeight="32px">
            {translate('signup.tryUnbird')}
          </H1>
          <Space height="8px" />
          <P
            className="signup-text1"
            color={Color.black}
            width="396px"
            fontSize="16px"
            lineHeight="24px"
          >
            {translate('signup.signupText')}
          </P>
          <Space height="40px" />
          <Div className="form-content" width="555px">
            <form className="form-input-container">
              <Input
                errorMessage={errors.firstName?.message}
                title="First name"
                name="firstName"
                register={register}
                placeholder={translate('signup.placeholder.firstName')}
                sideView={true}
                widthAttr="392px"
                heightAttr="48px"
              />
              <Space />
              <Input
                errorMessage={errors.lastName?.message}
                title="Last name"
                name="lastName"
                register={register}
                placeholder={translate('signup.placeholder.lastName')}
                sideView={true}
                widthAttr="392px"
                heightAttr="48px"
              />
              <Space />
              <Input
                errorMessage={errors.email?.message}
                title="Email Address"
                name="email"
                register={register}
                placeholder={translate('signup.placeholder.email')}
                sideView={true}
                widthAttr="392px"
                heightAttr="48px"
              />
              <Space />
              <Input
                errorMessage={errors.password?.message}
                title="Password"
                type="password"
                name="password"
                register={register}
                placeholder={translate('signup.placeholder.password')}
                sideView={true}
                widthAttr="392px"
                heightAttr="48px"
              />
              <Space />
              <Input
                errorMessage={errors.confirmPassword?.message}
                title="Confirm password"
                type="password"
                name="confirmPassword"
                register={register}
                placeholder={translate('signup.placeholder.confirmPassword')}
                sideView={true}
                widthAttr="392px"
                heightAttr="48px"
              />
              <Space />
              <Input
                errorMessage={errors.jobTitle?.message}
                title={translate('signup.placeholder.job')}
                name="jobTitle"
                register={register}
                placeholder={translate('signup.placeholder.job')}
                sideView={true}
                widthAttr="392px"
                heightAttr="48px"
              />
              <Space height="32px" />
              <Button
                background="#18C1E0"
                width="392px"
                height="56px"
                borderRadius="10px"
                textTransform="uppercase"
                padding="12px 24px"
                color={Color.white}
                onClick={handleSubmit(signupUser)}
                disabled={loading}
                margin='0 180px'
              >
                {translate('signup.signupBtnText')}
              </Button>
            </form>
            <Space height="32px" />
          </Div>
        </Div>
      </Main>
    </PageWithLogo>
  );
};

export default Signup;
