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

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Post component render error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="my-10 rounded-lg border-2 border-brick/30 bg-brick-tint p-6 font-body text-brick">
          <h3 className="mb-2 font-display font-bold">This entry couldn&apos;t be displayed</h3>
          <p>Something in this article&apos;s content failed to render. The rest of the site is unaffected.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 rounded bg-brick px-4 py-2 text-sm text-paper transition-colors hover:opacity-90"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
