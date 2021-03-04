import { Div, Span } from 'components/Styles';
import React, { memo, FC } from 'react';
import RenderIf from 'components/RenderIf/RenderIf';
import { CustomInput, ErrorMessage } from './styles';

export interface InputProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder?: string;
  value: string;
  errorMessage?: string;
  maxLength?: number;
  type?: string;
  renderTitle?: boolean;
}

const Input: FC<InputProps> = ({
  title,
  value,
  onInputChange,
  placeholder,
  errorMessage,
  maxLength,
  type = 'text',
  renderTitle = true,
}) => {
  return (
    <CustomInput>
      <RenderIf isTrue={renderTitle}>
        <Span marginBottom="10px">{title}</Span>
      </RenderIf>
      <input
        type={type}
        name={title}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
        maxLength={maxLength}
      />
      <RenderIf isTrue={Boolean(errorMessage)}>
        <Div position="relative">
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Div>
      </RenderIf>
    </CustomInput>
  );
};

export default memo(Input);
