/** @jsx jsx */
import { FormEvent, useState, forwardRef } from 'react';
import { jsx } from '@emotion/core';
import { Addon } from '../Addon';
import { Svg } from '../Svg';
import { useProviderContext } from '../Provider';
import { NativeSelectProps } from './NativeSelect.type';

/**
 * ```js
 * import { NativeSelect, Addon } from '@rkta/ui';
 * import { Bug } from '@rkta/entypo'
 * 
 * <NativeSelect
    caption="Normal"
    prepend={
      <Addon>
        <Bug />
      </Addon>
    }
    rize={1}
  >
    <option>option 1</option>
    <option>option 2</option>
    <option>option 3</option>
    <option>option 4</option>
    <option>option 5</option>
  </NativeSelect>
  ```
 */
export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ caption, prepend, value, children, ...rest }: NativeSelectProps, ref): JSX.Element => {
    const { applyStyles } = useProviderContext();
    const [isActive, setIsActive] = useState(false);
    const [currentValue, setCurrentValue] = useState('');
    const displayValue = value || currentValue;
    const captionIsActive = !!displayValue;
    const [{ css: elementCss, ...baseProps }, Wrapper] = applyStyles(
      { active: isActive, ...rest, element: 'label' },
      'NativeSelect',
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
          <Svg block className="chevron" size={20}>
            <path d="M13.418,7.859c0.271-0.268,0.709-0.268,0.978,0c0.27,0.268,0.272,0.701,0,0.969l-3.908,3.83c-0.27,0.268-0.707,0.268-0.979,0l-3.908-3.83c-0.27-0.267-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.978,0L10,11L13.418,7.859z" />
          </Svg>
        </Addon>
        <select {...selectProps} ref={ref} value={displayValue}>
          {children}
        </select>
      </Wrapper>
    );
  },
);
