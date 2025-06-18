export type Themes = 'light' | 'dark';

export interface IAppSlice {
    isLoading: boolean;
    authError: string | null;
    theme: Themes;
}
