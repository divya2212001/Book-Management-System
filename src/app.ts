import express from "express";
import mongoose from "mongoose";
import ApiError from "./utils/ApiError";
import { Routes } from "./utils/route.interface";

class App {
  public app = express();
  public port = 3000;

  constructor(routes: Routes[]) {
    this.app.use(express.json());
    routes.forEach(r => this.app.use("/", r.router));
    this.connectDB();
    this.handleErrors();
  }

  private async connectDB() {
    try {
      await mongoose.connect(process.env.MONGODB_URI!);
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection failed:", error);
      process.exit(1);
    }
  }

  private handleErrors() {
    this.app.use((err: any, req: any, res: any, next: any) => {
  console.error("RUNTIME ERROR", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  res.status(500).json({ message: err.message || "Internal Server Error" });
});

  }

  start() {
    this.app.listen(this.port, () =>
      console.log(`Server running on ${this.port}`)
    );
  }
}

export default App;

