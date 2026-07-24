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
      // Hardware acceleration disabled: fallback to a static 2D representation of the 3D element
      return (
        <div className="w-full h-full flex items-center justify-center bg-brand-dark opacity-60">
          <img 
            src={`${import.meta.env.BASE_URL}images/fallback-3d.jpg`} 
            alt="RUMOAR 3D Element Fallback"
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-full mix-blend-screen opacity-70 animate-[spin_60s_linear_infinite]"
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
