import { Card, LazyMotionWrapper, SliderNavigationButtons } from 'components';
import { useState, useCallback, useRef, useEffect } from 'react';
import { m, AnimatePresence, useSpring } from 'framer-motion';
import type { EdgesEntity } from 'Types/Products';

// const slideArray = [10, 20, 30, 40, 50, 60, 70, 80];

interface ImageSliderI {
    buttonOnMobile?: boolean;
    slideArray: EdgesEntity[];
}

export default function ImageSlider({ buttonOnMobile, slideArray }: ImageSliderI): JSX.Element {
    const x = useSpring(0);
    const [state, setState] = useState<number>(0);
    const slideNumberRef = useRef<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const forward = useCallback(() => {
        if (slideNumberRef.current < 5) {
            setState(p => p - sliderRef.current!.getBoundingClientRect().width);
            slideNumberRef.current++;
        }
    }, []);
    const backward = useCallback(() => {
        if (slideNumberRef.current) {
            slideNumberRef.current--;
            setState(p => p + sliderRef.current!.getBoundingClientRect().width);
        }
    }, []);

    useEffect(() => {
        x.set(state);
    }, [state, x]);

    return (
        <div className="pb-10 relative">
            <AnimatePresence initial={false}>
                <LazyMotionWrapper>
                    <m.div
                        style={{ x }}
                        key="image-slider"
                        className="flex md:gap-4 w-[calc((100%/1)*8)] md:w-[calc((100%/3.2)*8)]"
                    >
                        {slideArray.map(el => (
                            <div
                                key={el.node.images.nodes[0].id}
                                className="w-full md:w-[calc(100%/3.2)] bg-pageWhite"
                                ref={sliderRef}
                            >
                                <Card
                                    imgSrc={el.node.images.nodes[0].url}
                                    imgAlt={el.node.images.nodes[0].altText}
                                    className=""
                                    href={el.node.tags[0]}
                                    h2Content={el.node.title}
                                    pContent={el.node.priceRange.maxVariantPrice.amount}
                                />
                            </div>
                        ))}
                    </m.div>
                </LazyMotionWrapper>
            </AnimatePresence>
            <SliderNavigationButtons buttonOnMobile={buttonOnMobile} forward={forward} backward={backward} />
        </div>
    );
}
