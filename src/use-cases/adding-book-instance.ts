import { Injectable } from '@nestjs/common';
import { BookInstance } from 'src/model/book-instance';
import { InMemoryBookInstances } from 'src/persistance/in-memory-book-instances';
import { InMemoryBooks } from 'src/persistance/in-memory-books';

export interface AddBookInstance {
  isbn: string;
}

@Injectable()
export class AddingBookInstance {
  constructor(
    private readonly books: InMemoryBooks,
    private readonly bookInstances: InMemoryBookInstances,
  ) {}

  async execute({ isbn }: AddBookInstance): Promise<BookInstance> {
    const book = await this.books.findOrFail(isbn);
    const newBookInstance = book.generateNewInstance();
    this.bookInstances.add(newBookInstance);
    return newBookInstance;
  }
}
