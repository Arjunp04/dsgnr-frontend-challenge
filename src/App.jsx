import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import ContactForm from "./sections/ContactForm";
import Office from "./sections/Office";
import Stats from "./sections/Stats";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <Office />
        <Stats />
      </main>
      <Footer />
    </>
  );
};

export default App;
