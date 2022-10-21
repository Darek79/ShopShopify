import { ImageWrapped, BasketItemImage } from 'components';
import Image from 'next/image';
import plus from 'public/plus.svg';
import minus from 'public/minus.svg';
import trash from 'public/trash.svg';
import type { ProductAmountI } from 'Mobx/stores/BasketStore';
import useStore from 'Mobx/context/storeContext';
import { observer } from 'mobx-react-lite';

interface BasketItemI {
    productItem: ProductAmountI;
}

function BasketItem({ productItem }: BasketItemI): JSX.Element {
    const { basketStore } = useStore();
    return (
        <div className="flex gap-2 h-full">
            <div className="border-2 h-fit border-black p-2 w-[90%]">
                <BasketItemImage imgSrc={productItem.imageUrl} title={productItem.title} />
                <div className="w-fit h-fit flex items-center gap-3 float-right">
                    <div className="flex pl-spacing100 gap-2">
                        {/* <p>{el.price}</p> */}
                        {/* <p>{el.amount}</p> */}
                        <p>${(productItem.price * productItem.amount).toFixed(2)}</p>
                    </div>
                    <ImageWrapped
                        onClick={() => basketStore.lowerProductAmount(productItem.id)}
                        className="relative border-2 flex border-pageBlack cursor-pointer"
                    >
                        <Image src={minus} alt="minus" />
                    </ImageWrapped>
                    <p className="font-bold">{productItem.amount}</p>
                    <ImageWrapped
                        onClick={() => basketStore.addProductAmount(productItem.id)}
                        className="relative flex border-2 border-pageBlack cursor-pointer"
                    >
                        <Image src={plus} alt="plus" />
                    </ImageWrapped>
                </div>
            </div>
            <div className="flex items-center">
                <ImageWrapped
                    onClick={() => basketStore.removeOneProduct(productItem.id)}
                    className="relative p-2 h-fit border-2 flex items-center border-pageBlack cursor-pointer"
                >
                    <Image src={trash} alt="minus" />
                </ImageWrapped>
            </div>
        </div>
    );
}
export default observer(BasketItem);
