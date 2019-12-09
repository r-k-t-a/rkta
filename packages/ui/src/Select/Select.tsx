/** @jsx jsx */
import { FormEvent, ReactElement, SFC, useState } from 'react';
import { jsx } from '@emotion/core';
import { Addon } from '../Addon';
import { useProviderContext } from '../Provider';
import { Props } from './Select.type';
import { ChevronDownIcon } from '../util/ChevronDownIcon';

export const Select: SFC<Props> = ({
  caption,
  prepend,
  value,
  children,
  ...rest
}: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const displayValue = value || currentValue;
  const captionIsActive = !!displayValue;
  const [{ css: elementCss, ...baseProps }, Wrapper] = applyStyles(
    { active: isActive, ...rest, element: 'label' },
    'Select',
    'ListItem',
    'Paper',
  );
  const [{ css: baseCss, ...selectProps }, Base] = applyStyles(
    { active: captionIsActive, main: true, normal: true, ...baseProps },
    'InputBase',
    'Addon',
  );
  function handleClose(event: FormEvent<HTMLSelectElement>): void {
    const { value: selectValue } = event.target as HTMLSelectElement;
    setCurrentValue(selectValue);
    if (isActive) setIsActive(false);
  }
  function handleOpen(): void {
    if (!isActive) setIsActive(true);
  }
  return (
    <Wrapper css={elementCss} onBlur={handleClose} onClick={handleOpen} onInput={handleClose}>
      {prepend}
      <Base css={baseCss}>
        {caption && <span className="caption">{caption}</span>}
        {displayValue && <span className="value">{displayValue}</span>}
      </Base>
      <Addon>
        <ChevronDownIcon className="chevron" />
      </Addon>
      <select {...selectProps} value={displayValue}>
        {children}
      </select>
    </Wrapper>
  );
};
