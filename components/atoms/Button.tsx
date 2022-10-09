import { createElement } from 'react';
import type { HTMLAttributes } from 'react';

export default function Button({ children, ...rest }: HTMLAttributes<HTMLButtonElement>): JSX.Element {
    return createElement('button', { ...rest }, children);
}
