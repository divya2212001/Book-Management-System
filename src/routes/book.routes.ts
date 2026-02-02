import { Router } from "express";
import { Routes } from "../utils/route.interface";
import BookController from "../controllers/book.controller";

class BookRoutes implements Routes {
  path = "/books";
  router = Router();
  controller = new BookController();

  constructor() {
  this.router.get(this.path, this.controller.getAll);
  this.router.get(`${this.path}/:id`, this.controller.getOne);
  this.router.post(this.path, this.controller.create);
  this.router.put(`${this.path}/:id`, this.controller.update);
  this.router.delete(`${this.path}/:id`, this.controller.delete);
}

}

export default BookRoutes;
