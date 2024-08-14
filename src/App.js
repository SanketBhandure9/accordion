import AccordionItem from "./components/AccordionItem";
import data from "./utils/data";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion-item-wrapper">
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          setIsOpen={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default App;
