import React from 'react';
import Header from '../header/header';
import TopImg from '../top-img/top-img';
import Article from '../article/article';
import Footer from '../footer/footer';
import './app.css';


function App() {
  return (
    <div className='wrapper'>
    <Header />
    <TopImg />
    <Article />
    <Footer />
    </div>
  );
}


export default App;
