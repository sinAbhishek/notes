import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const Notes = (prop) => {
  const [state,setstate]=useState(false)
  return (
    <>
    <div
      style={{ backgroundColor: prop.notes.color, minHeight: "150px" }}
      onClick={()=>setstate(true)}
      className="rounded-md relative w-64 h-[150px] m-1 p-4 mt-2 cursor-pointer  "
    >
      <button
        className="absolute top-0 right-0 px-2"
        onClick={() => prop.delete(prop.notes.id)}
      >
        <CloseIcon w={".8rem"} height={".8rem"} color={"#a6115e"} />
      </button>
      <h1 className=" font-semibold">{prop.notes.title}</h1>
      <hr />
      <p className=" text-sm md:text-sm  text-justify">{prop.notes.text.slice(0,130)} .....</p>
    </div>
    <Modal isOpen={state} onClose={()=>setstate(false)}>
    <ModalOverlay />
    <ModalContent
      h={"60vh"}
      backgroundColor={prop.notes.color}
      style={{ transition: "ease-in-out .7s",padding:"5px 5px" }}
    >
   
      <ModalBody>
      <div
    
      className="rounded-md  w-full h-full m-1  mt-4 cursor-pointer  "
    >
      <div className=" absolute top-2 ">
      <h1 className=" font-semibold ">{prop.notes.title}</h1>
      <hr />
      </div>
      <button
        className="absolute top-0 right-0 px-2"
        onClick={() => setstate(false)}
      >
        <CloseIcon w={".8rem"} height={".8rem"} color={"black"} />
      </button>
    <div className="w-full h-[80%] mt-8 overflow-y-scroll">
    <p className=" text-sm md:text-sm  text-justify">{prop.notes.text}</p>
    </div>
    
     
     
    
    </div>
      
      </ModalBody>

    </ModalContent>
  </Modal>
  </>
  );
};

export default Notes;
