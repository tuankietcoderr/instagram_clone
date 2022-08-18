import * as React from "react";
import Svg, { Path, Polyline } from "react-native-svg";

const UserGroup = (props) => (
  <Svg
    aria-label="\u0110ang theo d\xF5i"
    className="_ab6-"
    color="#262626"
    fill="#262626"
    height={16}
    role="img"
    viewBox="0 0 24 24"
    width={16}
    {...props}
  >
    <Path
      d="M19.006 8.252a3.5 3.5 0 11-3.499-3.5 3.5 3.5 0 013.5 3.5z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <Path
      d="M22 19.5v-.447a4.05 4.05 0 00-4.05-4.049h-4.906a4.05 4.05 0 00-4.049 4.049v.447"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <Polyline
      fill="none"
      points="8.003 9.198 4.102 13.099 2.003 11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export default UserGroup;
