'use client';

import { useState } from 'react';
import BookHover from './BookHover';

const BookShelf = ({ books = [] }) => {
    const [isHovering, setIsHovering] = useState(false);

    // Take only the first 3 books
    const displayBooks = books.slice(0, 3);

    if (!books || books.length === 0) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">No books available</p>
            </div>
        );
    }

    return (
        <div
            className="flex justify-center items-center min-h-screen"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`flex gap-4 transition-all duration-500 transform ${isHovering ? 'scale-110' : 'scale-100'
                }`}>
                {displayBooks.map((book, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-500 ${isHovering ? 'translate-x-0' : `-translate-x-${(index + 1) * 4}`
                            }`}
                    >
                        <BookHover
                            title={book.title}
                            author={book.author}
                            coverImage={book.coverImage}
                            description={book.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookShelf; 