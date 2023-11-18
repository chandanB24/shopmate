import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const  Navbar = () => {
  return (
    <>
      <div className="w-4/5 m-auto">
        <div className="flex gap-2 w-full  justify-between items-center p-2">
          <div className="flex gap-3 items-center">
            <h1>ShopMate</h1>
            <button className="border-l-2 pl-2 font-bold">Setup your store location</button>
          </div>
          <div className="flex gap-6 w-2/4">
            <InputGroup>
            <Input placeholder="Search for stores" size="lg" variant="" width='full' className="bg-gray-100"/>
            <InputRightElement>
            <FaSearch fontSize='1.5em' className="mt-2"/>
            </InputRightElement>
            </InputGroup>
            <FaUserCircle fontSize='3em'/>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 h-0.5"></div>
      <div className="w-full h-80 mb-4 rounded-b-2xl bg-slate-300">
        
      </div>
    </>
  );
}

export default Navbar;
