// # Redux store for `recipes`

export interface Recipe {
  _id: number;
  tags: Array<Object>;
  title: string;
  description: string;
  rating: number;
  creator: string;
  ingredients: Array<Object>;
  directions: Array<Object>;
};
