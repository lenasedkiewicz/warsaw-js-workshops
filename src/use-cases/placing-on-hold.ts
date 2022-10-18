import { Injectable } from '@nestjs/common';
import { InMemoryBookInstances } from '../persistance/in-memory-book-instances';
import { InMemoryPatrons } from '../persistance/in-memory-patrons';

export interface PlaceOnHold {
  patronId: string;
  bookId: string;
}

@Injectable()
export class PlacingOnHold {
  constructor(
    private readonly findAvailableBook: InMemoryBookInstances,
    private readonly patrons: InMemoryPatrons,
  ) {}

  async execute(command: PlaceOnHold): Promise<void> {
    await this.findAvailableBook.findOrFail(command.bookId);
    const patron = await this.patrons.findOrCreate(command.patronId);
    patron.placeOnHold(command.bookId);
    await this.patrons.save(patron);
  }
}
