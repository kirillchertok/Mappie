import type React from 'react';
import type { ButtonHTMLAttributes } from 'react';

type variant = 'pressed' | 'not_pressed';
type size = 'default' | 'medium' | 'large';
type backgroundColor = 'blue' | 'red' | 'gray';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: variant;
    size?: size;
    backgroundColor?: backgroundColor;
    children: React.ReactNode;
}
