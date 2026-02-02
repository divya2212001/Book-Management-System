import { Schema, model } from "mongoose";
import { BookDocument, BookModelType } from "../utils/book.interface";

const bookSchema = new Schema<BookDocument>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true }
});

const BookModel = model<BookDocument, BookModelType>("Book", bookSchema);
export default BookModel;
