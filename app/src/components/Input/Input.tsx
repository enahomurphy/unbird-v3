import { Div, Span } from 'components/Styles';
import React, { memo, FC, useEffect, useState } from 'react';
import RenderIf from 'components/RenderIf/RenderIf';
import { CustomInput, InputErrorMessage, SuccessMessage } from './styles';
import { CircularLoader } from 'components/Loader';
import { Color } from 'lib/themes/interface';

export interface InputProps {
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name?: string;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  maxLength?: number;
  type?: string;
  renderTitle?: boolean;
  register?: any;
  widthAttr?: string;
  heightAttr?: string;
  borderRadius?: string;
  textAlign?: string;
  renderLoader?: boolean;
  inputSide?: any;
  successMessage?: string;
}

const Input: FC<InputProps> = ({
  title,
  name,
  value,
  onInputChange,
  placeholder,
  errorMessage,
  maxLength,
  register,
  type = 'text',
  renderTitle = true,
  widthAttr,
  heightAttr,
  borderRadius,
  textAlign,
  renderLoader = false,
  inputSide,
  successMessage,
}) => {
  const [successMsg, setSuccessMsg] = useState(successMessage);
  useEffect(() => {
    setSuccessMsg(successMessage);

    const timer = setTimeout(() => {
      setSuccessMsg('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <CustomInput
      widthAttr={widthAttr}
      heightAttr={heightAttr}
      borderRadius={inputSide ? '12px 0 0 12px' : borderRadius}
      textAlign={textAlign}
      errorMessage={errorMessage}
    >
      <RenderIf isTrue={renderTitle}>
        <Span
          fontSize="12px"
          lineHeight="20px"
          textAlign="initial"
          marginBottom="8px"
          color={Color.greyishNavy}
        >
          {title}
        </Span>
      </RenderIf>
      <Div display="flex" alignItems="center">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onInputChange}
          maxLength={maxLength}
          ref={register}
        />
        {inputSide}
        <RenderIf isTrue={renderLoader}>
          <Div marginLeft="20px">
            <CircularLoader color={Color.unbirdBlue} />
          </Div>
        </RenderIf>
      </Div>
      <RenderIf isTrue={Boolean(errorMessage)}>
        <Div position="relative">
          <InputErrorMessage widthAttr={widthAttr}>
            {errorMessage}
          </InputErrorMessage>
        </Div>
      </RenderIf>
      <RenderIf isTrue={Boolean(successMsg)}>
        <Div position="relative">
          <SuccessMessage widthAttr={widthAttr}>{successMsg}</SuccessMessage>
        </Div>
      </RenderIf>
    </CustomInput>
  );
};

export default memo(Input);
