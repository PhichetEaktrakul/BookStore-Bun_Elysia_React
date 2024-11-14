import { BooklistProps } from "../../types/type";
import { FormatNum } from "./Common";
import { Link } from "react-router-dom";

export default function Booklist({ bookData, deleteBook }: BooklistProps) {
    return (
        <>
            <h1>Book Store</h1>
            <div className='store_box'>
                <h4 className='headline'>Booklist</h4>
                <ul>
                    {bookData ? bookData.map((book) =>
                        <li className='mt-2' key={book.id}>
                            <Link to={`/${book.id}`}>{book.id}. {book.title}</Link>
                            <span className='badge rounded-pill text-bg-warning mx-2'>$<FormatNum price={book.price} /></span>
                            <button type='button' className='badge rounded-pill text-bg-danger border-0'
                                onClick={() => deleteBook(book.id)}>
                                Remove
                            </button>
                        </li>
                    ) : <li>Loading</li>}
                </ul>
            </div>
        </>
    );
}