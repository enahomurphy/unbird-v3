import React, { Dispatch, FC, ReactElement, useEffect, useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import * as yup from 'yup';
import { useDebounce } from 'react-use';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import {
  FirstInputComponent,
  SecondInputComponent,
  ThirdInputComponent,
} from './components/ViewInputComponents';
import { DOMAIN_SEARCH_QUERY, USER_BY_ID_QUERY } from './graphql/query';
import { CREATE_WORKSPACE_MUTATION } from './graphql/mutation';
import SetupPreview from './components/SetupPreview';
import { ICheckBox, IFormState, IViewHolder } from './interfaces';
import { Div, Page, Space } from 'components/Styles';
import RenderIf from 'components/RenderIf';
import Checker from './components/Checker';
import CheckerStatus from './components/CheckerStatus';
import ViewSlider from './components/ViewSlider';
import CheckerInfoList from './components/CheckerInfoList';
import { storage } from 'lib/utils/storage';
import 'react-circular-progressbar/dist/styles.css';

const WorkspaceSetup: FC = (): ReactElement => {
  const history = useHistory();
  const [progressState, setProgressState] = useState({
    firstInput: {
      completed: false,
      error: false,
    },
    secondInput: {
      completed: false,
      error: false,
    },
    thirdInput: {
      completed: false,
      error: false,
    },
    progress: 25,
  });

  const progressStateHandler = (key, type) => {
    const { progress } = progressState;
    const handler = () => {
      if (type === 'error' && currentProgress.completed) {
        setProgressState({
          ...progressState,
          [key]: { completed: false, error: true },
          progress: progress - 25,
        });
      } else if (!currentProgress.completed && !type) {
        setProgressState({
          ...progressState,
          [key]: { completed: true, error: false },
          progress: progress + 25,
        });
      }
    };
    const currentProgress = progressState[key];
    handler();
  };

  const [isActiveNextPrevButtons, setIsActiveNextPrevButtons] = useState<
    boolean
  >(false);

  const [formState, setFormState] = useState<IFormState>({
    name: {
      value: '',
      error: '',
      valid: false,
    },
    url: {
      value: '',
      error: '',
      valid: false,
    },
    emails: {
      value: [],
      error: '',
      valid: false,
    },
    currentEmail: '',
    formCompleted: false,
  });

  const [checkBoxData, setCheckBoxData] = useState<ICheckBox>({
    views: [
      {
        title: 'WORKSPACE NAME',
        description:
          'A unique name that identifies your organisation on unbird.',
        isChecked: false,
        active: false,
      },
      {
        title: 'URL',
        description:
          'A unique url through which members of your organisation will access your workspace',
        isChecked: false,
        active: false,
      },
      {
        title: 'TEAM MEMBERS',
        description:
          'Members of your organisation who have been granted access to this workspace.',
        isChecked: false,
        active: false,
      },
    ],
    activeCheckBox: 0,
  });

  const { loading: userByIdLoading, error: userByIdError, data: userByIdData } = useQuery(
    USER_BY_ID_QUERY,
    {
      variables: { id: storage?.payload?.userId },
    }
  );

  const [
    domainSearch,
    { loading: domainSearchLoading, data: domainSearchData },
  ] = useLazyQuery(DOMAIN_SEARCH_QUERY);

  const domainSearchInfo = {
    loading: domainSearchLoading,
    data: domainSearchData,
  };

  useDebounce(
    () => {
      const { value } = formState.url;
      if (value?.length > 2) {
        domainSearch({ variables: { domain: value } });
      }
    },
    1000,
    [formState.url.value]
  );

  const userName = userByIdData?.userById
    ? userByIdData.userById.firstName
    : 'Anon';

  const [viewHolder, setView] = useState<IViewHolder>({
    views: [
      {
        id: 1,
        header: `Hello, ${userName}! I’m Echo.`,
        body:
          'It is my pleasure to welcome you to unbird, and render the assistance necessary to setup your new workspace. First, let’s give your workspace a name.',
        firstName: userName,
      },
      {
        id: 2,
        header: 'Enter your workspace url',
        body:
          'Great Job! Next, we are going to create a unique url, through which members of your team can access your workspace.',
      },
      {
        id: 3,
        header: 'Finally, let’s invite your team members',
        body:
          'Excellent! You’ve come far, but what’s a workspace without team members? Let’s add some, shall we.',
      },
    ],
    activeView: 0,
  });

  useEffect(() => {
    if (!storage?.payload?.userId || userByIdError) {
      history.push('/');
    }
    const newViews = viewHolder.views.map(({ id, header, body }) => {
      let newHeader = header;
      if (id === 1) {
        newHeader = `Hello, ${userName}! I’m Echo.`;
      }

      return {
        id,
        body,
        header: newHeader,
      };
    });

    setView({ ...viewHolder, views: newViews });
    setFormState({ ...formState, ownerId: userByIdData?.userById?.id });
  }, [userByIdData, userByIdError]);

  useEffect(() => {
    if (
      formState.url.value.length > 2 &&
      domainSearchInfo?.data?.domainSearch?.exists
    ) {
      setFormState({
        ...formState,
        url: { ...formState.url, error: 'An error occurred' },
      });
    } else if (formState.url.value.length > 2) {
      setFormState({ ...formState, url: { ...formState.url, error: '' } });
    }
  }, [domainSearchData]);

  const [
    createWorkspace,
    {
      data: createWorkspaceData,
      loading: createWorkspaceLoading,
      error: createWorkspaceError,
    },
  ] = useMutation(CREATE_WORKSPACE_MUTATION);

  return (
    <>
      <RenderIf isTrue={!formState.formCompleted}>
        <Page style={{ display: 'flex', width: '1440px', marginTop: 51 }}>
          <>
            <aside
              style={{
                width: '28%',
                minHeight: '100%',
                padding: 18,
              }}
            >
              <div style={{ width: 110, height: 110 }}>
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    pathColor: '#18C1E0',
                    trailColor: '#CCF3FA',
                    textColor: '#2F353D',
                  })}
                  value={progressState.progress}
                >
                  <strong>{progressState.progress}%</strong> Progress
                </CircularProgressbarWithChildren>
              </div>

              <Space height="55px" />
              <Div className="aside-checkbox-container" display="flex">
                <CheckerStatus formState={formState} viewHolder={viewHolder} />
                <CheckerInfoList checkBoxData={checkBoxData} />
              </Div>
            </aside>
            <main style={{ width: 650, marginLeft: 150 }}>
              <Space height="20px" />
              <ViewSlider
                viewHolder={viewHolder}
                setView={setView}
                isActiveNextPrevButtons={isActiveNextPrevButtons}
              >
                <Space height="104px" />
                <RenderIf isTrue={viewHolder.activeView === 0}>
                  <FirstInputComponent
                    viewHolder={viewHolder}
                    formState={formState}
                    setFormState={setFormState}
                    changeCheckerState={changeCheckerState}
                    checkBoxData={checkBoxData}
                    setCheckBoxData={setCheckBoxData}
                    setView={setView}
                    onInputChange={onInputChange}
                    setIsActiveNextPrevButtons={setIsActiveNextPrevButtons}
                    progressStateHandler={progressStateHandler}
                  />
                </RenderIf>
                <RenderIf isTrue={viewHolder.activeView === 1}>
                  <SecondInputComponent
                    viewHolder={viewHolder}
                    formState={formState}
                    setFormState={setFormState}
                    changeCheckerState={changeCheckerState}
                    checkBoxData={checkBoxData}
                    setCheckBoxData={setCheckBoxData}
                    setView={setView}
                    progressStateHandler={progressStateHandler}
                    domainSearchInfo={domainSearchInfo}
                  />
                </RenderIf>
                <RenderIf isTrue={viewHolder.activeView === 2}>
                  <ThirdInputComponent
                    viewHolder={viewHolder}
                    formState={formState}
                    setFormState={setFormState}
                    changeCheckerState={changeCheckerState}
                    checkBoxData={checkBoxData}
                    setCheckBoxData={setCheckBoxData}
                    setView={setView}
                    progressStateHandler={progressStateHandler}
                  />
                </RenderIf>
              </ViewSlider>
            </main>
          </>
        </Page>
      </RenderIf>
      <Page style={{ display: 'flex', marginTop: 51 }}>
        <RenderIf isTrue={formState.formCompleted}>
          <SetupPreview
            {...formState}
            createWorkspace={createWorkspace}
            data={createWorkspaceData}
            loading={createWorkspaceLoading}
            error={createWorkspaceError}
          />
        </RenderIf>
      </Page>
    </>
  );
};

const changeCheckerState = (
  setView: Dispatch<IViewHolder>,
  viewHolder: IViewHolder,
  checkBoxData: ICheckBox,
  setCheckBoxData: Dispatch<ICheckBox>,
  index: number
) => {
  if (index < viewHolder.views.length - 1) {
    setView({ ...viewHolder, activeView: index + 1 });
  }
  const [currentData] = checkBoxData.views.slice(index, index + 1);
  currentData.isChecked = true;
  setCheckBoxData({
    views: [
      ...checkBoxData.views.slice(0, viewHolder.activeView),
      currentData,
      ...checkBoxData.views.slice(viewHolder.activeView + 1),
    ],
    activeCheckBox: checkBoxData.activeCheckBox + 1,
  });
};

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

export default WorkspaceSetup;
