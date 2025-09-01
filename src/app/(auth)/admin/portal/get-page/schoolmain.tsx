import { FaUsersGear } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import dynamic from 'next/dynamic';
import Image from "next/image";

const LineChart = dynamic(() => import('../../../../../../components/chart').then(mod => mod.LineChart), { ssr: false });

export default function SchoolMain() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full flex gap-1">

                <div className="w-[30%] min-h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow rounded-md flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                    <div className="w-[90%] flex items-center justify-between text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-sm font-bold">Administrators</div>
                            <div className="text-sm italic">Statistics of Administrators</div>
                            <div className="text-3xl font-bold text-[var(--primary-color)]" id="">10</div>
                        </div>
                        <div className="p-[8px] bg-white rounded-xl border-[var(--primary-color)] border">
                            <FaUsersGear className="text-2xl text-[var(--primary-color)]" />
                        </div>
                    </div>
                </div>

                <div className="w-[30%] min-h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow rounded-md flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                    <div className="w-[90%] flex items-center justify-between text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-sm font-bold">Administrators</div>
                            <div className="text-sm italic">Statistics of Administrators</div>
                            <div className="text-3xl font-bold text-[var(--primary-color)]" id="">10</div>
                        </div>
                        <div className="p-[8px] bg-white rounded-xl border-[var(--primary-color)] border">
                            <FaUsersGear className="text-2xl text-[var(--primary-color)]" />
                        </div>
                    </div>
                </div>

                <div className="w-[30%] min-h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow rounded-md flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                    <div className="w-[90%] flex items-center justify-between text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-sm font-bold">Administrators</div>
                            <div className="text-sm italic">Statistics of Administrators</div>
                            <div className="text-3xl font-bold text-[var(--primary-color)]" id="">10</div>
                        </div>
                        <div className="p-[8px] bg-white rounded-xl border-[var(--primary-color)] border">
                            <FaUsersGear className="text-2xl text-[var(--primary-color)]" />
                        </div>
                    </div>
                </div>

                <div className="w-[30%] min-h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow rounded-md flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                    <div className="w-[90%] flex items-center justify-between text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-sm font-bold">Schools</div>
                            <div className="text-sm italic">Statistics of Schools</div>
                            <div className="text-3xl font-bold text-[var(--primary-color)]" id="">10</div>
                        </div>
                        <div className="p-[8px] bg-white rounded-xl border-[var(--primary-color)] border">
                            <LuSchool className="text-2xl text-[var(--primary-color)]" />
                        </div>
                    </div>
                </div>  
            </div>

            <div className="w-full flex gap-2">
                <div className="w-[70%] min-h-[430px] bg-white/90 rounded">
                    <LineChart />
                </div>

                <div className="w-[30%] min-h-[430px] bg-white rounded flex justify-center">
                    <div className="w-[90%] flex flex-col gap-3 pt-[10px]">
                        <div className="flex justify-between border-b border-[#c6c6c6] pb-[5px]">
                            <div className="font-bold">Recent Activities</div>
                            <div className="text-[var(--border-left-color)]">View All</div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="w-full h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] border border-[#c6c6c6] rounded flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                                <div className="w-[90%] pt-[8px]">
                                    <div className="flex justify-between">
                                        <div className="flex justify-center items-center gap-1 text-[12px] font-bold"><CiUser className="text-[var(--border-left-color)]"/>Ogunleye Opeyemi</div>
                                        <IoIosCheckmark className="text-[var(--border-left-color)]"/>
                                    </div>

                                    <div className="pt-[10px] text-sm italic">Success Alert: FORTUNE OPEYEMI profile was updated successfully...</div>
                                    <div className="float-right flex items-center text-[10px] gap-1 pt-[8px] text-[#FAC880] font-bold font-title"><FaClock/>2025-01-25 16:30:12</div>
                                </div>
                            </div>

                            <div className="w-full h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] border border-[#c6c6c6] rounded flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                                <div className="w-[90%] pt-[8px]">
                                    <div className="flex justify-between">
                                        <div className="flex justify-center items-center gap-1 text-[12px] font-bold"><CiUser className="text-[var(--border-left-color)]"/>Ogunleye Opeyemi</div>
                                        <IoIosCheckmark className="text-[var(--border-left-color)]"/>
                                    </div>

                                    <div className="pt-[10px] text-sm italic">Success Alert: FORTUNE OPEYEMI profile was updated successfully...</div>
                                    <div className="float-right flex items-center text-[10px] gap-1 pt-[8px] text-[#FAC880] font-bold font-title"><FaClock/>2025-01-25 16:30:12</div>
                                </div>
                            </div>

                            <div className="w-full h-[120px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] border border-[#c6c6c6] rounded flex justify-center transition-all duration-700 hover:scale-105 hover:cursor-pointer">
                                <div className="w-[90%] pt-[8px]">
                                    <div className="flex justify-between">
                                        <div className="flex justify-center items-center gap-1 text-[12px] font-bold"><CiUser className="text-[var(--border-left-color)]"/>Ogunleye Opeyemi</div>
                                        <IoIosCheckmark className="text-[var(--border-left-color)]"/>
                                    </div>

                                    <div className="pt-[10px] text-sm italic">Success Alert: FORTUNE OPEYEMI profile was updated successfully...</div>
                                    <div className="float-right flex items-center text-[10px] gap-1 pt-[8px] text-[#FAC880] font-bold font-title"><FaClock/>2025-01-25 16:30:12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}