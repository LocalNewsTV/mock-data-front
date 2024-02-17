import styled from '@emotion/styled';
import { palette } from '../../constants';

export const StyledDiv = styled.div`
  display: flex;
  border: 1pt solid black;
  flex-direction: column;
  width: 325pt;
  border: 1pt solid ${palette.eigengrau};
  overflow-y: auto;
  box-sizing: content-box;
  height: 400pt;
  overflow-x: hidden;
`
