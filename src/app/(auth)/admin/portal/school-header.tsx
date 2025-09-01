import { IoSettingsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsersGear } from "react-icons/fa6";
import { usePage } from "../../../../../components/context/page-context";
import { SchoolProps } from "./get-form/schooldashboard";

export default function SchoolHeader({ onClose }: SchoolProps) {
    const { setPage } = usePage();
    return (
        <div className="absolute inset-0">
            <div className="w-full min-h-[55px] bg-white shadow fixed z-10 flex justify-center">
                <div className="w-[98%] pl-[90px] flex justify-between items-center">
                    <div className="font-title text-[var(--primary-color)]">Gaposa School - Qr Code Smart Attendance System</div>
                    <div className="flex items-center gap-5">
                        <div className="p-[10px] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" title="School System Settings">
                            <IoSettingsOutline className="text-2xl" />
                        </div>
                        <div className="w-[30px] h-[30px] rounded-[50%] bg-[var(--primary-color)] flex justify-center items-center cursor-pointer" title="close" onClick={onClose}><IoClose className="text-white" /></div>
                    </div>
                </div>
            </div>
            <SchoolSideNav />
        </div>
    );
}

function SchoolSideNav() {
    const { setPage } = usePage();
    return (
        <div className="w-[90px] h-full bg-white shadow fixed z-20 pt-[55px]">
            <ul className="flex flex-col text-sm w-full text-[#333]">
                <li title="Dashboard" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('dashboard')}>
                    <AiOutlineDashboard className="text-[20px]" />
                    <span>Dashboard</span>
                </li>

                <li title="Dashboard" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('dashboard')}>
                    <AiOutlineDashboard className="text-[20px]" />
                    <span>Branch</span>
                </li>

                <li title="Staff" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('staff')}>
                    <FaUsersGear className="text-[20px]" />
                    <span>Staff</span>
                </li>

                <li title="Staff" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('staff')}>
                    <FaUsersGear className="text-[20px]" />
                    <span>Students</span>
                </li>
            </ul>
        </div>
    );
}