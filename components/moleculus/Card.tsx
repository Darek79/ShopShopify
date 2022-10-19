import Image, { ImageProps } from 'next/image';
import { memo } from 'react';
import type { HTMLAttributes } from 'react';
import type { HeaderI } from './Header';
import Link from 'next/link';
import { ImageWrapped, Header } from 'components';
interface CardInterface extends HTMLAttributes<HTMLDivElement> {
    href: string;
    imgSrc: ImageProps['src'];
    imgAlt: ImageProps['alt'];
}

type CardI = CardInterface & HeaderI;

export default memo(function Card({ h2Content, pContent, href, imgAlt, imgSrc }: CardI): JSX.Element {
    return (
        <Link href={`/product/${href}`}>
            <a>
                <div className="text-center w-full">
                    <div className="overflow-hidden">
                        <ImageWrapped className="w-full relative aspect6_9 transformDefault hover:scale-105">
                            <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
                        </ImageWrapped>
                    </div>
                    <Header className="uppercase leading-loose" h2Content={h2Content} pContent={`$${pContent}`} />
                </div>
            </a>
        </Link>
    );
});
