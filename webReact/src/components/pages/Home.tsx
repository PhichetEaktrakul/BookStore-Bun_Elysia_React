import React from "react";
import { getBook_data, delBook_data, addBook_data, updateBook_data } from "../../services/http";
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Book, UpdateBookData } from "../../types/type";
import Booklist from "../common/Booklist";
import Bookadd from "../common/Bookadd";

export default function Home() {
    const [bookData, setBookData] = useState<Book[] | null>(null);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [id, setId] = useState<number>(0);
    const [select, setSelect] = useState<string>("option1");

    useEffect(() => {
        fetchBook()
    }, []);

    const fetchBook = () => {
        getBook_data()
            .then((response: Book[]) => {
                setBookData(response)
            })
            .catch((error: unknown) => {
                toast.error('log:' + error);
            });
    };
    const deleteBook = (id: number) => {
        if (bookData === null) return;
        const updatedBooks = bookData.filter((book) => book.id !== id);
        setBookData(updatedBooks);
        delBook_data(id)
            .then(() => {
                toast.success("Delete Successful!");
            })
            .catch(() => {
                toast.error("Delete Failed!");
            });
    };
    const addBook = () => {
        const data = { "title": title, "price": price, "content": content }; // Use a plain object instead of JSON string
        addBook_data(data)
            .then(() => {
                toast.success("Added Successful!");
                fetchBook();
            })
            .catch(() => {
                toast.error("Error! something went wrong..");
            });
    };
    const updateBook = (id: number) => {
        const data: UpdateBookData = {};
        if (title) {
            data.title = title;
        }
        if (price !== 0) {
            data.price = price;
        }
        if (content) {
            data.content = content;
        }
        updateBook_data(id, data)
            .then(() => {
                toast.success("Updated Successful!");
                fetchBook();
            })
            .catch(() => {
                toast.error("Error! something went wrong..");
            });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (select === "option1") {
            addBook()
        } else {
            updateBook(id)
        }
    };

    return (
        <>

            <Booklist
                bookData={bookData}
                deleteBook={deleteBook}
            />

            <Bookadd
                select={select}
                setSelect={setSelect}
                handleSubmit={handleSubmit}
                setId={setId}
                setTitle={setTitle}
                setPrice={setPrice}
                setContent={setContent}
            />

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Slide
            />

        </>
    );
}