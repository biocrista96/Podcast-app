import * as React from "react";
const NotFound = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M8 12h4m0 0L8 8m4 4 8 8M15 8h2a4 4 0 0 1 2.645 7M9 16H7a4 4 0 0 1 0-8h1m0 0L4 4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default NotFound;
