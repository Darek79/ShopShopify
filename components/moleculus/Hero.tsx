import { Header, ImageWrapped } from 'components';
import { useState, useEffect, useCallback, useRef, TouchEvent } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from 'public/bag-slide1.jpg';
import img2 from 'public/bag-slide2.jpg';
import img3 from 'public/bag-slide3.jpg';
import { sliderVariant, transitionSlider } from 'Variants/variants';
// interface HeroI{

// }

const imageArray = [img1, img2, img3];

export default function Hero(): JSX.Element {
    const [state, setState] = useState<number>(1);
    const useRefDirection = useRef<number>(0);
    const useRefTouchStart = useRef<number>(0);
    const useRefTouchEnd = useRef<number>(0);

    const forward = useCallback(() => {
        setState(p => (p + 1) % 3);
        useRefDirection.current = 1;
    }, []);
    const backward = useCallback(() => {
        setState(p => (p - 1 === -1 ? imageArray.length - 1 : p - 1));
        useRefDirection.current = -1;
    }, []);

    const touchMoveStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
        useRefTouchStart.current = event.targetTouches[0].clientX;
    }, []);
    const touchMoveEnd = useCallback((event: TouchEvent<HTMLDivElement>) => {
        useRefTouchEnd.current = event.targetTouches[0].clientX;
    }, []);
    const touchEnd = useCallback(() => {
        console.log('touchEnd', useRefTouchStart.current - useRefTouchEnd.current);
        if (useRefTouchStart.current - useRefTouchEnd.current > 0) {
            forward();
            return null;
        }
        backward();
    }, [forward, backward]);

    return (
        <div className="overflow-hidden max-w-screen-2xl">
            <div className="relative aspect1_1 xs:aspect21_9">
                <AnimatePresence initial={false} custom={useRefDirection.current}>
                    <motion.div
                        onTouchStart={touchMoveStart}
                        onTouchMove={touchMoveEnd}
                        onTouchEnd={touchEnd}
                        key={imageArray[state].src}
                        custom={useRefDirection.current}
                        variants={sliderVariant}
                        initial="enter"
                        animate="center"
                        transition={transitionSlider}
                        exit="exit"
                        className="absolute top-0 w-full h-full"
                    >
                        <div className="relative w-full aspect1_1 xs:aspect21_9">
                            <Image
                                alt="slider_image"
                                src={imageArray[state]}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </motion.div>
                    <div className="absolute hidden md:flex justify-between top-[calc(50%-10px)] w-full z-10">
                        <button
                            type="button"
                            className="border-b-2 border-l-2 w-8 h-8 rotate-45 translate-x-3 md:translate-x-6"
                            onClick={backward}
                        />
                        <button
                            type="button"
                            className="border-t-2 border-r-2 w-8 h-8 rotate-45 -translate-x-3 md:-translate-x-6"
                            onClick={forward}
                        />
                    </div>
                </AnimatePresence>
                <div className="absolute bottom-[20px] bg-inherit w-full h-[20px] z-10">
                    <>{console.log(state)}</>
                    <div className="flex gap-3 items-center justify-center h-full">
                        {imageArray.map((el, i) => {
                            if (state === i) {
                                return (
                                    <div
                                        key={imageArray[i].src}
                                        className="border-white bg-white border-2 w-5 h-5 rounded-full"
                                    ></div>
                                );
                            } else {
                                return (
                                    <div
                                        key={imageArray[i].src}
                                        className="border-white border-2 w-5 h-5 rounded-full"
                                    ></div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
