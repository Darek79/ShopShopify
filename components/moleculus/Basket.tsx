import { BasketItem } from 'components';
import { toJS } from 'mobx';
import useStore from 'Mobx/context/storeContext';
import { observer } from 'mobx-react-lite';

function Basket(): JSX.Element {
    const { basketStore } = useStore();

    return (
        <div className="pt-5 grid gap-y-3">
            {basketStore.productsArray.map(el => (
                <BasketItem key={el.merchandiseId} productItem={el} />
            ))}
        </div>
    );
}

export default observer(Basket);
