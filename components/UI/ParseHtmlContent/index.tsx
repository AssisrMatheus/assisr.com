import React, { useMemo } from 'react';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';

type ParseHtmlContentProps = {
  content?: string;
  trim?: boolean;
  componentLibrary?: {
    [key: string]: (
      attribs: Record<string, unknown>,
      children: React.ReactNode
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
              type === 'tag' &&
              Object.keys(componentLibrary).includes(name)
            ) {
              return componentLibrary[name](
                attribs,
                domToReact(children, options)
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
