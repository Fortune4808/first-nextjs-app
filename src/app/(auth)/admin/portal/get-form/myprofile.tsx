import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import SelectField from "../../../../../../components/ui/select";
import InputField from "../../../../../../components/ui/input";
import Button from "../../../../../../components/ui/button";
import { FaCheckDouble } from 'react-icons/fa';

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

            <div className="absolute w-[100%] h-[calc(100%-50px)] overflow-auto scrollbar-hidden">
                <div className="w-[90%] m-auto my-5">
                    <div className="flex gap-2">
                        <div className="w-[80px] h-[80px] bg-black rounded">
                            <Image src="/all-images/image-pix/avatar.jpg" width={80} height={80} className="object-cover rounded" alt="Profile Pix" title="Profile Pix" />
                        </div>

                        <div className="flex flex-col justify-center text-[#333]">
                            <div className="text-3xl font-bold font-title">Fortune Tech Global</div>
                            <div className="flex items-center gap-2">
                                <div className="text-[8px] bg-green-800 text-white py-[3px] px-[5px] font-bold rounded-[50px]">ACTIVE</div>
                                <div className="text-[10px]">| Last Login Date:{" "}<span className="font-bold italic">2025-06-01 10:53:35</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[30px] pb-[50px] px-[20px]">
                        <div className="border-b p-[5px] text-[var(--primary-color)] text-sm font-title">STAFF BASIC INFORMATION</div>
                        <div className="w-full flex flex-wrap gap-4 py-[15px]">
                            <div className="w-[45%] flex-grow">
                                <SelectField
                                    label="Select Title"
                                    options={[
                                        { value: "option1", label: "Option 1" },
                                        { value: "option2", label: "Option 2" },
                                        { value: "option3", label: "Option 3" },
                                    ]}
                                />
                            </div>
                            <div className="w-[45%] flex-grow">
                                <InputField
                                    label="First Name"
                                />
                            </div>
                            <div className="w-[45%] flex-grow">
                                <InputField
                                    label="Middle Name"
                                />
                            </div>
                            <div className="w-[45%] flex-grow">
                                <InputField
                                    label="Last Name"
                                />
                            </div>
                        </div>

                        <div className="border-b p-[5px] text-[var(--primary-color)] text-sm font-title">STAFF RESIDENT INFORMATION</div>
                        <div className="w-full flex flex-wrap gap-4 py-[15px]">
                            <div className="w-[45%] flex-grow">
                                <InputField
                                    label="Home Address"
                                />
                            </div>
                        </div>

                        <div className="border-b p-[5px] text-[var(--primary-color)] text-sm font-title">STAFF ACCOUNT INFORMATION</div>
                        <div className="w-full flex flex-wrap gap-4 py-[15px]">
                            <div className="w-[30%] flex-grow">
                                <InputField
                                    label="Staff ID"
                                />
                            </div>
                            <div className="w-[30%] flex-grow">
                                <InputField
                                    label="Date OF Registration"
                                />
                            </div>
                            <div className="w-[30%] flex-grow">
                                <InputField
                                    label="Last Login Date"
                                />
                            </div>
                        </div>

                        <div className="border-b p-[5px] text-[var(--primary-color)] text-sm font-title">ADMINISTRATIVE INFORMATION</div>
                        <div className="w-full flex flex-wrap gap-4 py-[15px]">
                            <div className="w-[45%] flex-grow">
                                <SelectField
                                    label="Select Role"
                                    options={[
                                        { value: "option1", label: "Option 1" },
                                        { value: "option2", label: "Option 2" },
                                        { value: "option3", label: "Option 3" },
                                    ]}
                                />
                            </div>
                            <div className="w-[45%] flex-grow">
                                <SelectField
                                    label="Select Status"
                                    options={[
                                        { value: "option1", label: "Option 1" },
                                        { value: "option2", label: "Option 2" },
                                        { value: "option3", label: "Option 3" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                label='UPDATE PROFILE'
                                type="submit"
                                icon={<FaCheckDouble />}
                                title="Login"
                                className='p-[15px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}