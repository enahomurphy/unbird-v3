import { Div, Span } from 'components/Styles';
import React, { memo, FC } from 'react';
import RenderIf from 'components/RenderIf/RenderIf';
import { TextareaWrapper, ErrorMessage } from './styles';

export interface TextareaProps {
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  placeholder?: string;
  value: string;
  errorMessage?: string;
  maxLength?: number;
}

const Textarea: FC<TextareaProps> = ({
  title,
  value,
  onInputChange,
  placeholder,
  errorMessage,
  maxLength,
}) => {
  return (
    <TextareaWrapper>
      <Span
        fontWeight="700"
        lineHeight="28px"
        fontSize="16px"
        marginBottom="10px"
      >
        {title}
      </Span>
      <textarea
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
    </TextareaWrapper>
  );
};

export default memo(Textarea);
