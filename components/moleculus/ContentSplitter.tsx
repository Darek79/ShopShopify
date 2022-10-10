import { HTMLAttributes } from 'react';

export default function ContentSplitter({ children }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div className="defaultPageContentOnGrid grid grid-rows-3 md:grid-row-1 md:grid-cols-3 gap-4 py-4">
            {children}
        </div>
    );
}
