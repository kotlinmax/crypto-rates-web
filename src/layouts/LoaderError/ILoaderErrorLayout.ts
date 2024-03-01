import {ReactNode} from 'react';

export interface ILoaderErrorLayoutProps {
  isLoading: boolean;
  error?: string | null;
  children?: ReactNode;
}
