import { Button } from 'components';
import { observer } from 'mobx-react-lite';
import useStore from 'Mobx/context/storeContext';
import { ClosingXSVG } from 'components';
import classnames from 'classnames';
import Link from 'next/link';
import { useEffect } from 'react';

function ItemWasAddedToBasket(): JSX.Element {
    const { basketStore } = useStore();
    const wrapperClasses = classnames({
        'fixed top-0 left-0 transformDefault h-fit grid gap-y-3 [&>_p]:text-pageWhite bg-pageBlack w-full p-5 text-center z-[999999]':
            true,
        'translate-x-0': basketStore.showProductWasAdded,
        'translate-x-full': !basketStore.showProductWasAdded,
    });

    useEffect(() => {
        if (basketStore.showProductWasAdded) {
            basketStore.showProductWasAddedSwitcher();
        }
    }, [basketStore, basketStore.showProductWasAdded]);
    return (
        <div className={wrapperClasses}>
            <div className="flex justify-end" onClick={()=>basketStore.showProductWasAddedClose()}>
                <ClosingXSVG className="stroke-white w-8 h-8 cursor-pointer" />
            </div>

            <p className="text-[4vw] xs:text-[0.9rem] leading-tight">ITEM WAS ADDED TO YOUR BASKET:</p>
            <p className="text-[3vw] xs:text-[0.9rem] leading-tight">
                {basketStore.showProductWasAdded
                    ? basketStore.productsArray[basketStore.addedProductValueIndex].title
                    : ''}
            </p>
            <div className="flex w-full justify-center">
                <Link href="/basket">
                    <a className="w-full">
                        <Button className="bg-pageWhite transformDefault hover:bg-cartBtnHover py-2 text-center text-pageBlack w-full md:w-1/2 uppercase">
                            GO TO BASKET
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default observer(ItemWasAddedToBasket);
