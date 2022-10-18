import { FooterItem } from 'components';
import Link from 'next/link';
// interface FooterI{

// }

export default function Footer(): JSX.Element {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            <FooterItem title="About Us">
                <p className="md:w-3/4">
                    Making a profitable ecommerce store is hard work. You can&apos;t just open a website and expect
                    people to flood in. If you really want to succeed you have to create traffic
                </p>
            </FooterItem>
            <FooterItem title="INFORMATION">
                <ul className="grid gap-y-2">
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Privacy Policy</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Refund policy</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Cookie Policy</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Faq</Link>
                    </li>
                </ul>
            </FooterItem>
            <FooterItem title="CUSTOMER SERVICE">
                <ul className="grid gap-y-2">
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Returns & Exchanges</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Shipping & Delivery</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Privacy Policy</Link>
                    </li>
                </ul>
            </FooterItem>
            <FooterItem title="Social Links">
                <ul className="grid gap-y-2">
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Returns & Exchanges</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Shipping & Delivery</Link>
                    </li>
                    <li className="uppercase hover:underline underline-offset-1 transformDefault">
                        <Link href="#">Privacy Policy</Link>
                    </li>
                </ul>
            </FooterItem>
            <div className="p-5 bg-pageBlack text-center text-pageWhite md:col-span-4">© 2022 All Rights Reserved</div>
        </div>
    );
}
