import React, { Dispatch } from 'react';
import * as yup from 'yup';

import { ICheckBox, IViewHolder, IFormState } from '../interfaces';
import { Div, Space, P } from 'components/Styles';
import { Button } from 'components/Buttons';
import Input from 'components/Input';
import theme from 'lib/themes/index';
import { Color } from 'lib/themes/interface';
import { BotHeader, Wave } from 'components/Icons';
import InputFormContainer from './InputFormContainer';
import EmailList from './EmailList';
import 'react-circular-progressbar/dist/styles.css';
import RenderIf from 'components/RenderIf';

interface IInputComponent {
  viewHolder: IViewHolder;
  formState: IFormState;
  setFormState: Dispatch<IFormState>;
  changeCheckerState: Function;
  checkBoxData: ICheckBox;
  setCheckBoxData: Dispatch<ICheckBox>;
  setView: Dispatch<IViewHolder>;
  onInputChange?: Function;
  setIsActiveNextPrevButtons?: Dispatch<boolean>;
  progressStateHandler?: Function;
  domainSearchInfo?: any;
}

const onInputChange = async (setFormState, formState, e) => {
  e.preventDefault();
  const schema = yup.string().min(3).required();
  const value = e.target.value;
  const name = {
    value,
    error: (await schema.isValid(value))
      ? ''
      : 'Sorry! The name you selected is not available',
  };
  setFormState({ ...formState, name });
};

const firstInputOnClick = async ({
  setFormState,
  formState,
  setView,
  viewHolder,
  checkBoxData,
  setCheckBoxData,
  setIsActiveNextPrevButtons,
  progressStateHandler,
  changeCheckerState,
}: IInputComponent) => {
  const schema = yup.string().min(3).required();
  const value = formState.name.value;
  const name = {
    value,
    error: (await schema.isValid(value))
      ? ''
      : 'Sorry! The name you selected is not available',
  };
  if (name.error) {
    setFormState({ ...formState, name });
    progressStateHandler('firstInput', 'error');
    return;
  }
  progressStateHandler('firstInput');
  setFormState({ ...formState, name: { ...name, valid: true } });
  setIsActiveNextPrevButtons(true);
  changeCheckerState(setView, viewHolder, checkBoxData, setCheckBoxData, 0);
};

export const NameInputComponent = ({
  viewHolder,
  formState,
  setFormState,
  changeCheckerState,
  checkBoxData,
  setCheckBoxData,
  setView,
  onInputChange,
  setIsActiveNextPrevButtons,
  progressStateHandler,
}: IInputComponent) => {
  const header = (
    <Div display="flex">
      <Div marginTop="50px">
        <Wave />
      </Div>
      <Div marginLeft="-15px">
        <BotHeader />
      </Div>
    </Div>
  );
  const input = (
    <>
      <Input
        errorMessage={formState.name.error}
        title="Workspace Name"
        name="name"
        value={formState.name.value}
        onInputChange={async (e) => {
          onInputChange(setFormState, formState, e);
        }}
        placeholder="Usually your company name"
        widthAttr="465px"
        heightAttr="48px"
        borderRadius="12px"
        successMessage={
          formState.name.value.length > 2 && !formState.name.error
            ? 'Awesome!'
            : ''
        }
      />
      <Space height="24px" />
      <Button
        background="#18C1E0"
        width="236px"
        height="56px"
        borderRadius="12px"
        textTransform="uppercase"
        padding="12px 24px"
        color={theme.colors.white}
        onClick={async () => {
          await firstInputOnClick({
            setFormState,
            formState,
            setView,
            viewHolder,
            checkBoxData,
            setCheckBoxData,
            setIsActiveNextPrevButtons,
            progressStateHandler,
            changeCheckerState,
          });
        }}
      >
        Let's go
      </Button>
    </>
  );
  return (
    <InputFormContainer viewHolder={viewHolder} header={header} input={input} />
  );
};

