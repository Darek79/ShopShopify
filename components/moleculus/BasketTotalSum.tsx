import useStore from 'Mobx/context/storeContext';
import { observer } from 'mobx-react-lite';
function BasketTotalSum(): JSX.Element {
    const { basketStore } = useStore();
    return <p className="text-[5vw] xs:text-[1.3rem] leading-tight">${basketStore.totalSumBasket.toFixed(2)}</p>;
}
export default observer(BasketTotalSum);
