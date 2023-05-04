import React from 'react';

import style from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title} text text_type_digits-large`}>
        404
        <span className={`${style.span} text text_type_digits-large pb-8`}>
          Not found page
        </span>
      </h2>
      <p className="text text_type_main-medium pb-8">
        ...
      </p>
      <p className="text text_type_main-default text_color_inactive pb-2">
        link to main
      </p>
    </div>
  );
}
