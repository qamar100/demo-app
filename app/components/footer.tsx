import Image from "next/image";
import fb from "../../public/fb.svg"
import link from "../../public/linkdin.svg"
import youtube from "../../public/youtube.svg"
import insta from "../../public/instagram.svg"

const navlinks = [
    { name: 'Page1' },
    { name: 'Page2' },
    {name: 'Page3'},
]


export function Footer() {
    return (
        <div className="flex flex-row pt-[100px] pl-[80px] bg-white">
            
           <p className="font-medium text-[#000000] text-[24px] leading-[36px]">
                Site Name
               
            </p>
                <div className=" flex flex-row items-center pr-[10px] gap-x-5 pt-[80px]">
                   <span> 
                        <Image src={fb} alt="" />
                    </span>
                    <span> 
                        <Image src={link} alt="" />
                    </span>
                     <span> 
                        <Image src={youtube} alt="" />
                    </span>
                    <span> 
                        <Image src={insta} alt="" />
                    </span>
                  
                </div>
                <div className=" flex flex-col gap-y-5 pl-[736px]">
                <p className="font-medium text-[16px] text-black">
                    Topic
                </p>
                {navlinks.map((item, index) => (
                    <p className="text-[#454545] text-[16px]" key={index}> {item.name}</p>
                ))}
                  <p className="font-medium text-[16px] text-black">
                    Topic
                </p>
                {navlinks.map((item, index) => (
                    <p className="text-[#454545] text-[16px]" key={index}> {item.name}</p>
                ))}
               </div>
                </div>
       
    );
}