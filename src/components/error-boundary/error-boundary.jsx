/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import style from './error-boundary.module.css';
import { Urls } from '../../utils';

function ErrorMessageBox() {
  return (
    <div className={style.container}>
      <h2 className={classNames(style.title, 'text text_type_digits-large')}>
        APP
        <span className={classNames(style.span, 'text text_type_digits-large pb-8')}>
          ERROR
        </span>
      </h2>
      <p className="text text_type_main-medium pb-8">
        Something went wrong. Try to reload App.
      </p>
      <NavLink to={Urls.BASE} className="text text_type_main-default text_color_inactive pb-2">
        Go to main
      </NavLink>
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
