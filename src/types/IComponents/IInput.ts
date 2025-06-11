import type React from 'react';
import type { InputHTMLAttributes } from 'react';

type SizeType = 'default' | 'medium' | 'large';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    sizeType?: SizeType;
    label?: string;
    icon?: React.ReactNode;
}
