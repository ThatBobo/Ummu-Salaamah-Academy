import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/Index';

export default function App() {
  return (
    <BrowserRouter basename="/Ummu-Salaamah-Academy/">
      <Routes>
        <Route path="/Ummu-Salaamah-Academy/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
