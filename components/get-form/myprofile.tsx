import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

type AddDepartmentProps = {
    onClose: () => void;
};

export default function MyProfile({ onClose }: AddDepartmentProps) {
    return (
        <div className="absolute inset-[5%] w-[90%] h-full bg-white animate__animated animate__fadeInUp">
            <div className="bg-[var(--primary-color)] h-[55px] flex justify-between items-center px-[10px] font-title">
                <div className="text-white text-[13px] font-semibold flex items-center gap-1"><CgProfile />My profile</div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-white flex justify-center items-center cursor-pointer" title="close" onClick={onClose}><IoClose className="text-[#be1d1d]" /></div>
            </div>
        </div>
    );
}