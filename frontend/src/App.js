import { Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Employees from "./views/Employees";
import AllEmployeesProvider from './components/utils/AllEmployeesProvider';

function App() {
  return (
    <AllEmployeesProvider>
      <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
      </Routes>
    </AllEmployeesProvider>
  );
}

export default App;
