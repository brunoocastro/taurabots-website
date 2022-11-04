import "../styles/globals.css";
import { useLayoutModals } from "../hooks/layoutModals";
import { Header } from "../components/header";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </RecoilRoot>
  );
}

function AppProvider({ children }) {
  const { LayoutModals } = useLayoutModals();
  return (
    <div className="contents relative">
      {LayoutModals}
      <Header />
      {children}
    </div>
  );
}

export default MyApp;
