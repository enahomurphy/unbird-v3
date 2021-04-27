export type IFieldState<T> = {
  value: T;
  error: string;
  valid?: boolean;
};

export interface IFormState {
  name: IFieldState<string>;
  url: IFieldState<string>;
  emails: IFieldState<string[]>;
  currentEmail?: string;
  formCompleted?: boolean;
  ownerId?: number;
}

export interface ICheckBox {
  views: {
    title: string;
    description: string;
    active: boolean;
    isChecked: boolean;
  }[];
  activeCheckBox: number;
}

export interface IViewHolder {
  views: {
    id: number;
    header: string;
    body: string;
    firstName?: string;
  }[];
  activeView: number;
}
