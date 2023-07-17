import Image from "next/image";
import Caraousel from "./components/Caraousel";
const row = "flex flex-row ";
export default function Home() {
  return (
    <div>
      <Caraousel />
      <div>
      <div className="text-center text-7xl font-serif my-16  text-cyan-950">
            What we do ?
          </div>
        <div className={"mb-3 bg-slate-300 rounded p-6 "}>          
          <div className="text-center mb-2 text-slate-900 text-xl ml-5">
            The CSI (Computer Society of India) Kolkata Chapter at UEM College
            is a vibrant and enthusiastic student organization that aims to
            create a thriving environment for computer science and information
            technology enthusiasts. As an integral part of the Computer Society
            of India, the Kolkata Chapter benefits from its affiliation with the
            national body, which is recognized as one of the largest and most
            influential professional associations for IT professionals in India.
          </div>
        </div>

        <div className="text-center text-7xl font-serif my-16  text-cyan-950">
            <div>Our objectives</div>
          </div>
        <div className={"mb-3 bg-slate-300 rounded p-6 "}>
          
          <div className="text-center mb-2 text-slate-900 text-xl ml-5">
            The primary objective of the CSI Kolkata Chapter is to promote and
            foster the field of computer science and information technology
            among its members. This includes organizing various activities,
            events, and initiatives that contribute to the overall growth and
            development of students interested in these fields. By providing a
            platform for knowledge sharing, networking, and skill-building, the
            chapter aims to empower its members to excel in their academic
            pursuits and future careers.
          </div>
        </div>
        <div className="Map grid grid-cols-2 gap-0 mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14738.050781255724!2d88.4899014!3d22.5599202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1689350881799!5m2!1sen!2sin"
            width="1146"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className='bg-slate-300 rounded text-center text-xl pt-10 [background-image:url("/images/chobi.jpg")]'>
            <div className="m-4 p-4 rounded bg-white/50 [backdrop-filter:blur(1px)] ">
              <div className="pt-6 uppercase  font-mono ">
                University Of Engineering & Management,Kolkata
              </div>
              <div className="font-serif px-10 text-xl ">
                Address: University Of Engineering & Management, New Town,
                University Area, Plot No. III, B/5, New Town Rd, Action Area
                III, Newtown, New Town, West Bengal 700160
              </div>
              <div>Contact.No :08010700500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
