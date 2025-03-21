import React, { useState } from "react";
import "../Pages/Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'

const Main = () => {

  return (
    <>
      <div className="main h-screen flex justify-center align-center">
        <div className="w-[462px] h-[603px] bg-white   mt-20 ">
          <div className="w-[420px] h-[24px] p-8 flex justify-center align-center">
            <hr className="w-[99.15px] bg-[#C8C8C8] align-center mt-2 ml-10  " />
            <h3 className="head">YAY ! It's BOGO</h3>
            <hr className="w-[99.15px] bg-[#C8C8C8] align-center mt-2  " />
          </div>



          <div className="w-[341px] h-[363.11px]  ml-15 ">
           
            <div className=" item w-[341px] h-[74.11px] border   border-[#C8C8C8] bg-[#FFFFFF] mt-5  hover:h-[179.22px] hover:bg-[#FFF9FA] hover:opacity-100 transition-all duration-500 ">
              
              <div className="w-[341px] flex justify-between ">
              <div className=" w-[155px]  flex ">
                <div className=" ml-3 flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="custom"  className="hidden peer cursor-pointer" />
                  <div className="w-5 h-5 border-2 border-[#FF6B82] rounded-full peer-checked:bg-red-500 mt-5 cursor-pointer peer-checked:border-blue"></div>
                </div>

                <div>
                  <div className="flex text-align mt-2  ml-2">
                    <p className="mr-2">
                      <b>1 Unit</b>
                    </p>
                    <div className="bg-[#FF6B82] w-[50px] h-[22px] text-white text-[12px] text-center">
                      10% OFF
                    </div>
                  </div>
                  <div className=" ml-2 ">Standard Price </div>
                </div>
              </div>
              <div className=" w-[120px]  p-2">
                <p>
                  <b>$10.00 USD</b>
                </p>
                <p className="text-gray-500 line-through">$24.00 USD</p>
              </div>
              </div>
              <div className="opacity-0 overflow-hidden   hover:opacity-100  w-[189px] h-[99px] mt-2 ml-10">
                <div className="flex justify-around ">
                  <h4>Size</h4>
                  <h4>Colour</h4>
                </div>
                <div className="flex justify-between ">
                  <h5>#1</h5>
                  <select className="w-[65.98px] border h-[25.31px] bg-white"><option value='S'>S</option></select>
                  <select className="w-[65.98px] border h-[25.31px] bg-white"><option value='S'>Black</option></select>
                </div>
                <div className="flex justify-between mt-2 ">
                  <h5>#2</h5>
                  <select className="w-[65.98px]  border h-[25.31px] bg-white"><option value='S'>S</option></select>
                  <select className="w-[65.98px]  border h-[25.31px] bg-white"><option value='S'>Color</option></select>
                </div>
              </div>
              
             </div>




            <div className=" item w-[341px] h-[74.11px] flex-1  border border-[#C8C8C8] bg-[#FFFFFF] mt-5 justify-between  hover:h-[179.22px] hover:bg-[#FFF9FA] hover:opacity-100 transition-all duration-500  ">
            <div className="w-[341px] flex justify-between ">
              <div className=" w-[155px]  flex">
                <div className=" ml-3">
                  <input type="radio" name="custom" className="hidden peer" />
                  <div class="w-5 h-5 border-2 border-[#FF6B82] rounded-full peer-checked:bg-blue mt-5"></div>
                </div>

                <div>
                  <div className="flex text-align mt-2  ml-2">
                    <p className="mr-2">
                      <b>2 Unit</b>
                    </p>
                    <div className="bg-[#FF6B82] w-[50px] h-[22px] text-white text-[12px] text-center">
                      20% OFF
                    </div>
                  </div>
                  <div className=" ml-2 ">Standard Price </div>
                </div>
              </div>
              <div className=" w-[120px]  p-2">
                <p>
                  <b>$18.00 USD</b>
                </p>
                <p className="text-gray-500 line-through">$24.00 USD</p>
              </div>
              </div>
              <div className="opacity-0 overflow-hidden   hover:opacity-100  w-[189px] h-[99px] mt-2 ml-10">
                <div className="flex justify-around ">
                  <h4>Size</h4>
                  <h4>Colour</h4>
                </div>
                <div className="flex justify-between ">
                  <h5>#1</h5>
                  <select className="w-[65.98px] border h-[25.31px] bg-white"><option value='S'>S</option></select>
                  <select className="w-[65.98px] border h-[25.31px] bg-white"><option value='S'>Black</option></select>
                </div>
                <div className="flex justify-between mt-2 ">
                  <h5>#2</h5>
                  <select className="w-[65.98px]  border h-[25.31px] bg-white"><option value='S'>S</option></select>
                  <select className="w-[65.98px]  border h-[25.31px] bg-white"><option value='S'>Color</option></select>
                </div>
              </div>
            </div>




            <div className=" item w-[341px] h-[74.11px] flex-1  justify-between  border border-[#C8C8C8] bg-[#FFFFFF] mt-5 hover:h-[179.22px] hover:bg-[#FFF9FA]">
            <div className="w-[341px] flex justify-between ">
              <div className=" w-[155px]  flex">
                <div className=" ml-3">
                  <input type="radio" name="custom" className="hidden peer" />
                  <div class="w-5 h-5 border-2 border-[#FF6B82] rounded-full peer-checked:bg-to-red mt-5"></div>
                </div>

                <div>
                  <div className="flex text-align mt-2  ml-2">
                    <p className="mr-2">
                      <b>3 Unit</b>
                    </p>
                    <div className="bg-[#FF6B82] w-[50px] h-[22px] text-white text-[12px] text-center">
                      30% OFF
                    </div>
                  </div>
                  <div className=" ml-2 ">Standard Price </div>
                </div>
              </div>
              <div className=" w-[120px]  p-2">
                <p>
                  <b>$24.00 USD</b>
                </p>
                <p className="text-gray-500 line-through">$24.00 USD</p>
              </div>
              </div>
              <div className="opacity-0 overflow-hidden   hover:opacity-100  w-[189px] h-[99px] mt-2 ml-10">
                <div className="flex justify-around ">
                  <h4>Size</h4>
                  <h4>Colour</h4>
                </div>
                <div className="flex justify-between ">
                  <h5>#1</h5>
                  <select className="w-[65.98px] border h-[25.31px] bg-white"><option value='S'>S</option></select>
                  <select className="w-[65.98px] border h-[25.31px] bg-white"><option value='S'>Black</option></select>
                </div>
                <div className="flex justify-between mt-2 ">
                  <h5>#2</h5>
                  <select className="w-[65.98px]  border h-[25.31px] bg-white"><option value='S'>S</option></select>
                  <select className="w-[65.98px]  border h-[25.31px] bg-white"><option value='S'>Color</option></select>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[341px] h-[59px] flex justify-between align-center p-4  ml-15">
            <div className="text-[#FF6B82] text-lg  h-auto w-auto ">Free Delivery</div>
            <div className="text-black text-lg "><b>TOTAL: $299.00 USD</b> </div>
            
          </div>
          <button className="w-[341px] h-[40px] mt-2 rounded-sx bg-[#FF6B82] text-white ml-15">
        <FontAwesomeIcon icon={faPlus} />Add To Cart 
        </button>

        </div>
      </div>

      

      
      

    </>
  );
};

export default Main;
