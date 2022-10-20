import { SVGAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from 'Mobx/context/storeContext';
// interface ShoppingBagI {}

function ShoppingBagSVG({ ...rest }: SVGAttributes<SVGElement>): JSX.Element {
    const { basketStore } = useStore();
    return (
        <div className="relative">
            <div className="absolute rounded-full bg-pageBlack w-5 h-5 left-4 top-1 text-pageWhite text-center">
                <p className="translate-y-[1px] text-sm">{basketStore.productsArray.length}</p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...rest}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
            </svg>
        </div>
    );
}

export default observer(ShoppingBagSVG);
