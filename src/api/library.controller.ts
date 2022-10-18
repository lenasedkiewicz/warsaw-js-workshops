import { Controller, Get, Param } from '@nestjs/common';
import { BookInstance } from 'src/model/book-instance';
import { AddingBook } from 'src/use-cases/adding-book';
import { AddingBookInstance } from 'src/use-cases/adding-book-instance';
import { CancelingHold } from 'src/use-cases/canceling-hold';
import { PlacingOnHold } from 'src/use-cases/placing-on-hold';

@Controller()
export class LibraryController {
  constructor(
    private readonly addingBook: AddingBook,
    private readonly addingBookInstance: AddingBookInstance,
    private readonly cancelingHold: CancelingHold,
    private readonly placingOnHold: PlacingOnHold,
  ) {}

  @Get('add-book/:isbn/:title/:author')
  async addBook(
    @Param('isbn') isbn: string,
    @Param('author') author: string,
    @Param('title') title: string,
  ): Promise<string> {
    await this.addingBook.execute({ isbn, author, title });
    return `Book has been added`;
  }

  @Get('add-book-instance/:isbn')
  addBookInstance(@Param('isbn') isbn: string): Promise<BookInstance> {
    return this.addingBookInstance.execute({ isbn });
  }

  @Get('cancel-hold/:bookId')
  async cancelHold(@Param('bookId') bookId: string): Promise<string> {
    await this.cancelingHold.execute({ bookId, patronId: 'zyx' });
    return `Hold is canceled`;
  }

  @Get('place-on-hold/:bookId')
  async placeOnHold(@Param('bookId') bookId: string): Promise<string> {
    await this.placingOnHold.execute({ bookId, patronId: 'zyx' });
    return `You placed the book on hold`;
  }
}
