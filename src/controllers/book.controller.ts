import { Request, Response, NextFunction } from "express";
import BookService from "../services/book.service";

class BookController {
  private service = new BookService();

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books = await this.service.getAll();
      res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await this.service.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const book = await this.service.getById(id);
    res.json(book);
  } catch (err) {
    next(err);
  }
};

update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const book = await this.service.update(id, req.body);
    res.json(book);
  } catch (err) {
    next(err);
  }
};

delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await this.service.delete(id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    next(err);
  }}
}

export default BookController;

