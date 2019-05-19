import React from "react";

const BeatSaberIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 21C0 9.40202 9.40202 0 21 0H79C90.598 0 100 9.40202 100 21V79C100 90.598 90.598 100 79 100H21C9.40202 100 0 90.598 0 79V21Z"
      fill="#A10312"
    />
    <g filter="url(#filter0_d)">
      <path d="M88 86H13L49.7742 62L88 86Z" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="5"
        y="54"
        width="91"
        height="40"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BeatSaberIcon;
