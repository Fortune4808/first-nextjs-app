import { FaUsersGear } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('../chart').then(mod => mod.LineChart), { ssr: false });
const PieChartQ1 = dynamic(() => import('../chart').then(mod => mod.PieChartQ1), { ssr: false });
const PieChartQ2 = dynamic(() => import('../chart').then(mod => mod.PieChartQ2), { ssr: false });

export default function Main() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full flex gap-1">
                <div className="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
                    <div className="w-[90%] flex items-center text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-3xl font-bold text-primary-color" id="">10</div>
                            <div className="text-sm font-bold">TOTAL STAFF</div>
                            <FaUsersGear className="text-3xl" />
                        </div>
                    </div>
                </div>

                <div className="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
                    <div className="w-[90%] flex items-center text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-3xl font-bold text-primary-color" id="">1</div>
                            <div className="text-sm font-bold">TOTAL DEPARTMENTS</div>
                            <LuSchool className="text-3xl" />
                        </div>
                    </div>
                </div>

                <div className="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
                    <div className="w-[90%] flex items-center text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-3xl font-bold text-primary-color" id="">5</div>
                            <div className="text-sm font-bold">TOTAL COURSE REG</div>
                            <FaBook className="text-3xl" />
                        </div>
                    </div>
                </div>

                <div className="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
                    <div className="w-[90%] flex items-center text-[#424141]">
                        <div className="w-[100%] flex flex-col gap-1">
                            <div className="text-3xl font-bold text-primary-color" id="">10</div>
                            <div className="text-sm font-bold">TOTAL STUDENTS</div>
                            <FaUsersGear className="text-3xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex gap-2">
                <div className="w-[60%] min-h-[430px] bg-white/90 rounded">
                    <LineChart/>
                </div>

                <div className="w-[40%] min-h-[420px] flex flex-col gap-2">
                    <div className="w-full h-[210px] bg-white/90">
                        <PieChartQ1/>
                    </div>

                    <div className="w-full h-[210px] bg-white/90">
                        <PieChartQ2/>
                    </div>
                </div>
            </div>
        </div>
    );
}