import type { HTMLAttributes } from 'react';

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div className="grid grid-mobile grid-cols-tablet md:grid-desktop">
            <div {...rest}>{children}</div>
        </div>
    );
}
