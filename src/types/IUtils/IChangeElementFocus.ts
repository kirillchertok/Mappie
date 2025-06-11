import type React from 'react';

export interface IChangeElementFocus<T extends HTMLElement> {
    elem: React.RefObject<T | null>;
    state: boolean;
    callback?: () => void;
}
