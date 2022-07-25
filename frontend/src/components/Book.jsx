import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/bookSlice';

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div className='book'>
      <div>{new Date(book.createdAt).toLocaleString('en-US')}</div>
      <div className='book-wrapper'>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>{book.genre}</p>
        <p>{book.publisher}</p>
        <p>{book.releaseDate}</p>

        <img src={ book.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' 
        } 
        width="200px"
        alt="Book Cover" 
        />
        
        <button className='close' onClick={() => dispatch(deleteBook(book._id))}>
            <RiDeleteBin5Line width='10px' />
            Delete
          </button>
      </div>
    </div>
  )
};

export default Book;