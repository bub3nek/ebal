import Marico from '../../../public/Marico.svg';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from './dropdown';
import Hello from './hello';

export default function NavBarFn() {
  const dropdownItems = [
    { text: 'Use Case 1', href: '/use-case-1' },
    { text: 'Use Case 2', href: '/use-case-2' },
    { text: 'Use Case 3', href: '/use-case-3' },
  ];
  const helloItems = [{ text: 'ebal' }, { text: 'ebal3' }, { text: 'ebal3' }];
  return (
    <main>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src={Marico} alt="Marico" width={196} height={56}></Image>
        </Link>
        <ul className="flex gap-5">
          {/* <li className="hover:text-blue-500">
            <Link href="/">Use Cases</Link>
          </li> */}
          <Hello myText="Ebal Dremal" items={helloItems} />
          <DropDown buttonText="Use Caces" items={dropdownItems} />
          <li className="hover:text-blue-500">
            <Link href="/">About</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/">Pricing</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/">Blog</Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <Link className="hover:text-blue-500" href="/">
            Login
          </Link>
          <Link
            className="py-3 px-5 bg-blue-500 rounded hover:scale-110"
            href="/"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </main>
  );
}
