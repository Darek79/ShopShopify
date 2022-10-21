import { ImageProps } from 'next/image';
import { ImageWrapped } from 'components';
import Image from 'next/image';
import { memo } from 'react';

interface BasketItemImageI {
    imgSrc: ImageProps['src'];
    title: string;
}

export default memo(function BasketItemImage({ imgSrc, title }: BasketItemImageI): JSX.Element {
    return (
        <div className="flex gap-3">
            <ImageWrapped className="w-fit relative">
                <Image src={imgSrc} alt={title} width={100} height={100} />
            </ImageWrapped>
            <p className="text-pageBlack w-full">{title}</p>
        </div>
    );
});
