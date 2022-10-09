import { HTMLAttributes } from 'react';

interface HeaderI extends HTMLAttributes<HTMLElement> {
    h2Content?: string;
    pContent?: string;
    h2Style?: string;
    p2Style?: string;
}

export default function Header({ children, h2Content, h2Style, pContent, p2Style, ...rest }: HeaderI): JSX.Element {
    return (
        <header {...rest}>
            <h2 className={h2Style}>{h2Content}</h2>
            <p className={pContent}>{pContent}</p>
        </header>
    );
}
