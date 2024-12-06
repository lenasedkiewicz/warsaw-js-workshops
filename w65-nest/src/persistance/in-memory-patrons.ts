import { Injectable } from '@nestjs/common';
import { Patron } from '../model/patron';

@Injectable()
export class InMemoryPatrons {
  private readonly patrons: Patron[] = [];

  async save(patron: Patron): Promise<Patron> {
    const index = Patron.findIndexOfPatron(this.patrons, patron);
    if (index < 0) {
      this.patrons.push(patron);
    } else {
      this.patrons[index] = patron;
    }
    return patron;
  }

  async findOrCreate(patronId: string): Promise<Patron> {
    const foundPatron = Patron.findById(this.patrons, patronId);
    if (!foundPatron) {
      const patron = new Patron(patronId, []);
      this.patrons.push(patron);
      return patron;
    }
    return foundPatron;
  }

  async findOrFail(patronId: string): Promise<Patron> {
    const foundPatron = Patron.findById(this.patrons, patronId);
    if (!foundPatron) {
      throw new Error(`Can't find the patron`);
    }
    return foundPatron;
  }
}
