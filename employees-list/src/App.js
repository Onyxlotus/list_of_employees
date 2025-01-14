import MainPages from "./pages/MainPage";
import WorkerPage from "./pages/WorkerPage";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";




function App() {


  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/worker/:id" element={<WorkerPage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
