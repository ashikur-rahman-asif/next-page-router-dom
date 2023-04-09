import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    // const [books, setBooks] = useState([])
    // useEffect(() => {
    //     fetch('https://api.itbook.store/1.0/new')
    //         .then(res => res.json())
    //     .then(data=>console.log(data))
    // },[])
    const booksData=useLoaderData()
    return (
        <div>
            
        </div>
    );
};

export default Books;