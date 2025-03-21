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
           
            <div className=" item w-[341px] border   border-[#C8C8C8] bg-[#FFFFFF] mt-5  hover:h-[179.22px] hover:bg-[#FFF9FA] transition-all duration-500 ">
              
              <div className="w-[341px] flex justify-between border">
              <div className=" w-[155px]  flex ">
                <div className=" ml-3">
                  <input type="radio" name="custom" className="hidden peer" />
                  <div class="w-5 h-5 border-2 border-[#FF6B82] rounded-full peer-checked:bg-to-red mt-5"></div>
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
                  <b>10.00 USD</b>
                </p>
                <p>ggggg</p>
              </div>
              </div>
              <div className="max-h-0 overflow-hidden  hover:max-h-40">vvvv </div>
              
             </div>




            <div className=" item w-[341px] h-[74.11px] flex-1  border border-[#C8C8C8] bg-[#FFFFFF] mt-5 justify-between flex hover:h-[179.22px] hover:bg-[#FFF9FA]  ">
              <div className=" w-[155px]  flex">
                <div className=" ml-3">
                  <input type="radio" name="custom" className="hidden peer" />
                  <div class="w-5 h-5 border-2 border-[#FF6B82] rounded-full peer-checked:bg-to-red mt-5"></div>
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
                  <b>10.00 USD</b>
                </p>
                <p>ggggg</p>
              </div>
            </div>




            <div className=" item w-[341px] h-[74.11px] flex-1 flex justify-between  border border-[#C8C8C8] bg-[#FFFFFF] mt-5 hover:h-[179.22px] hover:bg-[#FFF9FA]">
              <div className=" w-[155px]  flex">
                <div className=" ml-3">
                  <input type="radio" name="custom" className="hidden peer" />
                  <div class="w-5 h-5 border-2 border-[#FF6B82] rounded-full peer-checked:bg-to-red mt-5"></div>
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
                  <b>10.00 USD</b>
                </p>
                <p>ggggg</p>
              </div>
            </div>
          </div>

          <div className=" w-[341px] h-[59px] flex justify-between align-center p-4  ml-15">
            <div className="text-[#FF6B82] text-lg  h-auto w-auto ">Free Delivery</div>
            <div className="text-black text-lg ">TOTAL: 299.00 USD </div>
            
          </div>
          <button className="w-[341px] h-[40px] mt-2 rounded-sx bg-[#FF6B82] text-white ml-15">
        <FontAwesomeIcon icon={faPlus} />Add To Cart 
        </button>

        </div>
      </div>



      <div class="group w-40 bg-green-500 text-white p-4 rounded-lg transition-all duration-500 hover:w-72">
  <h2 class="text-lg font-bold">Hover Me</h2>
  
  <p class="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
    More details appear here when you hover over the div.
  </p>
</div>
      

    </>
  );
};

export default Main;
