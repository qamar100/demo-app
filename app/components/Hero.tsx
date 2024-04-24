import Image from "next/image";
import watermelon from "../../public/watermelon.svg"
import pic1 from "../../public/pic1.svg"
import pic2 from "../../public/pic2.svg"
import pic3 from "../../public/pic3.svg"
import pic4 from "../../public/pic4.svg"
import pic5 from "../../public/pic5.svg"
import pic6 from "../../public/pic6.svg"
import pic7 from "../../public/image7.svg"
import pic8 from "../../public/pic8.svg"
import pic9 from "../../public/pic9.svg"
import pic10 from "../../public/pic10.svg"


export function Hero() {
    return (
        <div className="pt-[67px] pl-[80px] bg-white"> 
            <span className="pt-[164px] pl-[80px]">
                <Image src={watermelon} alt=""/>
            </span>

            <div className="pt-[30px] pb-[30px]">
                <h1 className="font-medium text-[40px] text-black leading-[44px]">
                    Heading
                 </h1>

            </div>
            <div  className=" flex pt[10px] w-full flex-col: gap-x-6">
                <span className="">
                    <Image src={pic1} alt="a" />
                    <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the fisrt product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
                <span className=" ">
                    <Image src={pic2} alt="a" />
                    <p className="pt-[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the second product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
                <span className=" ">
                    <Image src={pic3} alt="a" />
                    <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the third product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
            </div>
            <div  className=" flex pt-[24px] w-full flex-col: gap-x-6">
                <span className="">
                    <Image src={pic4} alt="a" />
                    <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the fourth product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
                <span className=" ">
                    <Image src={pic5} alt="a" />
                    <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the fifth product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
                <span className=" ">
                    <Image src={pic6} alt="a" />
                    <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the sixth product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
            </div >
            <div className="pt-[30px] pb-[30px]">
                <h1 className="font-medium text-[40px] text-black leading-[44px]">
                    Heading
                 </h1>

            </div>
            <div className="flex  flex-col: gap-x-6">
            <span>
                <Image src={pic7} alt="" />
                <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the sixth product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
                <div> 
                <span className="flex flex-col gap-y-6">
                <Image src={pic8} alt="" />
                <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the sixth product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
                </span>
                <span className="" >
                <Image src={pic9} alt="" />
                <p className="pt[24px] font-medium text-black text-[20px] leading-[30px] ">
                     Featured Product
                    </p>
                    <p className="font-medium text-[#828282] text-[20px]" >
                        Description of the sixth product
                    </p>
                    <p className="font-medium text-black text-[20px]" >
                        $10.99
                    </p>
               
            </span>
             
                </div>
                </div>

           
        </div>
        
    );
}