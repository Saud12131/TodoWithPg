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
        //console.log(response.data.Todos);
        settodos(response.data.Todos);
        //console.log(todos);

      } catch (err) {
        console.log(err);
        settodos([]);
      }
    }
    fetchDetails();
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <h2 className="text-white font-bold">All Todos</h2>
    {
      todos.length > 0 ? (
        <HoverEffect items={todos} />
      ):(

        <p className="text-white font-bold">no todos avilable</p>
      )
    }
        
    </div>
  );
}
export default App;