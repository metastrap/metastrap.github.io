import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from 'components/atoms/button/button';

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Under Construction</h1>
        <h2 className="text-2xl font-bold">This page is under construction.</h2>
        <Button href="https://github.com/metastrap" className="mt-4 py-3 px-6 flex" styleType="outline">
          <SiGithub color="white" />
          <span className="ml-3">Please Contribute!</span>
        </Button>
      </div>
    </div>
  );
}
