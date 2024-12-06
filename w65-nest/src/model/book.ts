import { BookInstance } from './book-instance';

export class Book {
  constructor(
    private readonly isbn: string,
    private title: string,
    private author: string,
  ) {}

  static find(books: Book[], isbn: string): Book | null {
    return books.find(({ isbn: bookIsbn }) => bookIsbn === isbn) ?? null;
  }

  generateNewInstance(): BookInstance {
    return new BookInstance(this.generateRandomId(), this.isbn);
  }

  private generateRandomId(): string {
    return (Math.random() + 1).toString(36).substring(7);
  }
}
