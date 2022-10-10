export function debounced(cb: () => void, ms: number) {
    let active = false;
    return function () {
        if (active) {
            return null;
        }
        cb();
        active = true;
        setTimeout(() => {
            active = false;
        }, ms);
    };
}
