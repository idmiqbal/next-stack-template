"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Container className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <p className="mt-2 text-muted-foreground">
              An unexpected error occurred. Please try again later.
            </p>
            {this.state.error && (
              <pre className="mt-4 max-w-full overflow-x-auto rounded bg-muted p-4 text-sm">
                {this.state.error.message}
              </pre>
            )}
            <Button
              className="mt-6"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </Button>
          </Container>
        )
      );
    }

    return this.props.children;
  }
}