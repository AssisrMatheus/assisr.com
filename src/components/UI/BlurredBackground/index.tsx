import React from 'react';
import styled from 'styled-components';

const Blur = styled.div`
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
`;

const Color = styled.div`
  background: linear-gradient(135deg, #f1608a 10%, #aa68d2 100%);
`;

const BlurredBackground: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <Color className={className}>
    <Blur className={className}>{children}</Blur>
  </Color>
);

export default BlurredBackground;
