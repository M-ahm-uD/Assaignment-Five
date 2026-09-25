import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import YourStack from "./YourStack";
import Footer from "./Footer";

export default function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-base-100 text-base-content"
    >
      <Navbar stackCount={0} />

      <main>
        <Hero />
        <Technologies />
        <YourStack />
      </main>

      <Footer />
    </div>
  );
}