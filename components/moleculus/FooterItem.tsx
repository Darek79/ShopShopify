import { ImageWrapped } from 'components';
import { HTMLAttributes } from 'react';
import classname from 'classnames';
interface FooterItemI extends HTMLAttributes<HTMLDivElement> {
    defaultOpen?: boolean;
}

export default function FooterItem({ title, children }: FooterItemI): JSX.Element {
    // const [state, setState] = useState<boolean>(false);
    // function openBox() {
    //     if (!defaultOpen) {
    //         setState(p => !p);
    //     }
    // }
    // useEffect(() => {
    //     if (defaultOpen) {
    //         setState(true);
    //     }
    // }, [defaultOpen]);
    const wrapperClasses = classname({
        'transformDefault overflow-hidden origin-bottom z-[5] text-xs uppercase h-fit': true,
        // 'h-5 opacity-0': !state,
        // 'h-fit pt-5 opacity-100 delay-200': state,
    });
    return (
        <div className="overflow-hidden relative [&_h2]:font-semibold [&_h2]:text-pageBlack">
            <ImageWrapped className="flex w-full justify-between items-center cursor-pointer uppercase bg-pageWhite">
                <h2>{title}</h2>
                {/* <ChevronDownSVG defaultOpen={true} /> */}
            </ImageWrapped>
            <div className={wrapperClasses}>{children}</div>
        </div>
    );
}
// const wrapperClasses = classname({
//     'transformDefault overflow-hidden origin-bottom z-[5] text-xs uppercase': true,
//     'h-5 -translate-y-full opacity-0': !state,
//     'h-fit py-5 opacity-100 translate-y-3 delay-200': state,
// });
