import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from '../UI/Code';

const components: { [key: string]: React.FC } = {
  h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: props => {
    const { children } = props as any;
    const { props: childProps } = children;

    if (childProps.mdxType === 'code') {
      return (
        <Code
          codeString={childProps.children.trim()}
          language={
            childProps.className &&
            childProps.className.replace('language-', '')
          }
          {...childProps}
        />
      );
    }
    return null;
  }
};

const MDXRendererProvider: React.FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXRendererProvider;
