import styled from 'styled-components';
import { isNumber } from 'lodash';
/* eslint-disable */
const MonthPickerNavItem = styled.div`
  flex: ${(props) => props.grow || '1'} 0 ${(props) => props.basis || 'auto'};
  ${(props) => isNumber(props.order) ? 'order: ' + props.order + ';' : null}
  font-weight: bold;
  text-align: center;
  cursor: ${(props) => (props.button) ? 'pointer' : null};
  padding: 5px 5px 5px 5px;
`;
/* eslint-enable */
export default MonthPickerNavItem;
