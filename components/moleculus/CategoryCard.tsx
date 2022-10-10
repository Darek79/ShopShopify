import Image from 'next/image';
import { ImageWrapped, Header } from 'components';
import img1 from 'public/dm1.jpg';

// interface CategoryCardI {}

export default function CategoryCard(): JSX.Element {
    return (
        <div className="relative">
            <ImageWrapped className="relative aspect1_1">
                <Image src={img1} alt="card_image" layout="fill" objectFit="cover" />
            </ImageWrapped>
            <Header
                className="absolute bottom-12 text-pageWhite text-center w-full"
                h2Style="title"
                pStyle="description"
                h2Content="Quisque quis massa"
                pContent="Praesent accumsan arcu"
            />
        </div>
    );
}
