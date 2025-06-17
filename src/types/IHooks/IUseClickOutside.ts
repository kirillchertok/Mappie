import type React from 'react';

export interface IUseClickOutside<T extends HTMLElement> {
    ref: React.RefObject<T | null>;
    onClose: () => void;
}
