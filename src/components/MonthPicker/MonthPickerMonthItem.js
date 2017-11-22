import styled from 'styled-components';
import { isNumber } from 'lodash';
/* eslint-disable */
const MonthPickerMonthItem = styled.div`
  flex: ${(props) => props.grow || '1'} 0 ${(props) => props.basis || 'auto'};
  ${(props) => isNumber(props.order) ? 'order: ' + props.order + ';' : null} 
  background-color: ${(props) => props.active ? '#eceff1' : 'none'};
  text-align: center;
  padding: 5px 5px 5px 5px;
  border: 1px solid #cbd3d8;
  margin: 3px;
  &:hover {
    background-color: #eceff1;
    cursor: pointer;
  }
`;
/* eslint-enable */

export default MonthPickerMonthItem;
