import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    // description: string;
    // link: string;
    id: number,
  }[];
  className?: string;

}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          // href={item?.link}
          // key={item?.link}
          key={item.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription id={item.id} ></CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mb-5", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  id,
  //status,
}: {
  id: number,
  //status: boolean,
}) => {
  //let [status, setstatus] = useState<boolean>(Boolean);
  const TogelButton = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/routes/updatetodo/${id}`);
      console.log(response.data);
     // setstatus(response.data.updatetodo.status)
    } catch (err) {
      console.log(err);

    }
  }
  return (
    <> <button
      className="bg-green-500 text-white font-bold py-1 mt-4 px-4 rounded hover:bg-green-600"
      onClick={TogelButton}
    >
      {status ? <p>Completed</p> : <p>Incomplete</p>}
    </button>
    </>

  );
};
