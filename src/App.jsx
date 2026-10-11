import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import ContactForm from "./sections/ContactForm";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactForm/>
      </main>
      <Footer />
    </>
  );
};

export default App;
