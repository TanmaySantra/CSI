import React from "react";
const card ="  h-[700px] mb-5 max-w-sm p-6  bg-slate-300 border border-gray-400 rounded-lg  hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";
const crdimg = "w-[100%]  mb-1 px-0  rounded";
function page() {
  return (
    <div>
      <div className="px-5 bg-transparent  underline-offset-1 border-bottom grid grid-cols-3 ">
        <div className={card}>
          <div className={crdimg}>
            <img src="/images/cardwala.png" className="rounded mb-2" />
            <h2 className="subpixel-antialiased text-4xl italic text-2xl text-neutral-700 font-serif text-center text-neutral-700">
              Cloud Computing Workshops
            </h2>
          </div>
          <hr
            style={{
              background: "black",
              height: "5px",
              border: "none",
            }}
          />
          <div className="mt-2 text-justify">
            Cloud computing is a model for delivering computing services over
            the internet, encompassing infrastructure, platforms, and software.
            It offers scalability, cost efficiency, accessibility, and mobility,
            enabling users to easily scale resources, reduce upfront costs,
            access services from anywhere, and collaborate effectively. Security
            measures, reliability, and availability are key benefits, although
            data security and vendor lock-in can pose challenges. Connectivity
            and data transfer considerations also exist. Overall, cloud
            computing has transformed the IT industry and continues to evolve
            with emerging technologies.
          </div>
        </div>
        <div className={card + ""}></div>
        <div className={card + ""}></div>
      </div>
    </div>
  );
}

export default page;
