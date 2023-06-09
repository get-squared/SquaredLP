import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import { Layout } from "./components";
import { Home, Contact, Product } from "./pages";

function Forworder() {
  const { id } = useParams();
  window.location.href = "https://getsquared.io/listing/" + id;
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/listing/:id"
            element={<Forworder />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
