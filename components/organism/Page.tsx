import { HTMLAttributes } from 'react';
import { Navigation, Sidebar, ScrolledNavigation } from 'components';

export default function Page({ children }: HTMLAttributes<HTMLElement>): JSX.Element {
    return (
        <>
            <Sidebar />
            <ScrolledNavigation />
            <Navigation />
            <main className="max-w-screen-2xl w-full defaultPageContentOnGrid overflow-hidden">{children}</main>
        </>
    );
}
