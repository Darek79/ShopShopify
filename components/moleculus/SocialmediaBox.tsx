import { ImageWrapped } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import facebook from 'public/facebook.svg';
import instagram from 'public/instagram.svg';
import pinterest from 'public/pinterest.svg';
interface SocialmediaBoxI {
    facebookHref?: string;
    instagramHref?: string;
    pinterestHref?: string;
}

export default function SocialmediaBox({
    facebookHref = '#',
    instagramHref = '#',
    pinterestHref = '#',
}: SocialmediaBoxI): JSX.Element {
    return (
        <div className="h-spacing40 my-3">
            <Link href={facebookHref}>
                <a className="">
                    <ImageWrapped className="relative h-full w-[40px] float-left">
                        <Image src={facebook} alt="facebook_logo" layout="fill" objectFit="cover" />
                    </ImageWrapped>
                </a>
            </Link>
            <Link href={instagramHref}>
                <a>
                    <ImageWrapped className="relative h-full w-[40px] mx-2 float-left">
                        <Image src={instagram} alt="instagram_logo" layout="fill" objectFit="cover" />
                    </ImageWrapped>
                </a>
            </Link>
            <Link href={pinterestHref}>
                <a>
                    <ImageWrapped className="relative h-full w-[40px] float-left">
                        <Image src={pinterest} alt="pinterest_logo" layout="fill" objectFit="cover" />
                    </ImageWrapped>
                </a>
            </Link>
        </div>
    );
}
