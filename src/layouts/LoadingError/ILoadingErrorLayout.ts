import {ReactNode} from 'react';

export interface ILoadingErrorLayoutProps {
  isLoading: boolean;
  error?: string | null;
  children?: ReactNode;
}
