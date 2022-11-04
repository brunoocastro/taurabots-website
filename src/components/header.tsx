/* eslint-disable @next/next/no-img-element */
import { loginModalAtom } from "../atoms/loginModal";
import { useSetRecoilState } from "recoil";

export const Header = () => {
  const setLoginModal = useSetRecoilState(loginModalAtom);

  return (
    <div className="flex sticky top-0 right-0 left-0 justify-between text-white items-center h-12 mx-4 my-2">
      <div className="flex items-center justify-between">
        <button>Botão 1</button>
      </div>

      <div className="w-48 h-12">
        <img alt="Logo Taura Bots" src="/logo.svg" />
      </div>

      <button type="button" onClick={() => setLoginModal((current) => !current)} className='bg-ui-green-low rounded h-10 flex items-center flex-shrink-0 p-3 font-bold text-ui-blue'>Login</button>
    </div>
  );
};
