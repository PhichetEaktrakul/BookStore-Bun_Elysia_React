// Import necessary modules from Elysia
import { Elysia, t } from 'elysia'

// Define the Book type
type Book = {
    id: number;
    title: string;
    content: string;
    price: number;
};

// Store class to manage the book collection
class Store {
    private currentId = 4;  // Initial ID for new books
    constructor(
        public bookList: Book[] = [
            { title: "Refactoring", price: 100, content: "Refactoring is the process of restructuring code, while not changing its original functionality.", id: 1 },
            { title: "How to Clean Code", price: 200, content: "A clear and concise guide to basic Agile values and principles. Perfect for those new to Agile methods.", id: 2 },
            { title: "C programming", price: 300, content: "C is a general-purpose programming language.", id: 3 },
        ]
    ) { }

    // Retrieve all books
    getAll() {
        return this.bookList;
    }

    // Retrieve a book by ID or throw an error if not found
    getByID(id: number, error: any) {
        const numericId = typeof id === "string" ? parseInt(id, 10) : id;
        return this.bookList.find(book => book.id === numericId) ?? error(404, 'not found 😥');
    }

    // Add a new book to the store
    add(body: unknown) {
        const newBook = body as Book;
        if (!newBook.title || typeof newBook.price !== 'number' || !newBook.content) {
            throw { status: 400, message: 'Invalid book data' };
        }
        newBook.id = this.currentId++;
        this.bookList.push(newBook);
        return { message: 'Book added successfully!' };
    }

    // Remove a book by ID or throw an error if not found
    remove(id: number) {
        const bookIndex = this.bookList.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.bookList.splice(bookIndex, 1);
            return { message: 'Book removed successfully!' };
        }
        throw { status: 404, message: "Book not found 😥" };
    }

    // Update an existing book by ID or throw an error if not found
    update(id: number, body: unknown) {
        const updatedData = body as Partial<Book>;
        const bookIndex = this.bookList.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.bookList[bookIndex] = { ...this.bookList[bookIndex], ...updatedData };
            return { message: 'Book updated successfully!' };
        }
        throw { status: 404, message: 'Book not found 😥' };
    }
}

// Validator for the route parameters
const idParamValidator = { params: t.Object({ id: t.Number() }) };

// Define and export Elysia store API
export const store = new Elysia({ prefix: '/books' })
    .decorate('store', new Store())
    .get('/', ({ store }) => store.getAll())  // Retrieve all books
    .get('/:id', ({ store, params: { id }, error }) => store.getByID(id, error), idParamValidator)  // Get book by ID
    .post('/', ({ store, body }) => store.add(body))  // Add a new book
    .delete('/:id', ({ store, params: { id } }) => store.remove(id), idParamValidator)  // Remove a book by ID
    .put('/:id', ({ store, params: { id }, body }) => store.update(id, body), idParamValidator);  // Update a book by ID