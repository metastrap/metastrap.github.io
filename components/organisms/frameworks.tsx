import {
  SiReact, SiNuxtdotjs, SiAstro, SiNuxtdotjsHex,
  SiAstroHex,
  SiReactHex,
} from '@icons-pack/react-simple-icons';
import { Button } from 'components/atoms/button/button';

export default function Frameworks() {
  return (
    <div className="flex">
      <Button href="/react-project" className="mr-2 py-3 px-6 flex " styleType="outline">
        <SiReact color={SiReactHex} />
        <span className="ml-3">React Project</span>
      </Button>
      <Button href="/astro-project" className="mr-2 py-3 px-6 flex " styleType="outline">
        <SiAstro color={SiAstroHex} />
        <span className="ml-3">Astro Project</span>
      </Button>
      <Button href="/nuxt-project" className="mr-2 py-3 px-6 flex " styleType="outline">
        <SiNuxtdotjs color={SiNuxtdotjsHex} />
        <span className="ml-3">Nuxt.Js Project</span>
      </Button>
    </div>
  );
}
