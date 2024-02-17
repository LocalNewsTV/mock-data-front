import styled from '@emotion/styled';
import { palette } from '../../../constants';

const {eigengrau, mainBg} = palette

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: left;
  padding: 0.25em 0.5em;
  box-sizing: content-box;
`;

export const StyledInput = styled.input`
  width: 12em;
  box-sizing: content-box;
  border-bottom: 1pt solid ${eigengrau};
  background-color: ${mainBg};
  height: 2em;
  padding: 0 0.5em;
  margin: 0;
  &:focus {
    outline: none;
  }
`
export const StyledButton = styled.button`
  border: none;
  background: inherit;
  font-weight: bold;
`

export const StyledP = styled.p`
  font-size: 10pt;
  margin-left: 8pt;
  margin-right: auto;
`
