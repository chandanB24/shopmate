import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Avatar,Wrap,WrapItem } from "@chakra-ui/react";




function Create() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen" style={{background:'linear-gradient(to right top, #d474f6, #a48aff, #7099ff, #3ca3fc, #12a9eb)'}}>
          <div className="flex flex-col w-4/5 h-4/5 bg-white items-center justify-center shadow-2xl rounded-3xl">
            <h1 className="text-2xl md:text-4xl lg:text-6xl mb-10 lg:mb-18 mb text-red-600 font-bold">
              Create your store
            </h1>
            <div className="flex justify-start items-center w-3/5 mb-5">
            <Wrap>
                <WrapItem>
                  <Avatar size={{base:'lg',md:'xl',lg:'2xl'}} name='Shop' background='red.400'/>
                </WrapItem>
            </Wrap>
            <input type="file" className="ml-5"/>
            </div>
            <div className="flex justify-start items-center w-3/5 border-b-2 border-black pb-2 ">
              <FaUser />
              <input
                type="text"
                placeholder="Store Name"
                className="ml-3 w-full border-0 focus:ring-0"
              />
            </div>
            <br />
            <div className="flex justify-start items-center w-3/5 border-b-2 border-black pb-2 ">
              <FaLocationDot />
              <input
                type="text"
                placeholder="Location"
                className="ml-3 w-full border-0 focus:ring-0"
              />
            </div>
            <br />
            <div className="flex justify-between md:justify-end lg:justify-end w-3/5">
              <button className=" bg-red-600 text-white rounded p-3 mx-3">
                Use Location
              </button>
              <button className=" bg-red-600 text-white rounded p-3">
                Create
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Create;