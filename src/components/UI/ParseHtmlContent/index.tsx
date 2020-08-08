import React, { useMemo } from 'react';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';

type ParseHtmlContentProps = {
  content?: string;
  trim?: boolean;
  componentLibrary?: {
    [key: string]: (
      children: React.ReactNode,
      attribs?: Record<string, unknown>
    ) => React.ReactNode;
  };
};

export const ParseHtmlContent: React.FC<ParseHtmlContentProps> = ({
  content,
  trim,
  componentLibrary,
}) => {
  const options: HTMLReactParserOptions = useMemo(
    () => ({
      trim,
      replace: componentLibrary
        ? ({ name, type, attribs, children }) => {
            if (
              name &&
              children &&
              type === 'tag' &&
              Object.keys(componentLibrary).includes(name)
            ) {
              return componentLibrary[name](
                domToReact(children, options),
                attribs
              );
            }

            return undefined;
          }
        : undefined,
    }),
    [trim, componentLibrary]
  );

  const parsedContent = useMemo(
    () => (content ? parse(content, options) : null),
    [content, options]
  );
  return <>{parsedContent}</>;
};
