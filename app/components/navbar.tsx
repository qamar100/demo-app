


const navlinks = [
    { name: 'Page1' },
    { name: "Page2" },
    {name: "page3"},
]
export function Navbar() {
    
    return (
        <nav className="flex w-full items-center justify-between pt-[67px] pl-[80px] bg-white">
            <p className="font-medium text-[#000000] text-[20px]">
                Site Name
            </p>
            <div className="flex gap-x-5">
                <div className="flex  justify-center gap-x-[56px]">
                {navlinks.map((item, index) => (
                    <p className=" font-medium text-[#000000]"key={index}>  {item.name}</p>
                ))}
                </div>
            <div>
            <button>
                <p className="bg-[#000000] text-[16px] px-[24px] py-[14px] rounded-[8px] gap-x-8 text-white"> Button</p>
                    </button>
                </div>
             </div>   


        </nav>
        
    );
}