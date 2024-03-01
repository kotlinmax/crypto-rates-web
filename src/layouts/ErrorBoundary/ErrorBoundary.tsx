import React, {ErrorInfo} from 'react';
import s from './ErrorBoundary.module.scss';
import { IErrorBoundaryProps, IErrorBoundaryState } from './IErrorBoundary';

export default class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('error:', error)
    this.setState({error: error, errorInfo: errorInfo});
  }

  render() {
    if (this.state.error) {
      return (
        <div className={s.errorPage}>
          <h2>Произошла ошибка. Свяжитесь со службой поддержки.</h2>
          <details className={s.description}>
            {this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
