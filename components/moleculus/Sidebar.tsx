import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import useStore from 'Mobx/context/storeContext';
import { ClosingXSVG } from 'components';
import { HTMLAttributes } from 'react';

function Sidebar({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const { mainStore } = useStore();
    const wrapperClasses = classNames({
        'w-full fixed col-span-3 min-h-screen transition-all duration-200 p-5 z-[9999] bg-black': true,
        'translate-x-0': mainStore.openSidebar,
        '-translate-x-full': !mainStore.openSidebar,
    });

    return (
        <div className={wrapperClasses}>
            <>{console.log(mainStore.openSidebar, 'comp')}</>
            <div className="w-full flex justify-end">
                <ClosingXSVG
                    className="stroke-white w-8 h-8 cursor-pointer"
                    clickFn={() => mainStore.sidebarHandler()}
                />
            </div>
            <div {...rest}>{children}</div>
        </div>
    );
}

export default observer(Sidebar);
