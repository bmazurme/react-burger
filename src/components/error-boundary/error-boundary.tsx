/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Urls } from '../../utils';

import style from './error-boundary.module.css';

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

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
export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // logErrorToMyService(error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorMessageBox />;
    }

    return this.props.children;
  }
}
