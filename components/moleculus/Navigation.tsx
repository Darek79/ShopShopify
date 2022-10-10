import { LogoSVG, SearchIconSVG, UserSVG, ShoppingBagSVG, HamburgerSVG } from 'components';
// interface NavigationI {}

export default function Navigation(): JSX.Element {
    return (
        <nav className="h-spacing50 w-full flex justify-between items-center bg-white defaultPageContentOnGrid">
            <div className="basis-full">
                <LogoSVG href="/" />
            </div>
            <div className="flex basis-full gap-2 items-center justify-end">
                <SearchIconSVG className="w-8 h-8" />
                <UserSVG className="w-8 h-8" />
                <ShoppingBagSVG className="w-8 h-8" />
                <HamburgerSVG className="w-8 h-8" />
            </div>
        </nav>
    );
}
