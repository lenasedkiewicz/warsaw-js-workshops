import { Injectable } from '@nestjs/common';
import { Book } from 'src/model/book';
import { InMemoryBooks } from 'src/persistance/in-memory-books';

export interface AddBook {
  author: string;
  isbn: string;
  title: string;
}

@Injectable()
export class AddingBook {
  constructor(private readonly books: InMemoryBooks) {}

  async execute({ author, isbn, title }: AddBook): Promise<void> {
    this.books.add(new Book(isbn, title, author));
  }
}
