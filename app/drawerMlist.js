import React from "react";
import { useState,useEffect } from "react";
import { CheckIcon, CloseIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import BotDrawer from "./drawer";
import Todomodal from "./todomodal";
import styles from "./styles.module.css";
function DrawerMlist(prop) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [color, setcolor] = useState("#f1f5f9");
  const [list, setlist] = useState([]);
  const [count, setcount] = useState([0]);
  const [field,setfield]=useState()
  const [id, setid] = useState([1]);
  const changecolor = (value) => {
    setcolor(value);
  };
  useEffect(()=>{
    setfield("")
  },[list])

  const clickhandle = () => {
    var number = count[count.length - 1];
    number += 1;
    setcount((prev) => [...prev, number]);
    const generate = uuidv4();
    setid((prev) => [...prev, generate]);
  };
  const test = () => {
    // const arr = Object.values(list);
    prop.submit(list, color);
    prop.onClose();
    // console.log(count.length);
    // console.log(arr);
    // console.log(color);
  };
  const handlechange=(e)=>{
    setfield(e.target.value)
  }
  const addtolist = (e) => {
    // console.log(e.target.id);
    setlist((prev) => ([
      {
        text: field,
        id: uuidv4(),
        checked: false,
      },...prev
    ]));
  };
  const remove = (value, i) => {
    // delete list[value];
    console.log(list)
    const updatedlist=list.filter((c)=>c.id!==value)
    setlist(updatedlist)
    // const arr = [...count];
    // arr.splice(i, 1);
    // setcount(arr);
  };

  return (
    <>
      <div
        className={
          prop.state
            ? "color bg-slate-400 rounded-md absolute w-full  bottom-0 right-0 transition ease-in-out duration-700 flex flex-col items-center"
            : styles.hide
        }
        style={{ backgroundColor: color, height: "90%" }}
      >
        <div className="flex absolute top-0 left-0">
          <button className="m-2" onClick={prop.onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className=" w-[80%] flex flex-col justify-center mt-12 ">
                <div className=" flex w-full justify-center">
            <input
                  className="p-2 rounded-sm w-[80%] sm:w-2/3 h-12"
                  onChange={handlechange}
                  type="text"
                  value={field}
                  placeholder="Your task"
                />
                <button onClick={() => addtolist()}>
                <AddIcon />
                 
                </button>
            </div>
        {list[0]&&<div className=" h-[200px] w-full flex flex-col   overflow-y-scroll">
        {list.map((c)=><div key={c.id} className=" flex justify-between mt-4 bg-slate-300 px-2 py-1 rounded-md">
                <p className=" w-[75%] break-words ">{c.text}</p>
                <button className=" w-[18%]" onClick={() => remove(c.id)}>
                <DeleteIcon w={"2rem"} h={"1.2rem"} color={"red.600"} />
                 
                </button>
       
              </div>)}
        </div>}
              
                </div>
               <div className=" flex justify-center">
               <button
                className="p-2  border-black border bg-cyan-300 rounded-md w-12 absolute bottom-12"
                onClick={() => test()}
              >
                <CheckIcon />
              </button>
               </div>
              
            
                <div className=" w-full flex justify-center">
                <BotDrawer color={changecolor} />
                </div>
                
      </div>
    </>
  );
}
export default DrawerMlist;
