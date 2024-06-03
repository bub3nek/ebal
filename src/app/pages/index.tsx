import HeaderFn from '../components/header';
import GetFn from '../components/get';
import HelpFn from '../components/help';
import ExpertsFn from '../components/experts';

export default function HomeFn() {
  return (
    <main>
      <HeaderFn />
      <ExpertsFn />
      <HelpFn />
      <GetFn />
    </main>
  );
}
