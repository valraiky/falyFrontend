import { DataProvider } from "./context/DataContext";
import Accueil from "./pages/User/Accueil/Accuieil";

export default function App() {
    return (
      <DataProvider>
        <Accueil />
      </DataProvider>
    );
}