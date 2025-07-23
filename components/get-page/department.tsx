import { FaGoogleScholar } from "react-icons/fa6";
import Button from "../button";
import InputField from "../input";
import { useFormContext } from "../context/form-context";

export default function Main() {
    const { setForm } = useFormContext();

    return (
        <div className="flex flex-col gap-2 pb-[20px]">
            <div className="w-full min-h-[80px] bg-white/90 rounded flex justify-center items-center text-black">
                <div className="w-[98%] flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1 font-bold"><FaGoogleScholar className="text-[var(--primary-color)]" />Department</div>
                        <div className="flex items-center gap-1 text-[#333] text-[13px]">Active:
                            <span className="text-[var(--primary-color)]">0</span>{" "}| Suspended:<span className="text-[var(--primary-color)]">0</span>
                        </div>
                    </div>

                    <div className="w-[50%] flex items-center gap-2">
                        <InputField
                            id=""
                            label="Type here to search department"
                            className="!h-[50px]"
                        // value={}
                        // onChange={(e) => setPassowrd(e.target.value)}
                        />

                        <Button
                            id="submit"
                            label="ADD NEW DEPARTMENT"
                            type="submit" className="p-[15px]"
                            icon={FaGoogleScholar} onClick={() => {setForm('addDepartment')}}
                            title="ADD NEW DEPARTMENT"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full bg-white">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>DEPARTMENT NAME</th>
                            <th>CREATED BY</th>
                            <th>NUMBER OF STAFF</th>
                            <th>NUMBER OF STUDENTS</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
                            <td>ACTIVE</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
                            <td>ACTIVE</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
                            <td>ACTIVE</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
                            <td>ACTIVE</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-center py-2.5">
                    <div className="w-[95%] flex justify-between items-center">
                        <div className="text-[#333]">Showing{" "}<span>1</span>{" "}to{" "}<span>2</span>{" "}of{" "}2{" "}entries</div>

                        <div className="flex gap-2.5">
                            <Button
                                id=""
                                label="PREVIOUS"
                                type="submit" className="py-[10px] px-[25px]"
                                onClick={() => console.log('Clicked')}
                                title="PREVIOUS"
                            />

                            <Button
                                id=""
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