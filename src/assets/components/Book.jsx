import React from 'react';

const Book = ({book}) => {
    return (
        <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-2xl">
            <img
              src={book.image}
              alt="cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />
            <div className="bg-black bg-opacity-70 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 px-6 py-4 flex flex-col">
              <p>{book.title}</p>
              <br />
              <p>{book.subtitle.substring(0,45)}....</p>
              <br />
              <p className="mt-auto">{book.price}</p>
            </div>
          </div>
    );
};

export default Book;