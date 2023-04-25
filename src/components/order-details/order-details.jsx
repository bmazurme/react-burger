import React from 'react';

import img from '../../images/done.svg';
import style from './order-details.module.css';

export default function OrderDetails() {
  return (
<<<<<<< Updated upstream
		<div className={`${style.container}`}>
			<h1 className="text text_type_digits-large pt-15 pb-8">
        034536
      </h1>
=======
		<div className={`${style.container}`}>      
			<h2 className="text text_type_digits-large mt-20 pt-15 pb-8">
        034536
      </h2>
>>>>>>> Stashed changes
			<p className="text text_type_main-medium pb-15">
        идентификатор заказа
      </p>
			<img className={`${style.icon} pb-15`} src={img} alt="icon" />
			<p className="text text_type_main-default pb-2">
        Ваш заказ начали готовить
      </p>
			<p className="text text_type_main-default text_color_inactive pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
		</div>
  );
}
