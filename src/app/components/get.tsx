import Image from 'next/image';
import GetStartedFn from './getstarted';
import greenDot from '../../../public/green-dot.svg';
import logo from '../../../public/logo.svg';

const GetFn = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center pt-48">
        <Image src={logo} width={165} height={155} className="mb-5" />
        <h3 className="font-bold text-9xl">Get Started Now</h3>
        <h4 className="text-5xl mb-4">
          Setup is easy and takes under 5 minutes.
        </h4>
        <GetStartedFn style="bg-blue-500 font-semibold text-white rounded py-6 px-28 mb-6" />
        <div className="flex justify-center items-center">
          <Image src={greenDot} width={28} height={28} alt="Green Dot" />
          <p className="text-newGray ml-2 text-2xl">
            <span className="font-bold text-white mx-2">1000+</span>
            creators have already started
          </p>
        </div>
      </div>
    </main>
  );
};

export default GetFn;
