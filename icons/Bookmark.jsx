import * as React from "react";
import Svg, { Polygon } from "react-native-svg";

const Bookmark = (props) => (
  <Svg
    aria-label="L\u01B0u"
    className="_ab6-"
    color="#262626"
    fill="#262626"
    height={24}
    role="img"
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <Polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export default Bookmark;
