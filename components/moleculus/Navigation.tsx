import { LogoSVG, SearchIconSVG, UserSVG, ShoppingBagSVG, HamburgerSVG, NavigationCategory } from 'components';
import { memo } from 'react';
// interface NavigationI {}

const categoryPages = ['category', 'category', 'category', 'category', 'category'];

export default memo(function Navigation(): JSX.Element {
    return (
        <>
            <nav className="h-fit w-full bg-pageWhite defaultPageContentOnGrid max-w-screen-2xl py-3 md:py-5 justify-self-center">
                <div className="flex justify-between items-center">
                    <div className="basis-full">
                        <LogoSVG href="/" />
                    </div>
                    <div className="flex basis-full gap-2 items-center justify-end">
                        <SearchIconSVG className="w-6 h-6" />
                        <ShoppingBagSVG className="w-6 h-6" />
                        <UserSVG className="w-6 h-6" />
                        <HamburgerSVG className="w-6 h-6 block md:hidden" />
                    </div>
                </div>
                {/* <NavigationCategory navigationArr={categoryPages} /> */}
            </nav>
        </>
    );
});
