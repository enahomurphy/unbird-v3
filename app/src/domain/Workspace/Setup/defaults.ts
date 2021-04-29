import { ICheckBox, IFormState } from './interfaces'

interface IProgress {
  firstInput: {
    completed: boolean,
    error: boolean,
  },
  secondInput: {
    completed: boolean,
    error: boolean,
  },
  thirdInput: {
    completed: boolean,
    error: boolean,
  },
  progress: number,
};

export const PROGRESS_DEFAULT: IProgress = {
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
};

export const FORM_STATE: IFormState = {
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
};

export const CHECKBOX_DATA: ICheckBox = {
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
};

export const VIEW_HOLDER = {
  views: [
    {
      id: 1,
      header: `Hello, ANON! I’m Echo.`,
      body:
        'It is my pleasure to welcome you to unbird, and render the assistance necessary to setup your new workspace. First, let’s give your workspace a name.',
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
};