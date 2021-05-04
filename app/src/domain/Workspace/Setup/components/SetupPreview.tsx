import React from 'react';
import { Link, useHistory, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

import EmailList from './EmailList';
import { Div, H1, H3, P, Space } from 'components/Styles/Element';
import { Button } from 'components/Buttons';
import { BotThumbsUp } from 'components/Icons';

import { IFormState } from '../interfaces';

interface ICreateWorkspace {
  createWorkspace: Function;
  data: any;
  loading: boolean;
  error?: any;
}

type IPreview = ICreateWorkspace & IFormState;

const createWorkspaceHandler = async (
  createWorkspace: Function,
  formState: IFormState,
  history: History
) => {
  const { name, url, emails, ownerId } = formState;
  try {
    await createWorkspace({
      variables: {
        domain: url.value,
        name: name.value,
        emails: emails.value,
        ownerId: Number(ownerId),
      },
    });
    history.push('/');
  } catch (e) {
    console.log(e)
  }
};

const SetupPreview = ({
  name,
  url,
  emails,
  ownerId,
  createWorkspace,
  data,
  loading,
  error,
}: IPreview) => {
  const history = useHistory();
  return (
    <Div textAlign="center" margin="0 auto">
      <BotThumbsUp />
      <H1>Setup Complete!</H1>
      <P>Here’s a preview of your setup.</P>
      <Space height="40px" />
      <Div>
        <P>Workspace Name</P>
        <H3>{name.value}</H3>
      </Div>
      <Space height="31px" />
      <Div>
        <P>Workspace URL</P>
        <H3>{url.value}.unbird.com</H3>
      </Div>
      <Space height="31px" />
      <Div>
        <P>Team Members</P>
        <Space height="4px" />
        <EmailList emails={emails.value} />
      </Div>
      <Space height="64px" />
      <Button
        disabled={loading}
        onClick={(e) =>
          createWorkspaceHandler(createWorkspace, {
            name,
            url,
            emails,
            ownerId,
          },
          history)
        }
        margin="0 auto"
        background="#18C1E0"
        width="236px"
        height="56px"
        borderRadius="12px"
        color="white"
      >
        Continue
      </Button>
    </Div>
  );
};

export default SetupPreview;
