export default function Jaicche() {
  return (
    <div className="Map grid grid-cols-2 gap-0">
      <div className="px-10 text-4xl italic font-medium text-neutral-700 text-lg ">
      <div className="text-4xl italic font-medium text-neutral-700">
        Contact Information
      </div>
        
        <div className=" pt-2 font-mono bg-slate-200 rounded pl-2 underline-offset-1 border-bottom">
          CSI Kolkata Student Chapter UEMK  
          <div className="py-5 pl-3">
          <ul role="list" class="marker:text-sky-800 list-disc pl-5 space-y-3 text-slate-sky-800  ">
            <li>Computer Society of India, Plot No. III, B/5, University Area, B1 LG
            1.5,U.E.M, Rd, Action Area III, Newtown, Kolkata, West Bengal 700160
            </li>
            <li>
                Phone:+91 5887684281
            </li>
            <li>
                E-mail:csiuemk@gmail.com
            </li>  
            </ul>          
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14738.050781255724!2d88.4899014!3d22.5599202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1689371384094!5m2!1sen!2sin"
        width="800"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
