import Image from 'next/image';
import { memo } from 'react';
import type { HTMLAttributes } from 'react';
import type { HeaderI } from './Header';
import Link from 'next/link';
import { ImageWrapped, Header } from 'components';
import pulli from 'public/pulli.jpg';
interface CardInterface extends HTMLAttributes<HTMLDivElement> {
    href: string;
}

type CardI = CardInterface & HeaderI;

export default memo(function Card({ h2Content, pContent, href }: CardI): JSX.Element {
    return (
        <Link href={href}>
            <a>
                <div className="text-center w-full">
                    <div className="overflow-hidden">
                        <ImageWrapped className="w-full relative aspect6_9 transformDefault hover:scale-105">
                            <Image src={pulli} alt="product_image" layout="fill" objectFit="cover" />
                        </ImageWrapped>
                    </div>
                    <Header className="uppercase leading-loose" h2Content={h2Content} pContent={`$${pContent}`} />
                </div>
            </a>
        </Link>
    );
});
