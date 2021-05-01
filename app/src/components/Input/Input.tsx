import React, { memo, FC, useEffect, useState, CSSProperties } from 'react';

import { Div, Span, Space } from 'components/Styles';
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
  sideView?: boolean;
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
  sideView
}) => {
  const [successMsg, setSuccessMsg] = useState(successMessage);
  useEffect(() => {
    setSuccessMsg(successMessage);

    const timer = setTimeout(() => {
      setSuccessMsg('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  } as CSSProperties;

  return (
    <CustomInput
      widthAttr={widthAttr}
      heightAttr={heightAttr}
      borderRadius={inputSide ? '12px 0 0 12px' : borderRadius}
      textAlign={textAlign}
      errorMessage={errorMessage}
      style={ sideView && style}
    >
      <RenderIf isTrue={renderTitle}>
        <Span
          fontSize="14px"
          lineHeight="20px"
          textAlign={sideView ? 'right' : 'initial'}
          marginBottom={!sideView && '8px'}
          marginTop={sideView && '15px'}
          color={Color.greyishNavy}
          minWidth={sideView ? '170px' : ''}
          marginRight='24px'
        >
          {title}
        </Span>
      </RenderIf>
      <Div>
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
        </Div>
    </CustomInput>
  );
};

export default memo(Input);
