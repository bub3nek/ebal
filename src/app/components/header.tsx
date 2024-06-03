import Image from 'next/image';
import greenDot from '../../../public/green-dot.svg';
import GetStartedFn from './getstarted';
import ViewDemoFn from './view';
import smile1 from '../../../public/smile-1.svg';
import smile2 from '../../../public/smile-2.svg';
import smile3 from '../../../public/smile-3.svg';

const HeaderFn = () => {
  return (
    <main className="flex justify-center items-center mx-auto ">
      <div>
        <div className="py-32 text-9xl font-bold mx-auto text-center">
          <h2>Own your audience.</h2>
          <h2 className="bg-gradient-to-r from-newRed to-newPeach bg-clip-text text-transparent">
            So you don't lose them
          </h2>
        </div>
        <div className="mb-48">
          <h4 className="text-5xl font-medium mb-12 w-[760px] h-[120px] mx-auto text-center">
            Turn your audience into email and text message subscribers.
          </h4>
          <div className="flex justify-between items-center font-medium w-[760px] mx-auto mb-6">
            <GetStartedFn style="bg-blue-500 font-semibold text-white rounded py-6 px-20" />
            <ViewDemoFn style="text-newGray py-6 px-20 rounded border border-newGray" />
          </div>
          <div className="flex justify-center items-center">
            <Image src={greenDot} width={28} height={28} alt="Green Dot" />
            <p className="text-newGray ml-2 text-2xl">
              <span className="font-bold text-white mx-2">1000+</span>
              creators have already started
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-7xl mb-16 text-center">
            Why Creators Love Marico
          </h3>
          <div className="flex justify-center items-start ">
            <div className="text-center w-[440px]">
              <div className="flex justify-center items-center">
                <Image
                  src={smile1}
                  width={28}
                  height={28}
                  alt="Green Dot"
                  className="mr-2"
                />
                <h4 className="text-4xl mb-2.5">Reduced Anxiety</h4>
              </div>
              <p className="text-2xl text-newGray">
                Never worry about losing your audience.
              </p>
            </div>
            <div className="text-center w-[440px]">
              <div className="flex justify-center items-center">
                <Image
                  src={smile2}
                  width={28}
                  height={28}
                  alt="Green Dot"
                  className="mr-2"
                />
                <h4 className="text-4xl mb-2.5">Lower Workload</h4>
              </div>
              <p className="text-2xl text-newGray">
                Just share one link. We'll handle the rest.
              </p>
            </div>
            <div className="text-center w-[440px]">
              <div className="flex justify-center items-center">
                <Image
                  src={smile3}
                  width={28}
                  height={28}
                  alt="Green Dot"
                  className="mr-2"
                />
                <h4 className="text-4xl mb-2.5">More Time</h4>
              </div>
              <p className="text-2xl text-newGray">
                Spend less time on marketing tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderFn;
