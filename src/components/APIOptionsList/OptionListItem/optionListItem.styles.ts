import styled from '@emotion/styled';
import { palette } from '../../../constants';

const { accent, bridge, eigengrau, secondary } = palette

export const StyledLi = styled.li`
  list-style-type: none;
  text-align: left;
  margin: 0;
  font-size: 10pt;
  background-color: ${secondary};
  border-top: 1pt solid ${accent};
  padding: 0.25em 0.5em;
  &:hover {
    border: 1pt solid ${eigengrau};
    background: ${bridge};
    padding-left: 1em;
  }
`;

export const StyledP = styled.p`
  font-size: 10pt;
`
