import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { loginModalAtom } from "../atoms/loginModal";

export const useLayoutModals = () => {
  const [loginModalOpen, setLoginModalOpen] = useRecoilState(loginModalAtom);

  const LoginModal = useMemo(
    () =>
      loginModalOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white z-50">
            <div className="flex justify-between items-center h-12 bg-fuchsia-300">
              <div className="flex items-center justify-between">
                Faça login
                <button>Botão 1</button>
                <button onClick={() => setLoginModalOpen(false)}>
                  Botão 2
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null,
    [loginModalOpen, setLoginModalOpen]
  );

  const LayoutModals = useMemo(() => <>{LoginModal}</>, [LoginModal]);

  return { LayoutModals };
};
