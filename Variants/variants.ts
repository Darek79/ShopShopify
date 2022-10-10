export const sliderVariant = {
    enter: {
        opacity: 0,
        zIndex: 0,
    },
    center: {
        x: 0,
        opacity: 1,
        zIndex: 1,
    },
    exit: {
        opacity: 0,
        zIndex: 0,
    },
};

export const transitionSlider = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.4 },
};
