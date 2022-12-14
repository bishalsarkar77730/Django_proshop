import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Import Components starts
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
// Import Components End

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/product/:id" element={<ProductScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
