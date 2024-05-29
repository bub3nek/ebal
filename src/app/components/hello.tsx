'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hello = ({ myText, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul>
      <button onClick={toggleDropDown}>{myText}</button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default Hello;
