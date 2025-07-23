import { FaGoogleScholar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import InputField from "../input";
import Button from "../button";
import { FaCheckDouble } from 'react-icons/fa';

type AddDepartmentProps = {
    onClose: () => void;
};

export default function AddDepartment({ onClose }: AddDepartmentProps) {
    return (
        <div className="absolute right-0 w-[35%] h-full bg-white animate__animated animate__fadeInRight">
            <div className="bg-[var(--primary-color)] h-[55px] flex justify-between items-center px-[10px] font-title">
                <div className="text-white text-[13px] font-semibold flex items-center gap-1"><FaGoogleScholar />New Department Registration Form</div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-white flex justify-center items-center cursor-pointer" title="close" onClick={onClose}><IoClose className="text-[#be1d1d]" /></div>
            </div>

            <div className="absolute w-[100%] h-[calc(100%-50px)] overflow-auto">
                <div className="w-[90%] m-auto">
                    <div className="mt-[15px] p-[10px] bg-[#F2FDF9] border border-solid border-[#BCDBCB] font-title">
                        <div className="text-[#A1A2A6]">Kindly fill the form below to <span className="text-[#579EC8] font-bold">Add New Department</span></div>
                    </div>

                    <div className="my-5 flex flex-col gap-3">
                        <InputField
                            id=""
                            label="Department Name"
                            className="!h-[50px]"
                        />

                        <Button
                            id="submit"
                            label="SUBMIT"
                            type="submit" className="p-[15px] w-[40%]"
                            icon={FaCheckDouble} onClick={() => {console.log('addDepartment')}}
                            title="SUBMIT"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}