import type React from 'react';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'pressed' | 'not_pressed' | 'no_diff';
type Size = 'default' | 'medium' | 'large' | 'small';
type BackgroundColor = 'blue' | 'red' | 'gray' | 'light' | 'transparent';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    backgroundColor?: BackgroundColor;
    children: React.ReactNode;
}
