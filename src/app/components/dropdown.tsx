'use client';

import { useState } from 'react';
import Link from 'next/link';

const DropDown = ({ buttonText, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <button onClick={toggleDropDown} className="">
        {buttonText}
      </button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default DropDown;
