# Book Management System

A RESTful API for managing books built with Node.js, Express, TypeScript, and MongoDB.

## Features

- Create new books
- Get all books
- Get book by ID
- Update book information
- Delete books
- Error handling with custom API errors
- MongoDB integration with Mongoose

## Technologies

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Dependencies:**
  - express - Web framework
  - mongoose - MongoDB ODM
  - dotenv - Environment variable management

## Project Structure

```
Book-Management-System/
├── src/
│   ├── app.ts              # Main application configuration
│   ├── server.ts           # Server entry point
│   ├── controllers/        # Request handlers
│   │   └── book.controller.ts
│   ├── models/             # Mongoose models
│   │   └── book.model.ts
│   ├── repositories/       # Data access layer
│   │   └── book.repository.ts
│   ├── routes/             # Route definitions
│   │   └── book.routes.ts
│   ├── services/           # Business logic
│   │   └── book.service.ts
│   └── utils/              # Utility functions
│       ├── ApiError.ts
│       ├── book.interface.ts
│       └── route.interface.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Book-Management-System
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/book-management
PORT=3000
```

4. Start the development server:

```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Books

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /books     | Get all books     |
| GET    | /books/:id | Get book by ID    |
| POST   | /books     | Create a new book |
| PUT    | /books/:id | Update a book     |
| DELETE | /books/:id | Delete a book     |

### Request/Response Examples

#### Create Book

```json
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 12.99
}
```

#### Book Response

```json
{
  "id": "60d5ec49f1b2c8b1f8c8e1a1",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 12.99
}
```

## Available Scripts

- `npm start` - Start development server with hot reload
- `npm test` - Run tests (not configured yet)

## Architecture

This project follows a layered architecture:

- **Controller Layer:** Handles HTTP requests and responses
- **Service Layer:** Contains business logic
- **Repository Layer:** Data access operations
- **Model Layer:** Mongoose schema definitions

## Environment Variables

| Variable    | Description               | Default |
| ----------- | ------------------------- | ------- |
| MONGODB_URI | MongoDB connection string | -       |
| PORT        | Server port               | 3000    |

## Error Handling

The application uses a custom `ApiError` class for consistent error responses. Errors include:

- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error



