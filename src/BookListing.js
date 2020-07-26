import React from "react";
import quoteMark from "./assets/quotation-marks.svg";

export default function BookListing({ book }) {
  return (
    <div className="relative mx-auto md:flex">
      <div className="mx-auto md:flex-inital">
        <img
          className="rounded-md shadow-lg hover:shadow-xl transition ease-in duration-200 m-8 w-64"
          src={book.book_image}
          alt={book.title}
        />
      </div>
      <div className="mx-auto mt-8 md:flex-1">
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <h2 className="text-3xl text-gray-500">{book.author}</h2>
        <div className="relative">
          <div>
            <p
              className="mt-8 text-3xl font-serif relative"
              style={{ zIndex: 10 }}
            >
              {book.description}
            </p>
            <a
              className="mb-4 inline-block px-8 py-4 text-xl leading-none border rounded text-gray-500 border-gray-500 mt-8 transition duration-500 hover:bg-gray-500 hover:text-white"
              href={book.amazon_product_url}
            >
              Buy on Amazon
            </a>
          </div>
          <img
            src={quoteMark}
            className="absolute left-0 top-0"
            width="13%"
            alt="quotation marks"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
}
