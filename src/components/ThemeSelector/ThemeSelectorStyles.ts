import styled from "styled-components";

const ThemeSelector = styled.a`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1px 0 auto;
`;

const Controller = styled.a`
  /* This is https://nostalgic-css.github.io/NES.css/ controller icon */
  position: relative;
  display: inline-block;
  image-rendering: pixelated;
  width: 60px;
  height: 40px;

  &:hover {
    transform: scale(1.3);
  }

  &::before {
    position: absolute;
    image-rendering: pixelated;
    top: -4px;
    left: -4px;
    content: "";
    background: 0 0;
    width: 4px;
    height: 4px;
    color: #d7d7d7;
    box-shadow: 28px 4px #333, 28px 8px #333, 32px 12px #333, 12px 16px #333,
      16px 16px #333, 20px 16px #333, 24px 16px #333, 28px 16px #333,
      32px 16px #333, 36px 16px #333, 40px 16px #333, 44px 16px #333,
      48px 16px #333, 52px 16px #333, 8px 20px #333, 12px 20px, 16px 20px,
      20px 20px, 24px 20px, 28px 20px, 32px 20px, 36px 20px, 40px 20px,
      44px 20px, 48px 20px, 52px 20px, 56px 20px #333, 4px 24px #333, 8px 24px,
      12px 24px, 16px 24px #333, 20px 24px, 24px 24px, 28px 24px, 32px 24px,
      36px 24px, 40px 24px, 44px 24px, 48px 24px #999cf7, 52px 24px, 56px 24px,
      60px 24px #333, 4px 28px #333, 8px 28px, 12px 28px #333, 16px 28px #333,
      20px 28px #333, 24px 28px, 28px 28px, 32px 28px, 36px 28px, 40px 28px,
      44px 28px #7dbb78, 48px 28px, 52px 28px #f40500, 56px 28px, 60px 28px #333,
      4px 32px #333, 8px 32px, 12px 32px, 16px 32px #333, 20px 32px, 24px 32px,
      28px 32px #333, 32px 32px, 36px 32px #333, 40px 32px, 44px 32px,
      48px 32px #f6f504, 52px 32px, 56px 32px, 60px 32px #333, 8px 36px #333,
      12px 36px, 16px 36px, 20px 36px, 24px 36px, 28px 36px, 32px 36px,
      36px 36px, 40px 36px, 44px 36px, 48px 36px, 52px 36px, 56px 36px #333,
      12px 40px #333, 16px 40px #333, 20px 40px #333, 24px 40px #333,
      28px 40px #333, 32px 40px #333, 36px 40px #333, 40px 40px #333,
      44px 40px #333, 48px 40px #333, 52px 40px #333;
  }
`;

export { Controller };
export default ThemeSelector;
