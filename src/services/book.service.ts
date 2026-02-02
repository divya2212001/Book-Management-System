import BookRepository from "../repositories/book.repository";
import ApiError from "../utils/ApiError";
import { BookInterface } from "../utils/book.interface";

class BookService {
  private repo = new BookRepository();

  async getAll() {
    return this.repo.findAll({});
  }

  async getById(id: string) {
    const book = await this.repo.findById(id);
    if (!book) {
      throw new ApiError(404, "Book not found");
    }
    return book;
  }

  async create(data: BookInterface) {
    const { title, author } = data;

    if (!title || !author) {
      
      throw new ApiError(400, "Title and Author are required");
    }

    return this.repo.create(data);
  }

  async update(id: string, data: Partial<BookInterface>) {
    const updated = await this.repo.update(id, data);
    if (!updated) {
      throw new ApiError(404, "Book not found");
    }
    return updated;
  }

  async delete(id: string) {
    const deleted = await this.repo.delete(id);
    if (!deleted) {
      throw new ApiError(404, "Book not found");
    }
  }
}

export default BookService;
