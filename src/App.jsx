import AppLoyout from "./components/loyout/AppLoyout";
import { CryptoContextProvider } from "./context/crypto-context";

export default function App() {
    return (
        <CryptoContextProvider>
            <AppLoyout />
        </CryptoContextProvider>
    );
}