import { Navigation } from 'components';
import { debounced } from 'utils/debounce';
import { useEffect, useMemo, useCallback, useRef, useState } from 'react';
import className from 'classnames';

export default function ScrolledNavigation(): JSX.Element {
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
        if (window.scrollY > 250 && timeRef.current - window.scrollY > 0) {
            setState(false);
        }
    }, [actualScroll]);

    const handler = useMemo(() => debounced(checkScroll, 100), [checkScroll]);

    const wrapperClasses = className({
        'fixed left-0 top-0 w-full px-5 transition-all duration-500 z-50 shadow-xl': true,
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
