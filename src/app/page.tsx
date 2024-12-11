"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { Poppins, Schoolbell, Public_Sans } from 'next/font/google';

const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'] 
})
const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin']
})
const publicSans = Public_Sans({
  weight: '400',
  subsets: ['latin']
})
// const peaceSans = Peace_Sans({
//   weight: '400',
//   subsets: ['latin']
// })

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState <string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
      setData("Data loaded!");
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
    {loading ? (
      <p className="text-lg " >Loading, please wait...</p>
    ) : (
    <div className="h-[100%]">
    <div className="bg-gray-950" data-aos="zoom-in">
      <div className=" ml-20 mr-20 pb-10 pt-8">
        <div className="p-10 border flex flex-row" data-aos="flip-left" data-aos-delay="100">
        <div className="flex flex-col  w-[40%]">
        <div className={`text-[14px] flex flex-row`}
        data-aos="fade-down"
        data-aos-delay="300">
          <Image src="/logo.jpg" alt="logo" width={25} height={25} />
          <div className="ml-2 font-bold text-[20px]" style={{ fontFamily: 'Peace Sans' }}> ORGLOBAL TECH NETWORK LTD</div>
          </div>
        <div className=" text-[40px] font-bold text-amber-500"
        data-aos="fade-down"
        data-aos-delay="400" style={{ fontFamily: 'Peace Sans' }}>TECH TRAINING WORKSHOP</div>
        <div className={`text-[15px] ${publicSans.className}`}
        data-aos="fade-down"
        data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt quaerat dolorum dolor quam. Enim error recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt quaerat dolorum dolor quam. Enim error recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt quaerat dolorum dolor quam. Enim error recusandae.</div>
      </div>
      
      <div className="flex flex-col ml-10 w-[60%]">
        <div className= {`text-[36px] -rotate-12 justify-center mt-[50px] mx-auto ${schoolbell.className}`} >Getting Started in Tech</div>
        <div className="">
          <img src="/image.jpg" alt="Image of Instructor" className="h-[200px] w-[200px] flex flex-col rounded-full ml-[400px]" />
          <p className="ml-[450px]"> Akinbola Abudu</p>
        </div>
      </div>
    </div>
    </div>
    </div>
      <div className="bg-slate-300 w-[100%]" data-aos="zoom-in">
        <div className="items-center flex flex-col">
        <div className="bg-amber-500 w-[90%] h-[25%] text-[12px] text-black pt-2 pb-2 pl-5  items-center justify-center flex flex-row"
        data-aos="flip-left">
        <div className="w-[33.3%] flex flex-row">
        <FontAwesomeIcon icon={faCalendarDays} className=" w-[20px] mr-2" />
          <div className=" ">
            <p> 6th -31st January, 2025</p>
            <p> 6th -31st January, 2025</p>
          </div>
        </div>
        <div className=" w-[33.3%] item-center justify-center flex ">
        <FontAwesomeIcon icon={faClock} className=" w-[20px] mr-2" />
          <div>10 persons/class</div>
        </div>
        <div className=" w-[33%] flex mr-[20px] justify-end">
          <FontAwesomeIcon icon={faLocationDot} className="w-[20px] mr-2" />
          <div>
            <p>Online & In-Person Delivery</p>
            <hr />
            <p>H34, Heritage Mall, Cocoa House, <br /> Dugbe, Ibadan</p>
          </div>
        </div>
        </div>
        <div className={`text-[] w-[70%] ${publicSans.className}`}>
          <p className="text-[#404040] text-[33px] font-bold" data-aos="fade-down" style={{ fontFamily: 'Peace Sans'}}>RUNDOWN</p>
          <Link href="register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="slide-down" 
               data-aos-delay="100"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#f8df8c]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-amber-500 hover:cursor-pointer"> Web Development</div>
          </Link>
          <Link href="register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="200"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#c7c8c7]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-slate-500 hover:cursor-pointer"> Digital Marketing</div>
            </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="300"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#f8df8c]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-amber-500 hover:cursor-pointer"> Programming</div>
          </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="400"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#c7c8c7]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-slate-500 hover:cursor-pointer"> Blockchain</div>
            </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="500"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#f8df8c]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-amber-500 hover:cursor-pointer"> Cloud Computing</div>
            </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="600"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#c7c8c7]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-slate-500 hover:cursor-pointer"> Data Science</div>
              </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="700"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#f8df8c]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-amber-500 hover:cursor-pointer"> Product Management</div>
            </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="800"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#c7c8c7]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-slate-500 hover:cursor-pointer"> UI/UX</div>
              </Link>
          <Link href="/register" className="bg-white p-3 text-black rounded-3xl flex flex-row mb-3" 
               data-aos="fade-up" 
               data-aos-delay="900"> 
            <div className="w-[18%] rounded-3xl mr-5 bg-[#f8df8c]">
              <div className="text-center pl-3 pr-3"> 9 AM </div>
              </div>
            <div className="w-[80%] hover:text-amber-500 hover:cursor-pointer"> Basic Computer Operation</div>
            </Link>
        </div>
        </div>
      </div>
  </div>
  )}
  </div>
  );
}
