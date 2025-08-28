import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

type MyprofileProps = {
    onClose: () => void;
    id: string;
};

export default function MyProfile({ onClose, id }: MyprofileProps) {
    return (
        <div className="absolute inset-[5%] w-[90%] h-full bg-white animate__animated animate__fadeInUp">
            <div className="bg-[var(--primary-color)] h-[55px] flex justify-between items-center px-[10px] font-title">
                <div className="text-white text-[13px] font-semibold flex items-center gap-1"><CgProfile />My profile</div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-white flex justify-center items-center cursor-pointer" title="close" onClick={onClose}><IoClose className="text-[#be1d1d]" /></div>
            </div>

            <div className="absolute w-[100%] h-[calc(100%-50px)] overflow-auto">
                <div className="w-[90%] m-auto my-5">
                    <div className="flex gap-2">
                        <div className="w-[100px] h-[100px] bg-black rounded">
                            <Image src="/all-images/image-pix/icon.png" width={100} height={100} alt="Profile Pix" title="Profile Pix" />
                        </div>

                        <div className="flex flex-col justify-center font-title">
                            <div className="text-3xl font-bold">Fortune Tech Global</div>
                            <div className="text-[10px] text-[#333]">Last Login Date:{" "}<span className="font-bold">2025-06-01 10:53:35</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}