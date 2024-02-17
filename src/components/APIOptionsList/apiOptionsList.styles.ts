import styled from '@emotion/styled';
import { palette } from '../../constants';

const { eigengrau, mainBg } = palette


export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`

export const StyledInput = styled.input`
  width: auto;
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
export const StyledOptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 220pt;
  height: 400pt;
  border: 1pt solid ${eigengrau}
`
