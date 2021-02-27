import { nanoid } from 'nanoid';
import React, { useState, useRef, memo, FC, useEffect } from 'react';
import { useClickAway } from 'react-use';
import { ArrowDown } from 'components/Icons';
import { Div, P } from 'components/Styles';
import { Color } from 'lib/themes/interface';
import {
  DropDown,
  DropDownInput,
  Options,
  Option,
  Icon,
} from './styles/Select';

export interface OptionProps {
  elementLabel?: React.ReactNode;
  label: string;
  value: string;
}

export interface SelectProps {
  onSelectChange: (selected: OptionProps) => void;
  options?: OptionProps[];
  title?: string;
  titleSize?: string;
  titleWeight?: string;
  color?: string;
  placeholder?: string;
  defaultOption?: OptionProps;
}

const Select: FC<SelectProps> = ({
  options,
  title,
  titleSize,
  titleWeight,
  color,
  onSelectChange,
  defaultOption,
  placeholder,
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<OptionProps>(
    defaultOption ?? options[0]
  );
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickAway(ref, () => {
    setShow(false);
  });

  useEffect(() => {
    inputRef.current?.blur();
  }, []);

  return (
    <DropDown ref={ref} show={show}>
      {title && (
        <P
          color={Color.white}
          fontSize={titleSize}
          fontWeight={titleWeight}
          marginBottom="4px"
          lineHeight="28px"
        >
          {title}
        </P>
      )}
      <DropDownInput
        onClick={() => setShow(!show)}
        color={color || Color.licorice}
        show={show}
      >
        <Icon show={show}>
          <ArrowDown fill={Color.licorice} />
        </Icon>
        <Div className="input">
          <P>
            {!selected.label
              ? placeholder
              : selected.elementLabel || selected.label}
          </P>
        </Div>
      </DropDownInput>
      {show && (
        <Options>
          {options.map(({ label, value, elementLabel }) => (
            <Option
              key={nanoid()}
              selected={label === selected.label}
              onClick={() => {
                setSelected({ value, label, elementLabel });
                onSelectChange({ value, label, elementLabel });
                setShow(false);
              }}
            >
              <P>{elementLabel || label}</P>
            </Option>
          ))}
        </Options>
      )}
    </DropDown>
  );
};

Select.defaultProps = {
  titleSize: '18px',
  titleWeight: 'normal',
};

export default memo(Select);
