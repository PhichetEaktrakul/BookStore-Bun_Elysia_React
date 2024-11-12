import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

async function getData(url: string) {
    const { data } = await axios.get(url);
    return data;
}

async function postData(url: string, body: object) {
    const { data } = await axios.post(url, body); // axios will stringify the body automatically
    return data;
}

async function delData(url: string) {
    const { data } = await axios.delete(url);
    return data;
}

async function upData(url: string, body: object) {
    const { data } = await axios.put(url, body);
    return data;
}

// ========================================================================================

export async function getBook_data() {
    return await getData('/books/');
}

export async function getBookId_data(id: string) {
    return await getData(`/books/${id}`);
}

export async function addBook_data(body: object) {
    return await postData('/books/', body);
}

export async function delBook_data(id: number) {
    return await delData(`/books/${id}`);
}

export async function updateBook_data(id: number, body: object) {
    return await upData(`/books/${id}`, body);
}