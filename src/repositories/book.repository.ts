import BookModel from "../models/book.model";
import { BookInterface } from "../utils/book.interface";

class BookRepository {
  async create(data: BookInterface) {
    return BookModel.create(data);
  }

  async findAll(query: any) {
    return BookModel.find(query);
  }

  async findById(id: string) {
    return BookModel.findById(id);
  }

  async update(id: string, data: Partial<BookInterface>) {
    return BookModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return BookModel.findByIdAndDelete(id);
  }
}

export default BookRepository;
