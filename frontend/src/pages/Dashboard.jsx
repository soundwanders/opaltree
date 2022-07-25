import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/BookForm/Form';
import Book from '../components/Book';
import Spinner from '../components/Spinner';
import { reset } from '../features/auth/authSlice';
import { getBooks } from '../features/books/bookSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getBooks());

    return () => {
      dispatch(reset());
    }
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Opal Tree Dashboard</p>
      </section>

      <Form currentId={currentId} setCurrentId={setCurrentId} />

      <section className='content'>
        {books.length > 0 ? (
          <div className='books'>
            {books?.map((book) => (
              <Book key={book._id} book={book} setCurrentId={setCurrentId} />
            ))}
          </div>
        ) : (
          <h3>You have not added any books to your library</h3>
        )}
      </section>
    </>
  )
};

export default Dashboard;
