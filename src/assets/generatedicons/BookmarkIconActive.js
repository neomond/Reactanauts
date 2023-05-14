import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBookmarkIconActive = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 19 24"
    {...props}>
    <Path
      stroke="#E0783E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.333 7.1c0-1.96 0-2.94.382-3.689a3.5 3.5 0 0 1 1.53-1.53C3.993 1.5 4.973 1.5 6.934 1.5h5.133c1.96 0 2.94 0 3.689.381a3.5 3.5 0 0 1 1.53 1.53c.38.749.38 1.729.38 3.689v15.4L9.5 17.833 1.333 22.5V7.1Z"
    />
  </Svg>
);
export default SvgBookmarkIconActive;
