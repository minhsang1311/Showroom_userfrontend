import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './css/slider.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Header from './Header';
const SlideItem = ({ imageUrl, name, description }) => {
  return (
    <div className="item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <div className="name">{name}</div>
        <div className="des">{description}</div>
        <button className='btn'>See More</button>
      </div>
    </div>
  );
};
function Home() {
  const slideItems = [
    {
      imageUrl: 'https://play-lh.googleusercontent.com/lCw6FzyvtB_JNySP6b_vG3WIrJGJfarRx00hQiEjEK4ucXLTUmrxuDqAWrAetLY-TyE=w5120-h2880-rw',
      name: 'Toyota',
      description: "Let's go places",
    },
    {
      imageUrl: 'https://wallpapersmug.com/u/5f7f6e/luxurious-car-black.jpg',
      name: 'Mercedes',
      description: 'The Best or Nothing',
    },
    {
      imageUrl: 'https://images.hdqwalls.com/wallpapers/bmw-m-nfs-4k-2q.jpg',
      name: 'BMW',
      description: 'The Ultimate Driving Machine',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1596704135285-689f255de50b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Volvo',
      description: 'Volvo, For Life',
    },
    {
      imageUrl: 'https://wallpapercave.com/wp/wp3105214.jpg',
      name: 'MazdA',
      description: 'Zoom-Zoom',
    },
    {
      imageUrl: 'https://wallpapercave.com/wp/wp2546490.jpg',
      name: 'KIA',
      description: 'Movement that Inspires',
    },
  ];

  const nextSlide = () => {
    const slide = document.querySelector('.slide');
    slide.appendChild(slide.firstElementChild);
  };

  const prevSlide = () => {
    const slide = document.querySelector('.slide');
    slide.prepend(slide.lastElementChild);
  };

  return (
    <div className="container-xxxl home">
      <Header/>
      <div className="slide">
        {slideItems.map((item, index) => (
          <SlideItem
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={prevSlide}>
          <AiFillCaretLeft />
        </button>
        <button className="next" onClick={nextSlide}>
        <AiFillCaretRight />
        </button>
      </div>
    </div>
  );
}

export default Home;