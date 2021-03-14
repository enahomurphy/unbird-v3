import React, { BaseSyntheticEvent, FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Div, H1, Page, Space, P } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input';
import { Color } from 'lib/themes/interface';
import { Unbird } from 'components/Icons';
import { Main } from '../Styles';
import { ISignUp } from 'shared/interfaces';

const Login: FC = (): ReactElement => {
  const { t: translate } = useTranslation();
  const [data, setData] = useState<ISignUp>({
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
    job: '',
    aboutUs: '',
  });

  const onInputChange = (field: string, data: object, setData: Function, event: BaseSyntheticEvent) => {
    return setData({ ...data, [field]: event.target.value });
  };

  return (
    <Page color={Color.black} background="#ffffff" padding="21px 32px">
      <Unbird />
      <Main>
        <Div
          width="inherit"
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="8%"
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
          <H1 fontSize="24px" color={Color.black}>{translate('signup.tryUnbird')}</H1>
          <Space height="32px" />
          <Div className="form-content" width="30%">
            <Div className="form-input-container">
              <Input
                errorMessage=""
                title="Company name"
                onInputChange={(e) =>
                  onInputChange('company', data, setData, e)
                }
                value={data.company}
                placeholder={translate('signup.placeholder.company')}
              />
              <Input
                errorMessage=""
                title="Email Address"
                onInputChange={(e) => onInputChange('email', data, setData, e)}
                value={data.email}
                placeholder={translate('signup.placeholder.email')}
              />
              <Input
                title="Password"
                type="password"
                onInputChange={(e) =>
                  onInputChange('password', data, setData, e)
                }
                value={data.password}
                placeholder={translate('signup.placeholder.password')}
              />
              <Input
                errorMessage=""
                title="Confirm password"
                type="password"
                onInputChange={(e) =>
                  onInputChange('confirmPassword', data, setData, e)
                }
                value={data.confirmPassword}
                placeholder={translate('signup.placeholder.confirmPassword')}
              />
              <Input
                errorMessage=""
                title={translate('signup.placeholder.job')}
                onInputChange={(e) => onInputChange('job', data, setData, e)}
                value={data.job}
                placeholder={translate('signup.placeholder.job')}
              />
              <Input
                errorMessage=""
                title={translate('signup.placeholder.aboutUs')}
                onInputChange={(e) =>
                  onInputChange('aboutUs', data, setData, e)
                }
                value={data.aboutUs}
                placeholder={translate('signup.placeholder.aboutUs')}
              />
            </Div>
            <Space height="32px" />
            <Button
              background="#18C1E0"
              width="100%"
              borderRadius="10px"
              textTransform="uppercase"
              padding="12px 24px"
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

export default Login;
