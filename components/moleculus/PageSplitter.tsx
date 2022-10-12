import { HTMLAttributes } from 'react';
import { Header } from 'components';
import type { HeaderI } from './Header';

type PageSplitterI = HeaderI & HTMLAttributes<HTMLDivElement>;

export default function PageSplitter({ pContent, h2Content }: PageSplitterI): JSX.Element {
    return (
        <div className="pageSplitter">
            <Header h2Content={h2Content} h2Style="title" pStyle="description" pContent={pContent} />
        </div>
    );
}
