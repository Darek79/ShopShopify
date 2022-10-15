import { Header, LazyMotionWrapper, SliderNavigationButtons } from 'components';
import { useState, useCallback, useRef, TouchEvent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence, m } from 'framer-motion';
import img1 from 'public/bag-slide1.jpg';
import img2 from 'public/bag-slide2.jpg';
import img3 from 'public/bag-slide3.jpg';
import { sliderVariant, transitionSlider, headerVariant } from 'Variants/variants';
// interface HeroI{

// }
interface ImageArrayI {
    img: StaticImageData;
    title?: string;
    description?: string;
}

const imageArray: ImageArrayI[] = [
    { img: img1, title: 'Lorem ipsum dolor', description: 'Duis aliquet lorem justo, quis feugiat velit' },
    { img: img2, title: 'Proin malesuada facilisis', description: 'Nunc iaculis viverra ante' },
    { img: img3, title: 'Quisque dolor purus', description: 'Vivamus auctor viverra nisl vitae' },
];

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
        <div className="overflow-hidden text-pageWhite">
            <div className="relative aspect1_1 xs:aspect21_9">
                <AnimatePresence initial={false} custom={useRefDirection.current}>
                    <motion.div
                        onTouchStart={touchMoveStart}
                        onTouchMove={touchMoveEnd}
                        onTouchEnd={touchEnd}
                        key={imageArray[state].img.src}
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
                                src={imageArray[state].img}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                priority={true}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
                <SliderNavigationButtons backward={backward} forward={forward} />
                <AnimatePresence>
                    <LazyMotionWrapper>
                        <m.article
                            variants={headerVariant}
                            initial="enter"
                            animate="center"
                            transition={transitionSlider}
                            exit="exit"
                            className="absolute bottom-12 z-20 flex w-full justify-center pointer-events-none"
                            key={imageArray[state].title}
                        >
                            <Header
                                className="text-center"
                                h2Style="title"
                                pStyle="description"
                                h2Content={imageArray[state].title}
                                pContent={imageArray[state].description}
                            />
                        </m.article>
                    </LazyMotionWrapper>
                </AnimatePresence>
                <div className="absolute bottom-[20px] bg-inherit w-full h-[20px] z-10">
                    <div className="flex gap-3 items-center justify-center h-full">
                        {imageArray.map((el, i) => {
                            if (state === i) {
                                return (
                                    <div
                                        key={imageArray[i].img.src}
                                        className="border-white bg-white border-2 w-4 h-4 rounded-full"
                                    ></div>
                                );
                            } else {
                                return (
                                    <div
                                        key={imageArray[i].img.src}
                                        className="border-white border-2 w-4 h-4 rounded-full"
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
