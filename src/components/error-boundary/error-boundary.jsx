/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import style from './error-boundary.module.css';

function ErrorMessageBox() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title} text text_type_digits-large`}>
        APP
        <span className={`${style.span} text text_type_digits-large pb-8`}>
          ERROR
        </span>
      </h2>
      <p className="text text_type_main-medium pb-8">
        Something went wrong.
      </p>
      <p className="text text_type_main-default text_color_inactive pb-2">
        Try to reload App
      </p>
    </div>
  );
}

// https://ru.legacy.reactjs.org/docs/error-boundaries.html
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessageBox />;
    }

    return this.props.children;
  }
}
