import { Injectable } from '@nestjs/common';
import { Book } from 'src/model/book';

@Injectable()
export class InMemoryBooks {
  private readonly books: Book[] = [];

  async add(book: Book): Promise<void> {
    this.books.push(book);
  }

  async findOrFail(isbn: string): Promise<Book> {
    const book = Book.find(this.books, isbn);
    if (!book) {
      throw new Error('Cannot find the book');
    }
    return book;
  }
}
