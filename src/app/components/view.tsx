'use client';
import Link from 'next/link';

const ViewDemoFn = ({ href, style }) => {
  return (
    <Link href={'/'} className={style}>
      View A Demo
    </Link>
  );
};

export default ViewDemoFn;

//text-newGray py-6 px-20 rounded border border-newGray
