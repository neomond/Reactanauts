import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSearchIconActive = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <Path
      stroke="#E0783E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 22.5-5.075-5.075m2.742-6.592a9.333 9.333 0 1 1-18.667 0 9.333 9.333 0 0 1 18.667 0Z"
    />
  </Svg>
);
export default SvgSearchIconActive;
