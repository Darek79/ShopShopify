import { memo } from 'react';
interface SliderNavigationButtonsI {
    forward(): void;
    backward(): void;
}

export default memo(function SliderNavigationButtons({ forward, backward }: SliderNavigationButtonsI): JSX.Element {
    return (
        <div className="absolute hidden md:flex justify-center top-[calc(50%-10px)] w-full z-10">
            <div className="flex justify-between w-full px-3">
                <div
                    onClick={backward}
                    className="rounded-full w-10 h-10 bg-pageWhite/30 flex shadow-md cursor-pointer transform duration-500 transition-all hover:bg-pageWhite/60"
                >
                    <button
                        type="button"
                        className="border-b-4 border-l-4 translate-x-[1px] border-pageBlack w-3 h-3 rotate-45 m-auto"
                    />
                </div>
                <div
                    onClick={forward}
                    className="rounded-full w-10 h-10 bg-pageWhite/30 flex shadow-lg cursor-pointer transform duration-500 transition-all hover:bg-pageWhite/60"
                >
                    <button
                        type="button"
                        className="border-t-4 border-r-4 -translate-x-[1px] border-pageBlack w-3 h-3 rotate-45 m-auto"
                    />
                </div>
            </div>
        </div>
    );
});
