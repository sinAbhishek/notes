import React, { useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";
import BotDrawer from "./drawer";
import styles from "./styles.module.css";
import { CloseIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";

const DrawerNote = (prop) => {
  const [color, setcolor] = useState("#f1f5f9");
  const [text,settext]=useState("")
  const [title,settitle]=useState("")
  const changecolor = (value) => {
    setcolor(value);
    prop.color(value);
  };
  const submit = () => {
    const value={text,title}
    prop.submit(value);
    prop.onClose();
  };
  return (
    <div
      className={
        prop.isOpen
          ? "color bg-slate-400 rounded-md absolute  w-full bottom-0 right-0 transition ease-in-out duration-700"
          : styles.hide
      }
      style={{ backgroundColor: color, height: "90%" }}
    >
      <div
        onClick={prop.onClose}
        className=" rounded-full m-2 w-8 h-8 p-2 flex justify-center items-center"
      >
        <button>
          <CloseIcon w={"1.3rem"} h={"1.3rem"} />
        </button>
      </div>

      <h2 className=" text-lg font-semibold p-2">NOTE</h2>
      <div className="flex flex-col justify-center h-3/6">
      <input type="text" placeholder="Enter your title" className=" w-full py-2 px-2 rounded-md mb-2"   onChange={(e)=>settitle(e.target.value)} />
            <textarea
              className=" w-full p-4 h-2/3 rounded-md"
              name=""
              id="text"
              cols="30"
              rows="10"
              placeholder="Your note"
              onChange={(e)=>settext(e.target.value)}
            ></textarea>
      </div>
      <div className="flex justify-center m-4">
        <button
          className="p-2  border-black border bg-cyan-300 rounded-md w-12 mx-auto "
          onClick={submit}
        >
          <CheckIcon />
        </button>
      </div>

      <div className="flex justify-center">
        <BotDrawer color={changecolor} />
      </div>
    </div>
  );
};

export default DrawerNote;
