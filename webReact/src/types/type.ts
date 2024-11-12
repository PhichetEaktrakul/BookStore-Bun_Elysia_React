export interface Book {
    id: number;
    title: string;
    price: number;
    content: string;
}

export interface BooklistProps {
    bookData: Book[] | null;
    deleteBook: (id: number) => void;
}

export interface BookaddProps {
    select: string;
    setSelect: (value: string) => void;
    setTitle: (title: string) => void;
    setPrice: (price: number) => void;
    setContent: (content: string) => void;
    setId: (price: number) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

export interface UpdateBookData {
    title?: string;
    price?: number;
    content?: string;
}