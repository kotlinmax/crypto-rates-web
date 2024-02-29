import React, {ErrorInfo, ReactNode} from 'react';
import s from './ErrorBoundary.module.scss';

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface Props {
  children?: ReactNode;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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
