import { ReactNode } from 'react';

interface BaseProps {
  type: 'header' | 'post';
  children?: ReactNode;
}

type Props =
  | (BaseProps & { type: 'header' })
  | (BaseProps & { type: 'post'; href: string });

function Title(props: Props) {
  const isHeader = props.type === 'header';

  return (
    <>
      {isHeader ? (
        <h1>{props.children}</h1>
      ) : (
        <a href={props.href}>
          <h1>{props.children}</h1>
        </a>
      )}
    </>
  );
}

export default Title;
