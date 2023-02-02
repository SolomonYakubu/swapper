import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function FaqComponent(props: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col p-3 border-b text-gray-light  cursor-pointer"
    >
      <div className="flex flex-row items-center ">
        <p
          className={` text-transparent bg-clip-text bg-gradient-to-r from-primary to-grad font-bold w-11/12 md:w-full  ${
            expanded ? "text-gray-dark font-black" : "font-normal"
          }`}
        >
          {props.title}
        </p>
        {(expanded && (
          <AiOutlineMinus size={30} className="text-secondary flex-auto m-2" />
        )) || (
          <AiOutlinePlus size={30} className="text-secondary flex-auto m-2" />
        )}
      </div>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? " max-h-60" : "max-h-0"
        }`}
      >
        <p className=" font-light text-white">{props.description}</p>
      </div>
    </div>
  );
}
