import Link from 'next/link';
import Image from 'next/image';
import marico from '../../../public/Marico.svg';

const FooterFn = () => {
  return (
    <main className="flex items-center justify-between container mx-auto pb-24 pt-48">
      <div className="">
        <Link href={'/'}>
          <Image src={marico} width={196} height={52} />
        </Link>
        <p className="text-newGray">info@marico.co</p>
      </div>
      <div className="">
        <nav>
          <ul className="flex gap-4">
            <li className="text-newGray hover:text-blue-500">
              <Link href={'/'}>About</Link>
            </li>
            <li className="text-newGray hover:text-blue-500">
              <Link href={'/'}>Pricing</Link>
            </li>
            <li className="text-newGray hover:text-blue-500">
              <Link href={'/'}>Blog</Link>
            </li>
            <li className="text-newGray hover:text-blue-500">
              <Link href={'/'}>Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default FooterFn;
