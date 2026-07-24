import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("3D Canvas failed to load (likely a WebGL issue). Falling back gracefully.", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Return a simple div or nothing if the 3D canvas fails to load
      return <div className="w-full h-full bg-brand-dark opacity-50"></div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
