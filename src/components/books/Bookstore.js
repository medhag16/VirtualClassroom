import React, { useState } from 'react';
import './Bookstore.css';
import {InputGroup,Input,FormGroup,Label,Spinner} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard';

function Bookstore() {
  // States
  const [maxResults, setMaxResults] = useState(30);
  const startIndex =1;
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);
    if(!query) {toast(`Please input a book's name`); setLoading(false);}
    else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `Please enter a valid book name`
            );
            setQuery('');
            setLoading(false);
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
        });
    }
  };

  // Main Show Case
  const mainHeader = () => {
    return (
      <div  className='main-image d-flex justify-content-center align-items-center flex-column'>
        
        <div className='filter'></div>
        <h1 style={{ marginTop:"150px",color:"#fff",fontFamily:"Poppins",size:"40px",marginBottom:"30px"}}>
          WELCOME TO VIRTUAL LIBRARY !!
        </h1>
        
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='md' style={{size:"20px"}}>
            <Input 
              placeholder ='Search a book...'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button style={{width:"20%"}} className="primary" onClick={handleSubmit}> Search Book </button>
          </InputGroup>
          

        </div>
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      );
    }
  };
  return (
    <div className='w-100 h-100' style={{padding:"20px"}}>
      {mainHeader()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default Bookstore;