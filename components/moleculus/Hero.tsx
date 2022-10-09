import { Header, ImageWrapped } from 'components';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useTime, AnimatePresence, useTransform } from 'framer-motion';
import img1 from 'public/bag-slide1.jpg';
import img2 from 'public/bag-slide2.jpg';
import img3 from 'public/bag-slide3.jpg';
// interface HeroI{

// }

const imageArray = [img1, img2, img3];

const anim = {
    enter: (value: number) => {
        return { x: value >= 0 ? '100%' : '-100%', opacity: 0 };
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (value: number) => ({
        x: value >= 0 ? '-100%' : '100%',
        opacity: 0,
    }),
};

const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
};

export default function Hero(): JSX.Element {
    const [state, setState] = useState<number>(0);

    const forward = useCallback(() => {
        setState(p => (p + 1 === imageArray.length ? 0 : p + 1));
    }, [state]);
    const backward = useCallback(() => {
        setState(p => (p - 1 === -1 ? imageArray.length - 1 : p - 1));
    }, [state]);

    return (
        <div>
            <div className="relative aspect1_1 xs:aspect16_9">
                <AnimatePresence initial={false} custom={state}>
                    <motion.div
                        key={imageArray[state].src}
                        custom={state}
                        variants={anim}
                        initial="enter"
                        animate="center"
                        transition={transition}
                        exit="exit"
                        className="absolute top-0 w-full"
                    >
                        <div className="relative aspect1_1 xs:aspect16_9">
                            <Image src={imageArray[state]} layout="fill" objectFit="cover" objectPosition="center" />
                        </div>
                    </motion.div>
                </AnimatePresence>
                <>{console.log(state)}</>
            </div>
            <button className="" onClick={forward}>
                forward
            </button>
            <button className="" onClick={backward}>
                backward
            </button>
        </div>
    );
}
