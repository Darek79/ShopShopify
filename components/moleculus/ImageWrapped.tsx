import { createElement } from 'react';
import type { HTMLAttributes } from 'react';

export default function ImageWrapped({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return createElement('figure', { ...rest }, children);
}
