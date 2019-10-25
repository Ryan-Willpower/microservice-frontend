import React, { Component } from 'react'
import { ErrorState } from '../types/error'

export class ErrorBoundary extends Component<{}, ErrorState> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ hasError: true, error, errorInfo })
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>This service is currently unavailable</div>
    }

    return this.props.children
  }
}
