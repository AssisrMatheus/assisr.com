import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/dracula';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import React, { useCallback, useMemo } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styled from 'styled-components';
import copyToClipboard from '../../../utils/copyToClipboard';
import { useAppTheme } from '../../Providers/AppThemeProvider';

export const Pre = styled.pre`
  text-align: left;
  position: relative;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: 'Fira Code', 'Consolas', Courier, monospace;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

export const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const Code: React.FC<{ codeString: string; language: Language }> = ({
  codeString,
  language,
  ...props
}) => {
  const { isDark } = useAppTheme();

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const handleCopy = useCallback(() => {
    copyToClipboard(codeString);
  }, [codeString]);

  // eslint-disable-next-line react/destructuring-assignment
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  // TODO: Hash codeString and use it as key

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleCopy}>Copy</CopyCode>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`${className}-${i}`} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${className}-${key}-${i}`}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
