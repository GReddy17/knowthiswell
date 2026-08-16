'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ContentErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo, _: any) {
    console.error('MDX Rendering Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="my-10 p-6 border-2 border-red-200 bg-red-50 rounded-lg text-red-800 font-body">
          <h3 className="font-display font-bold mb-2">Content Rendering Error</h3>
          <p>This section of the article contains a formatting error and cannot be displayed.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-red-800 text-white text-sm rounded hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