export const UrlInputComponent = ({
  viewHolder,
  formState,
  setFormState,
  changeCheckerState,
  checkBoxData,
  setCheckBoxData,
  setView,
  progressStateHandler,
  domainSearchInfo,
}: IInputComponent) => {
  const urlError =
    formState.url.error || domainSearchInfo?.data?.domainSearch?.exists;
  const notSuccessFull =
    domainSearchInfo?.data && domainSearchInfo.data.domainSearch?.exists;
  const InputSideBorderColor = urlError ? theme.colors.pinkTint200 : '#CED2D6';

  const input = (
    <>
      <div style={{ display: 'flex' }}>
        <Input
          title="Workspace Url"
          name="url"
          value={formState.url.value}
          errorMessage={
            urlError && 'That url is not available. Try using a different one.'
          }
          placeholder="Company domain Url"
          onInputChange={async (e) => {
            e.preventDefault();
            const schema = yup.string().min(3).required();
            const { value } = e.target;
            const isValidUrl = await schema.isValid(value);
            const error = isValidUrl
              ? ''
              : 'That url is not available. Try using a different one.';
            const url = {
              value,
              error,
            };
            setFormState({ ...formState, url });
          }}
          widthAttr="300px"
          heightAttr="48px"
          textAlign="right"
          renderLoader={domainSearchInfo.loading}
          successMessage={
            domainSearchInfo?.data &&
            !notSuccessFull &&
            !domainSearchInfo.loading &&
            formState.url.value.length > 2
              ? 'Great! Your URL is available.'
              : ''
          }
          inputSide={
            <div
              style={{
                width: 165,
                height: 48,
                padding: '14px 29px',
                background: urlError ? theme.colors.inputError : '#F0F1F3',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                // Add multiple borderColor because of Css conflicting issues
                borderTopColor: InputSideBorderColor,
                borderRightColor: InputSideBorderColor,
                borderBottomColor: InputSideBorderColor,
                borderLeft: 'none',
                borderRadius: '0 12px 12px 0',
              }}
            >
              .unbird.com
            </div>
          }
        />
      </div>
      <Space height="24px" />
      <Button
        disabled={notSuccessFull}
        background="#18C1E0"
        width="236px"
        height="56px"
        borderRadius="12px"
        textTransform="uppercase"
        padding="12px 24px"
        color={theme.colors.white}
        onClick={async () => {
          const schema = yup.string().min(3).required();
          const value = formState.url.value;
          const isValidUrl = await schema.isValid(value);
          const url = {
            value,
            error:
              isValidUrl && !urlError
                ? ''
                : 'That url is not available. Try using a different one.',
          };
          if (url.error || urlError) {
            setFormState({ ...formState, url });
            progressStateHandler('secondInput', 'error');
            return;
          }
          progressStateHandler('secondInput');
          setFormState({ ...formState, url: { ...url, valid: true } });
          changeCheckerState(
            setView,
            viewHolder,
            checkBoxData,
            setCheckBoxData,
            1
          );
        }}
      >
        Looks good
      </Button>
    </>
  );
  return <InputFormContainer viewHolder={viewHolder} input={input} />;
};

export const EmailInputComponent = ({
  viewHolder,
  formState,
  setFormState,
  changeCheckerState,
  checkBoxData,
  setCheckBoxData,
  setView,
  progressStateHandler,
}: IInputComponent) => {
  const middleData = (
    <>
      <P>
        Invite{' '}
        {formState.emails.value.length ? formState.emails.value.length : ''}{' '}
        Members
      </P>
      <Space />

      <Div display="flex" width="590px" flexWrap="wrap">
        <EmailList
          showCancel={true}
          emails={formState.emails.value}
          onClickHandler={(e, email) => {
            e.preventDefault();
            const emails = formState.emails.value.filter(
              (currentEmail) => currentEmail !== email
            );
            setFormState({
              ...formState,
              emails: {
                ...formState.emails,
                value: emails,
              },
            });
          }}
        />
      </Div>
    </>
  );

  const input = (
    <>
      <div style={{ display: 'flex' }}>
        <Input
          errorMessage={formState.emails.error}
          title="Member Email"
          name="email"
          placeholder="member@address.com"
          widthAttr="417px"
          heightAttr="48px"
          borderRadius="12px 0 0 12px"
          value={formState.currentEmail}
          onInputChange={(e) => {
            e.preventDefault();
            const currentEmail = e.target.value;
            setFormState({
              ...formState,
              currentEmail,
            });
          }}
        />
        <Button
          width="48px"
          height="48px"
          marginTop="28px"
          background="#F0F1F3"
          border={`1.5px solid ${
            formState.emails.error ? theme.colors.inputError : '#CED2D6'
          }`}
          borderRadius="0 12px 12px 0"
          icon="Add"
          iconColor={Color.ashButtonIconColor}
          iconSize={16}
          withIcon={true}
          onClick={async (e) => {
            e.preventDefault();
            const schema = yup.string().email().required();
            const email = formState.currentEmail;
            const error = (await schema.isValid(email))
              ? ''
              : 'Email not properly formatted. ';

            if (error) {
              setFormState({
                ...formState,
                emails: {
                  value: formState.emails.value,
                  error,
                },
              });
              return;
            }

            setFormState({
              ...formState,
              emails: {
                value: [...formState.emails.value, email],
                error,
              },
              currentEmail: '',
            });
          }}
        />
      </div>
      <Space height="24px" />
      <div
        style={{
          display: 'flex',
          width: 465,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => {
            progressStateHandler('thirdInput');
            setFormState({ ...formState, formCompleted: true });
            changeCheckerState(
              setView,
              viewHolder,
              checkBoxData,
              setCheckBoxData,
              2
            );
          }}
          background={Color.white}
        >
          Skip and Invite later
        </Button>
        <Button
          background="#18C1E0"
          width="236px"
          height="56px"
          borderRadius="12px"
          fontSize="16px"
          color={Color.white}
          onClick={() => {
            progressStateHandler('thirdInput');
            setFormState({ ...formState, formCompleted: true });
            changeCheckerState(
              setView,
              viewHolder,
              checkBoxData,
              setCheckBoxData,
              2
            );
          }}
        >
          Send invites and continue
        </Button>
      </div>
    </>
  );

  return (
    <InputFormContainer
      viewHolder={viewHolder}
      middleData={middleData}
      input={input}
    />
  );
};
