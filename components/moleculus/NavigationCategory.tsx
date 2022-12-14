import useStore from 'Mobx/context/storeContext';
import Link from 'next/link';
import { useRef } from 'react';

interface NavigationCategoryI {
    navigationArr?: string[];
}

export default function NavigationCategory({ navigationArr }: NavigationCategoryI): JSX.Element {
    const { mainStore } = useStore();
    const overElementRef = useRef<boolean>(false);

    function hoverOver() {
        overElementRef.current = true;
        mainStore.handlebarScrolling(true);
    }
    function hoverOverOff() {
        overElementRef.current = false;
        mainStore.handlebarScrolling(false);
    }
    return (
        <nav className="bg-pageWhite defaultPageContentOnGrid h-fit py-2 hidden md:block z-30">
            <div className="flex justify-center">
                {navigationArr &&
                    navigationArr.map((el, i) => (
                        <div key={`${el + i}`} className="overflow-hidden group cursor-pointer">
                            <Link href={`/${el}/${i + 1}`}>
                                <p className="uppercase relative text-[0.8rem] text-pageCategory px-2">{el}</p>
                            </Link>
                            <p className="w-full h-[2px] bg-pageCategory transform duration-500 -translate-x-[101%] group-hover:translate-x-0"></p>
                            <div className="h-0 flex z-[9999] opacity-0 origin-top transform duration-300 group-hover:opacity-100 group-hover:scale-100 w-full group-hover:h-[400px] absolute left-0 top-[79px] bg-transparent pointer-events-none">
                                <div
                                    onMouseOver={hoverOver}
                                    onMouseLeave={hoverOverOff}
                                    className="p-5 h-full m-auto bg-red-200 w-[1000px] hidden group-hover:block pointer-events-auto"
                                >
                                    TEST{`${i}`}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </nav>
    );
}
