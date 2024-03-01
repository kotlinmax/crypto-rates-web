import { ErrorInfo, ReactNode } from "react";

export interface IErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface  IErrorBoundaryProps {
  children?: ReactNode;
}