import React from 'react';
import * as S from './Button.style';

export interface IButton extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size: 'small' | 'medium' | 'large';
}

// export interface IInput extends React.HTMLProps<HTMLInputElement>

/**
 *
 *
* import Button from 'components/common/Button';
*
* // 사용예시
* // 함수는 따로 만드셔서 해당 onClick에 넣어 주시면 됩니다. :)
* 
*  <Button size='small' name="buttonTest" data-test='111' onClick={(e) => {
        alert('hi')}}/>
*
*
@returns JSX.Element
*/

function Button({ size, name, ...props }: IButton) {
  return (
    <S.Button size={size} {...props}>
      {name}
    </S.Button>
  );
}

export default Button;
