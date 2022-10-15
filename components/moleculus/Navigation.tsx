import { LogoSVG, SearchIconSVG, UserSVG, ShoppingBagSVG, HamburgerSVG, NavigationCategory } from 'components';
import { memo } from 'react';
// interface NavigationI {}

const categoryPages = ['category', 'category', 'category', 'category', 'category'];

export default memo(function Navigation(): JSX.Element {
    return (
        <>
            <nav className="h-spacing50 w-full flex justify-between items-center bg-pageWhite defaultPageContentOnGrid">
                <div className="basis-full">
                    <LogoSVG href="/" />
                </div>
                <div className="flex basis-full gap-2 items-center justify-end">
                    <SearchIconSVG className="w-8 h-8" />
                    <UserSVG className="w-8 h-8" />
                    <ShoppingBagSVG className="w-8 h-8" />
                    <HamburgerSVG className="w-8 h-8 block md:hidden" />
                </div>
            </nav>
            <NavigationCategory navigationArr={categoryPages} />
        </>
    );
});
