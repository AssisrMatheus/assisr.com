import Terser from 'terser';
import mem from 'mem';
import React, { useMemo } from 'react';

// Ref https://github.com/vercel/next.js/discussions/12533#discussioncomment-17987
const minify = mem(Terser.minify);

export const InlineJs: React.FC<{ code: string; id: string }> = ({
  code,
  id,
}) => {
  const minifyOutput = useMemo(() => {
    const min = minify(code);
    if (min.error) {
      throw min.error;
    }
    return min;
  }, [code]);

  return minifyOutput.code ? (
    // eslint-disable-next-line react/no-danger
    <script id={id} dangerouslySetInnerHTML={{ __html: minifyOutput.code }} />
  ) : null;
};
