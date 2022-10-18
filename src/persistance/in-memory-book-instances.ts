import { BookInstance } from '../model/book-instance';

export class InMemoryBookInstances {
  private readonly books: BookInstance[] = [];

  async add(book: BookInstance): Promise<BookInstance> {
    this.books.push(book);
    return book;
  }

  async findOrFail(bookId: string): Promise<BookInstance> {
    const foundBook = BookInstance.findById(this.books, bookId);
    if (!foundBook) {
      throw new Error('Could not find the book');
    }
    return foundBook;
  }
}
