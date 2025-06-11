import type { IChangeElementFocus } from '@/types/IUtils/IChangeElementFocus';

export const changeElementFocus = <T extends HTMLElement>({
    elem,
    state,
    callback,
}: IChangeElementFocus<T>) => {
    if (elem.current) {
        if (state) {
            elem.current.focus();
        } else {
            elem.current.blur();
        }
    }
    if (callback) {
        callback();
    }
};
