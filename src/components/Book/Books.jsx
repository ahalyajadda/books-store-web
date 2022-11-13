import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import Book from "./Book";
import "./book.css";


const URL="https://books-store-website.herokuapp.com/books";

const fetchhandler=async()=>{
    return  await axios.get(URL).then((res)=>res.data);
};
const Books=()=>{
    const [books,setbooks]=useState();
    useEffect(()=>{
      fetchhandler().then((data)=>setbooks(data.books));
    },[]);
   return <div>

        <ul>
          {books && books.map((book,i)=>(
            <li className='book' key={i} >
                <Book  book={book}/>
            </li>
          ))}
        </ul>
   </div>
}
export default Books;