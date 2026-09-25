import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import YourStack from "./YourStack";
import Footer from "./Footer";

import type { Technology } from "./types";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    setStack((currentStack) => {
      const alreadyAdded = currentStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  const removeFromStack = (id: number) => {
    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );
  };

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar stackCount={stack.length} />

      <main>
        <Hero />

        <Technologies
          stack={stack}
          onAddToStack={addToStack}
        />

        <YourStack
          stack={stack}
          onRemove={removeFromStack}
        />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;