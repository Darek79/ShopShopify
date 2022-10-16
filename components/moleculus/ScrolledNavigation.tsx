import { Navigation } from 'components';
import { debounced } from 'utils/debounce';
import { useEffect, useMemo, useCallback, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import className from 'classnames';
import useStore from 'Mobx/context/storeContext';

function ScrolledNavigation(): JSX.Element {
    const { mainStore } = useStore();
    const timeRef = useRef<number>(0);
    const [state, setState] = useState<boolean>(false);

    const actualScroll = useCallback(() => {
        timeRef.current = window.scrollY;
    }, []);

    const checkScroll = useCallback(() => {
        setTimeout(actualScroll, 150);
        if (window.scrollY > 250 && timeRef.current - window.scrollY < 0) {
            setState(true);
        }
        if (window.scrollY > 250 && timeRef.current - window.scrollY > 0 && !mainStore.isScrolling) {
            setState(false);
        }
    }, [actualScroll, mainStore.isScrolling]);

    const handler = useMemo(() => debounced(checkScroll, 100), [checkScroll]);

    const wrapperClasses = className({
        'fixed left-0 top-0 w-full px-5 md:px-0 transition-all duration-500 z-50 grid grid-cols-desktop justify-items-center bg-pageWhite':
            true,
        '-translate-y-full': !state,
        'translate-y-0': state,
    });

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', handler);
        }
        return () => window.removeEventListener('scroll', handler);
    }, [handler]);

    return (
        <div className={wrapperClasses}>
            <Navigation />
        </div>
    );
}

export default observer(ScrolledNavigation);
