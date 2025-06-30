import type { HTMLAttributes } from 'react';

import type { IPlace } from '../IPlace';

export type Variant = 'small' | 'large';

export interface IFavoriteCard extends HTMLAttributes<HTMLElement> {
    variant: Variant;
    data: IPlace;
}
