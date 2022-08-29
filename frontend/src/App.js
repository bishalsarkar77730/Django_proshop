import React from "react";
import { Container } from "react-bootstrap";

// Import Components starts
import Header from "./components/Header";
import Footer from "./components/Footer";
// Import Components End

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;