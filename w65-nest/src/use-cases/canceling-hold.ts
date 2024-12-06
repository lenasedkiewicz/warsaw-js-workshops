import { Injectable } from '@nestjs/common';
import { InMemoryPatrons } from '../persistance/in-memory-patrons';

export interface CancelHold {
  patronId: string;
  bookId: string;
}

@Injectable()
export class CancelingHold {
  constructor(private readonly patrons: InMemoryPatrons) {}

  async execute(command: CancelHold): Promise<void> {
    const patron = await this.patrons.findOrFail(command.patronId);
    patron.cancelHold(command.bookId);
    await this.patrons.save(patron);
  }
}
