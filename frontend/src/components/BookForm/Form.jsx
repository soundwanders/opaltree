import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createBook } from '../../features/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [bookData, setBook] = useState({
    title: '',
    author: '', 
    genre: '', 
    publisher: '', 
    releaseDate: '', 
    selectedFile: '',
  });

  const clear = () => {
    setBook({
      title: '',
      author: '', 
      genre: '', 
      publisher: '', 
      releaseDate: '', 
      selectedFile: '',
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(createBook({ bookData }))
    setBook('')
  };

  return (
    <section className='form'>
      <form
        autoComplete='off'
        noValidate
        className='book-form'
        onSubmit={handleSubmit}
      >
        <h6>
          {'Plant an Opal Seed 🌱'}
        </h6>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='book-input'
            name='title'
            label='Title'
            value={bookData.title}
            onChange={e => setBook({ ...bookData, title: e.target.value })}
            // set the state using an object
            // use of event callback function and '...bookData' to spread the data properties
            // allows you to target objects' specific properties but rest of the props still persist
          />

          <label htmlFor='author'>Author</label>
          <input
            className='book-input'
            name='author'
            label='Author'
            value={bookData.author}
            onChange={e => setBook({ ...bookData, author: e.target.value })}
          />

          <label htmlFor='genre'>Genre</label>
          <input
            className='book-input'
            name='genre'
            label='Genre'
            value={bookData.genre}
            onChange={e => setBook({ ...bookData, genre: e.target.value })}
          />

          <label htmlFor='publisher'>Publisher</label>
          <input
            className='book-input'
            name='publisher'
            label='Publisher'
            value={bookData.publisher}
            onChange={e => setBook({ ...bookData, publisher: e.target.value })}
          />

          <label htmlFor='releaseDate'>Released</label>
          <input
            className='book-input'
            name='releaseDate'
            label='ReleaseDate'
            value={bookData.releaseDate}
            onChange={e => setBook({ ...bookData, releaseDate: e.target.value })}
          />

          <div className='fileInput'>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => setBook({ ...bookData, selectedFile: base64 })}
            />
          </div>
        </div>
        
        <div className='form-group'>
          <button className='btn btn-block' 
            type='submit'
            disabled=
            {
              bookData.title === '' ||
              bookData.author === '' ||
              bookData.genre === ''
            }
          >
            Submit
          </button>

          <button className='btn btn-block' 
            type='submit'
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;