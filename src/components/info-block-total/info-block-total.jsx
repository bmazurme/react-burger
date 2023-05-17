import React from 'react';
import classNames from 'classnames';

import style from './info-block-total.module.css';

export default function InfoBlockTotal({ title, value }) {
  return (
    <div className={style.total}>
      <h3 className="text text_type_main-medium mt-15 mb-2">{title}</h3>
      <h2 className={classNames('text text_type_digits-large', style.shadow)}>{value}</h2>
    </div>
  );
}
