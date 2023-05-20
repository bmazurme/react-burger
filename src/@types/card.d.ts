type TypeCard = {
  isLocked?: boolean;
  onClick?: () => void;
  carbohydrates: number;
  calories: number;
  fat: number;
  index?: number;
  name: string;
  price: number;
  proteins: number;
  image: string;
  image_mobile: string;
  image_large: string;
  text?: string;
  thumbnail?: string;
  type: string;
  uniqueId?: string;
  __v: number;
  _id: string;
};

type TypeElementMain = Omit<TypeCard | isLocked>;

type TypeElementBun = {
  position: 'top' | 'bottom' | undefined;
}
