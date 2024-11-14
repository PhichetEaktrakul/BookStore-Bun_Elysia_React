import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookId_data } from '../../services/http';
import { toast } from 'react-toastify';
import { Book } from '../../types/type';

export default function Product() {
    const { bookId } = useParams<{ bookId: string }>();
    const [bookdata, setBookdata] = useState<Book | null>()

    useEffect(() => {
        if (bookId) {  // Check if bookId is defined
            fetchdata();
        }
    }, [])

    const fetchdata = () => {
        getBookId_data(bookId!)
            .then((response: Book) => {
                setBookdata(response)
            })
            .catch((error: unknown) => {
                toast.error('log:' + error);
            });
    };

    return (
        <>
            <h1>Book Detail</h1>
            <div className='store_box'>
                <p>📕 :&ensp;{bookdata && bookdata.title}</p>
                <p>{bookdata && bookdata.content}</p>
                <div className='mt-5'>
                    <Link to="/" type='button' className="btn btn-outline-warning">Return</Link>
                </div>
            </div>
        </>
    );
}