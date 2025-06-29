'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-4 text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Bir şeyler ters gitti</h2>
              <p className="text-gray-600">Sayfa yüklenirken beklenmeyen bir hata oluştu.</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
                className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Sayfayı Yenile
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded bg-gray-100 p-4">
                <summary className="cursor-pointer font-semibold text-gray-700">
                  Hata Detayları (Geliştirici Modu)
                </summary>
                <pre className="mt-2 whitespace-pre-wrap text-sm text-red-600">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
