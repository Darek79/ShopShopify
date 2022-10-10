import { HTMLAttributes } from 'react';

export interface HeaderI extends HTMLAttributes<HTMLElement> {
    h2Content?: string;
    pContent?: string;
    h2Style?: string;
    pStyle?: string;
}

export default function Header({ children, h2Content, h2Style, pContent, pStyle, ...rest }: HeaderI): JSX.Element {
    return (
        <header {...rest}>
            <h2 className={h2Style}>{h2Content}</h2>
            <p className={pStyle}>{pContent}</p>
            {children}
        </header>
    );
}
