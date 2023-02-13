import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
type Props = {};

function publications({}: Props) {
  const publications = [1, 2, 3, 4, 5];
  return (
    <div className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className=" text-sm absolute top-10 uppercase tracking-[15px] text-gray-500">
        SHELF & PUBLICATIONS
      </h3>
      <div className=" relative w-full overflow-x-scroll flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {publications.map((publication, i) => (
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center  p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[200px]"
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyJTIwaW4lMjBhbGwlMjBmb3JtYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-lg font-normal text-center">GOLD DUST</h4>
              <p className=" text-sm text-center md:text-left">
                Half of a Yellow Sun returns to a critical moment in the modern
                history of Nigeria, a time shortly after gaining their
                independence from Britain when, following a massacre of their
                people, the Igbo tribes of the southeast seceded and established
                The Republic of Biafra. Three years of civil war followed as
                Biafra was slowly strangled into submission by violence and
                famine. Over a million people died, including Chimamanda Ngozi
                Adichie’s two grandfathers. With astonishing empathy and the
                effortless grace of a natural storyteller, Adichie weaves
                together the lives of three characters swept up in the
                turbulence of the war. Thirteen-year-old Ugwu is employed as a
                houseboy for Odenigbo, a pan-Africanist university professor
                full of revolutionary zeal.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default publications;
