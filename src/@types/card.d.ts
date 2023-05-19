type TypeCard = {
  // position?: string; index
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
// {
//   carbohydrates: number;
//   calories: number;
//   fat: number;
//   index: string;
//   name: string;
//   price: number;
//   proteins: string;
//   image: string;
//   image_large: string;
//   image_mobile: string;
//   text: string;
//   thumbnail: string;
//   type: string;
//   uniqueId: string;
//   __v: number;
//   _id: string;
// };

type TypeElementBun = {
  position: string;
}
