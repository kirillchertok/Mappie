import React from 'react';

interface IErrorBoundaryProps {
    children: React.ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export type { IErrorBoundaryProps, IErrorBoundaryState };
