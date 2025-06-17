import React from 'react';

import type { IErrorBoundaryProps, IErrorBoundaryState } from '@/types/IComponents/IErrorBoundary';

import styles from './ErrorBoudary.module.css';

export class ErrorBoudary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): IErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Ошибка:', error, errorInfo);
    }

    render(): React.ReactNode {
        const { hasError, error } = this.state;

        if (hasError && error) {
            return (
                <>
                    <div className={styles.error}>
                        <h1>Что-то пошло не так</h1>
                        <details className={styles.error__message}>
                            <summary>Информация об ошибке</summary>
                            {error.message}
                        </details>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}
