import { HTMLAttributes } from 'react';
import { Navigation, Sidebar, ScrolledNavigation, Footer } from 'components';

export default function Page({ children }: HTMLAttributes<HTMLElement>): JSX.Element {
    return (
        <>
            <Sidebar />
            <ScrolledNavigation />
            <Navigation />
            <main className="max-w-screen-2xl w-full defaultPageContentOnGrid overflow-hidden">{children}</main>
            <footer className="max-w-screen-2xl w-full defaultPageContentOnGrid pt-10">
                <Footer />
            </footer>
        </>
    );
}
