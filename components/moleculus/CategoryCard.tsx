import { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import classnames from 'classnames';
import { ImageWrapped, Header } from 'components';
import img1 from 'public/dm1.jpg';
import Link from 'next/link';

interface CategoryCardI extends HTMLAttributes<HTMLDivElement> {
    imageWrapperClasses: string;
    objectPosition?: ImageProps['objectPosition'];
    headerPositionClasses?: string;
    href: string;
}

export default function CategoryCard({
    href,
    imageWrapperClasses,
    headerPositionClasses,
    objectPosition,
    className,
}: CategoryCardI): JSX.Element {
    const wrapperClasses = classnames({
        'relative cursor-pointer overflow-hidden': true,
        [`${className}`]: true,
    });

    const imageClasses = classnames({
        'relative hover:scale-105 duration-1000': true,
        [`${imageWrapperClasses}`]: true,
    });
    const headerClasses = classnames({
        'absolute text-pageWhite text-center': true,
        [`${headerPositionClasses}`]: true,
    });

    return (
        <Link href={href}>
            <div className={wrapperClasses}>
                <ImageWrapped className={imageClasses}>
                    <Image
                        src={img1}
                        alt="card_image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={objectPosition}
                    />
                </ImageWrapped>
                <Header
                    className={headerClasses}
                    h2Style="titleCard"
                    pStyle="descriptionCard"
                    h2Content="Quisque quis massa"
                    pContent="Praesent accumsan arcu"
                />
            </div>
        </Link>
    );
}
