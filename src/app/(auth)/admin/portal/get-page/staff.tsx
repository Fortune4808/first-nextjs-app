import { FaUsers } from "react-icons/fa";
import Button from "../../../../../../components/ui/button";
import InputField from "../../../../../../components/ui/input";
import { useFormContext } from "../../../../../../components/context/form-context";
import Image from "next/image";

export default function Staff() {
    const { setForm } = useFormContext();

    return (
        <div className="flex flex-col gap-2 pb-[20px]">
            <div className="w-full min-h-[80px] bg-white/90 rounded flex justify-center items-center text-black">
                <div className="w-[98%] flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1 font-bold"><FaUsers className="text-[var(--primary-color)]" />Administrators</div>
                        <div className="flex items-center gap-1 text-[#333] text-[13px]">Active:
                            <span className="text-[var(--primary-color)]">0</span>{" "}| Suspended:<span className="text-[var(--primary-color)]">0</span>
                        </div>
                    </div>

                    <div className="w-[60%] flex items-center gap-2">
                        <InputField
                            label="Type here to search staff"
                            className="!h-[50px]"
                        // value={}
                        // onChange={(e) => setPassowrd(e.target.value)}
                        />

                        <Button
                            label="ADD NEW STAFF"
                            type="submit" className="p-[15px]"
                            icon={<FaUsers />} onClick={() => { setForm('addStaff') }}
                            title="Add New Staff"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full bg-white">
                <table>
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>User Name</th>
                            <th>Contact</th>
                            <th>Role</th>
                            <th>Last Login</th>
                            <th>Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="flex gap-1">
                                    <div className="w-[25px] h-[25px] bg-black rounded">
                                        <Image src="/all-images/image-pix/avatar.jpg" width={25} height={25} className="object-cover rounded" alt="Profile Pix" title="Profile Pix" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-bold">OGUNLEYE OPEYEMI FORTUNE</div>
                                        <div>STF000000009888888888888</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col">
                                    <div>fortunetechglobal001@gmail.com</div>
                                    <div>09056251889</div>
                                </div>
                            </td>
                            <td>ADMIN</td>
                            <td>0:0:0:0:0:0:0:0</td>
                            <td><span className="bg-[var(--active-color)] text-white px-2 py-1 rounded font-semibold">ACTIVE</span></td>
                            <td>
                                <Button label="VIEW" title="VIEW" />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className="flex gap-1">
                                    <Image src="/all-images/image-pix/avatar.jpg" width={25} height={25} className="object-cover rounded" alt="Profile Pix" title="Profile Pix" />
                                    <div className="flex flex-col">
                                        <div className="font-bold">OGUNLEYE OPEYEMI FORTUNE</div>
                                        <div>STF000000009888888888888</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col">
                                    <div>fortunetechglobal001@gmail.com</div>
                                    <div>09056251889</div>
                                </div>
                            </td>
                            <td>ADMIN</td>
                            <td>0:0:0:0:0:0:0:0</td>
                            <td><span className="bg-[var(--inactive-color)] text-red-700 px-2 py-1 rounded italic">INACTIVE</span></td>
                            <td>
                                <Button label="VIEW" title="VIEW" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-center py-2.5">
                    <div className="w-[95%] flex justify-between items-center">
                        <div className="text-[#333]">Showing{" "}<span>1</span>{" "}to{" "}<span>2</span>{" "}of{" "}2{" "}entries</div>

                        <div className="flex gap-2.5">
                            <Button
                                label="PREVIOUS"
                                type="submit" className="py-[10px] px-[25px]"
                                onClick={() => console.log('Clicked')}
                                title="PREVIOUS"
                            />

                            <Button
                                label="NEXT"
                                type="submit" className="py-[10px] px-[25px]"
                                onClick={() => console.log('Clicked')}
                                title="NEXT"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}