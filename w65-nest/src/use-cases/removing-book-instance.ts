import { Injectable } from '@nestjs/common';
import { InMemoryBookInstances } from 'src/persistance/in-memory-book-instances';

export interface RemoveBookInstance {
  bookId: string;
}

@Injectable()
export class RemovingBookInstance {
  constructor(private readonly bookInstances: InMemoryBookInstances) {}

  async execute({ bookId }: RemoveBookInstance): Promise<void> {
    this.bookInstances.remove(bookId);
  }
}
