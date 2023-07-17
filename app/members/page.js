import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const socialIcons = "p-2 hover:bg-slate-200 cursor-pointer h-fit w-fit rounded";
const card ="h-[700px]  rounded-e-full rounded rounded-s-full rounded mt-5 mb-5 max-w-sm bg-transparent border border-gray-200 rounded-lg drop-shadow-2xl  dark:bg-gray-800 dark:border-gray-700 hover:animate-pulse";
function page() {
  return (
    <div>
      <div className="px-5 underline-offset-1 border-bottom grid grid-cols-4 ">
        <div className={card}>
          <div className="h-[300px] bg-transparent rounded grid-rows-2">
            <div className="h-[300px]">
              <img
                src="\members\DSC_2859.JPG"
                className="rounded-s-full rounded  h-[300px] "
              ></img>
            </div>
            <div>
              <div className="rounded-e-full rounded bg-slate-400 h-[400px] text-5xl text-center ">
                <div className="pt-20 text-center">PRESIDENT</div>
                <div className="text-2xl text-center">Suraj Kumar Pahtak</div>
                <div className="pt-14 flex flex-row justify-center __className_0ec1f4items-center ">
                  <div className={socialIcons}>
                    <FaFacebook className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaInstagram className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaLinkedinIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={card}> 
          <div className="h-[300px] bg-transparent rounded grid-rows-2">
            <div className="h-[300px]">
              <img
                src="/members/DSC_2861.JPG"
                className="rounded-s-full rounded  h-[300px] "
              ></img>
            </div>
            <div>
              <div className="rounded-e-full rounded bg-slate-400 h-[400px] text-5xl text-center ">
                <div className="pt-20 text-center">MANAGER</div>
                <div className="text-2xl text-center">Jeet Dutta</div>
                <div className="pt-14 flex flex-row justify-center __className_0ec1f4items-center ">
                  <div className={socialIcons}>
                    <FaFacebook className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaInstagram className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaLinkedinIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={card}>
          <div className="h-[300px] bg-transparent rounded grid-rows-2">
            <div className="h-[300px]">
              <img
                src="/members/DSC_2860.JPG"
                className="rounded-s-full rounded  h-[300px] "
              ></img>
            </div>
            <div>
              <div className="rounded-e-full rounded bg-slate-400 h-[400px] text-5xl text-center ">
                <div className="pt-20 text-center">MANAGER</div>
                <div className="text-2xl text-center">Diptadip</div>
                <div className="pt-14 flex flex-row justify-center __className_0ec1f4items-center ">
                  <div className={socialIcons}>
                    <FaFacebook className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaInstagram className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaLinkedinIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={card}>
          <div className="h-[300px] bg-transparent rounded grid-rows-2">
            <div className="h-[300px]">
              <img
                src="/members/20221219_103005.jpg"
                className="rounded-s-full rounded  h-[300px] "
              ></img>
            </div>
            <div>
              <div className="rounded-e-full rounded bg-slate-400 h-[400px] text-5xl text-center ">
                <div className="pt-20 text-center">DEVELOPER</div>
                <div className="text-2xl text-center">Tanmay Santra</div>
                <div className="pt-14 flex flex-row justify-center __className_0ec1f4items-center ">
                  <div className={socialIcons}>
                    <FaFacebook className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaInstagram className="w-6 h-6" />
                  </div>
                  <div className={socialIcons}>
                    <FaLinkedinIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default page;
