export class Patron {
  constructor(private readonly id: string, private booksOnHold: string[]) {}

  static findById(patrons: Patron[], patronId: string): Patron | undefined {
    return patrons.find(({ id }) => id === patronId);
  }

  static findIndexOfPatron(patrons: Patron[], patron: Patron): number {
    return patrons.findIndex((p) => p.is(patron));
  }

  cancelHold(bookId: string): void {
    const index = this.booksOnHold.indexOf(bookId);
    if (index < 0) {
      throw new Error('This book was not on hold');
    }

    this.booksOnHold.splice(index, 1);
  }

  is(patron: Patron): boolean {
    return patron.id === this.id;
  }

  placeOnHold(bookId: string): void {
    if (this.booksOnHold.find((id) => id === bookId)) {
      throw new Error('You already have this book');
    }

    if (this.booksOnHold.length > 5) {
      throw new Error('You can have at most 5 books on hold');
    }

    this.booksOnHold.push(bookId);
  }
}
