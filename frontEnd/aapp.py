class Item:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def __str__(self):
        return f"[{self.title}] by {self.author} ({self.year})"

    def __repr__(self):
        return f"Item: ({self.title}) by {self.author} ({self.year})"

    def display_info(self):
        return f"Title: {self.title}\nAuthor: {self.author}\nYear: {self.year}"


class Book(Item):
    def __init__(self, title, author, year, genre, ISBN):
        super().__init__(title, author, year)
        self.genre = genre
        self.ISBN = ISBN

    def display_info(self):
        return (super().display_info() +
                f"\nGenre: {self.genre}\nISBN: {self.ISBN}")


class DVD(Item):
    def __init__(self, title, author, year, duration):
        super().__init__(title, author, year)
        self.duration = duration

    def display_info(self):
        return (super().display_info() +
                f"\nDuration: {self.duration} minutes")


# Example usage:
book = Book("1984", "George Orwell", 1949, "Dystopian", "9780451524935")
dvd = DVD("Inception", "Christopher Nolan", 2010, 148)

print(str(book))            # [1984] by George Orwell (1949)
print(repr(book))           # Item: (1984) by George Orwell (1949)
print(book.display_info())  # Detailed information about the book

print("\n" + str(dvd))      # [Inception] by Christopher Nolan (2010)
print(repr(dvd))            # Item: (Inception) by Christopher Nolan (2010)
print(dvd.display_info())   # Detailed information about the DVD
