export class BookInstance {
  constructor(private readonly id: string, private readonly isbn: string) {}

  static findById(books: BookInstance[], bookId: string): BookInstance | null {
    return books.find(({ id }) => id === bookId) ?? null;
  }
}
