import { useState } from "react";
import Form from "./Form";
import Display from "./Display";

const App = () => {
  const [view, setView] = useState("form");

  return (
    <div className="p-4">
      <nav className="flex h-[40] space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setView("form")}
        >
          Form
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setView("display")}
        >
          Display
        </button>
      </nav>
      {view === "form" ? <Form /> : <Display />}
    </div>
  );
};

export default App;