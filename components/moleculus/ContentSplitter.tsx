import { HTMLAttributes } from 'react';

export default function ContentSplitter({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return <div {...rest}>{children}</div>;
}
