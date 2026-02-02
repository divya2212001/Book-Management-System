import { Document, Model } from "mongoose";

export interface BookInterface {
  title: string;
  author: string;
  price: number;
}

export interface BookDocument extends BookInterface, Document {}

export type BookModelType = Model<BookDocument>;
