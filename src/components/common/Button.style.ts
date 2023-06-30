import styled from 'styled-components';
import { IButton } from './Button';

export const Button = styled.button<IButton>`
  padding: 14px 18px;
  cursor: pointer;
  border-style: none;
  background-color: #444;
  width: ${(props: IButton) => (props.size === 'medium' ? '100px' : '170px')};
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
