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
        const response = await axios.get<TD[]>("http://localhost:5000/api/routes/alltodos");
        console.log(response.data);
        settodos(response.data);
      } catch (err) {
        console.log(err);
        settodos([]);
      }
    }
    fetchDetails();
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-8">
    <h2>All Todos</h2>
    {todos.map((todo) => (
      // Rendering each todo
      <div key={todo.id}>
        <h2>{todo.title}</h2>
        <HoverEffect items={todo} /> {/* Pass todo as the 'items' prop */}
      </div>
    ))}
  </div>
  );
}
export default App;