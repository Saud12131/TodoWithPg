import axios from "axios";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { useEffect, useState } from "react";

interface TD {
  id: number;
  title: string;
  status: boolean;
}

export function App() {
  let [todos, settodos] = useState<TD[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get<{ Todos: TD[] }>("http://localhost:5000/api/routes/alltodos");
        settodos(response.data.Todos);
      } catch (err) {
        console.log(err);
        settodos([]);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="max-w-5xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-extrabold text-center mb-6">All Todos</h2>
        {todos.length > 0 ? (
          <HoverEffect items={todos} />
        ) : (
          <p className="text-center text-lg font-bold mt-10">No todos available</p>
        )}
      </div>
    </div>
  );
}

export default App;
