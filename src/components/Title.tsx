import { ReactNode } from 'react';

interface HeaderProps {
  type: 'header';
  children?: ReactNode;
}

interface PostProps {
  type?: 'post';
  href: string;
  children?: ReactNode;
}

type Props = HeaderProps | PostProps;

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
