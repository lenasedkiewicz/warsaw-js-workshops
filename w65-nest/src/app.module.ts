import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryBookInstances } from './persistance/in-memory-book-instances';
import { InMemoryBooks } from './persistance/in-memory-books';
import { InMemoryPatrons } from './persistance/in-memory-patrons';
import { AddingBook } from './use-cases/adding-book';
import { AddingBookInstance } from './use-cases/adding-book-instance';
import { CancelingHold } from './use-cases/canceling-hold';
import { PlacingOnHold } from './use-cases/placing-on-hold';

@Module({
  imports: [],
  controllers: [AppController, LibraryController],
  providers: [
    AppService,
    AddingBook,
    AddingBookInstance,
    CancelingHold,
    PlacingOnHold,
    InMemoryBooks,
    InMemoryBookInstances,
    InMemoryPatrons,
  ],
})
export class AppModule {}
