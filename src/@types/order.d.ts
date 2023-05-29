type TypeOrder = {
  ingredients: TypeCard[];
  name: string;
  number: string;
  count: number;

  price: number;
  time: string;
};

type TOrder = {
  ingredients: string[];
  createdAt: string;
  name:string;
  number: number;

  status: 'done' | 'pending';
  updatedAt: string;
  _id: string;

  price: number;
  time: string;
};

type TMOrder = {
  ingredients: TypeCard[];
  createdAt: string;
  name:string;
  number: number;

  status: 'done' | 'pending';
  updatedAt: string;
  _id: string;

  price: number;
  time: string;
};
