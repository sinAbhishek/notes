import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import BotDrawer from "./drawer";
import { CloseIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
const Todomodal = (prop) => {
  const [color, setcolor] = useState("#f1f5f9");
  const [list, setlist] = useState([]);
  const [count, setcount] = useState([0]);
  const [field,setfield]=useState()
  const [id, setid] = useState([1]);

  useEffect(()=>{
    setfield("")
  },[list])
  const changecolor = (value) => {
    setcolor(value);
    prop.color(value);
  };
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
      <Modal isOpen={prop.isOpen} onClose={prop.onClose}>
        <ModalOverlay />
        <ModalContent
          h={"60vh"}
          backgroundColor={color}
          style={{ transition: "ease-in-out .7s" }}
        >
          <ModalHeader>TASKS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <div  className="inputcont flex flex-col items-center justify-center m-2">
                <div className=" w-[85%] ">
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
            
              </div>
           
         
            <div className="flex justify-center">
              <button className="mx-auto" onClick={clickhandle}>
             
              </button>
            </div>

            <div className="flex justify-center">
              <button
                className="p-2  border-black border bg-cyan-300 rounded-md w-12 absolute bottom-8"
                onClick={() => test()}
              >
                <CheckIcon />
              </button>
            </div>
          </ModalBody>

          <ModalFooter>
            <BotDrawer color={changecolor} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Todomodal;
