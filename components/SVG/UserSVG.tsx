import { SVGAttributes } from 'react';

interface UserI extends SVGAttributes<SVGElement> {
    clickFn?: () => void;
}

export default function UserSVG({ ...rest }: UserI): JSX.Element {
    return (
        <svg fill="none" stroke="#030807" strokeWidth="1.5" className="w-6 h-6" viewBox="0 0 24 24" {...rest}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
        </svg>
    );
}
