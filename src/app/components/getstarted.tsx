'use client';

import Link from 'next/link';

const GetStartedFn = ({ href, style }) => {
  return (
    <Link href={'/'} className={style}>
      Get Started Now
    </Link>
  );
};

export default GetStartedFn;

//bg-blue-500 text-white rounded py-6 px-20
