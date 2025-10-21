import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Form from "./components/portfolio/Form";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/form" element={<Form />} />
        
        </Routes>
      </BrowserRouter>
  )
}

export default App