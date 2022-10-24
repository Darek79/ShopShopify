import { Button } from 'components';
import { observer } from 'mobx-react-lite';
import useStore from 'Mobx/context/storeContext';
import { useEffect } from 'react';

function CheckoutRedirectButton(): JSX.Element {
    const { basketStore } = useStore();

    useEffect(() => {
        if (basketStore.start && window) {
            fetch('/api/getCheckoutURL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(basketStore.lineItem),
            })
                .then(res => res.json())
                .then(d => {
                    if (d.error) {
                        return;
                    }
                    window.location.href = d.url;
                });
        }
    }, [basketStore, basketStore.start]);

    return (
        <div className="w-full md:w-[90%] flex md:justify-end">
            <Button className="checkoutButtonBasket mt-5" onClick={() => basketStore.getLineItems()}>
                GO TO CHECKOUT
            </Button>
        </div>
    );
}
export default observer(CheckoutRedirectButton);
