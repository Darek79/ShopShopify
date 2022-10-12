import { Card, LazyMotionWrapper } from 'components';
import { useState, useCallback, useRef, useEffect } from 'react';
import { m, AnimatePresence, useSpring } from 'framer-motion';

export default function ImageSlider(): JSX.Element {
    const x = useSpring(0);
    const [state, setState] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const forward = useCallback(() => {
        if (sliderRef.current?.getBoundingClientRect().width) {
            setState(p => p - sliderRef.current!.getBoundingClientRect().width);
        }
    }, []);
    const backward = useCallback(() => {
        setState(p => p + sliderRef.current!.getBoundingClientRect().width);
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
                        {[10, 20, 30, 40, 50, 60, 70, 80].map(el => (
                            <div key={el} className="w-full md:w-[calc(100%/3.2)] bg-blue-200" ref={sliderRef}>
                                <Card key={el} href="#" h2Content="Crew neck sweater" pContent="50" />
                            </div>
                        ))}
                    </m.div>
                </LazyMotionWrapper>
            </AnimatePresence>
            <div className="absolute flex justify-between top-[calc(50%-10px)] w-full z-10">
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
        </div>
    );
}
{
    /* <Card key={el} href="#" /> */
}
