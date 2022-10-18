import classname from 'classnames';
interface ChevronDownSVGI {
    state: boolean;
    defaultOpen?: boolean;
}
export default function ChevronDownSVG({ state, defaultOpen }: ChevronDownSVGI): JSX.Element {
    const wrapperClasses = classname({
        'transform duration-300 w-6 h-6 md:hidden': true,
        hidden: defaultOpen,
        'rotate-0': !state,
        'rotate-180': state,
    });
    return (
        <svg
            className={wrapperClasses}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
