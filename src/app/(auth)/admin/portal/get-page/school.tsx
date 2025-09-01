import { LuSchool } from "react-icons/lu";
import Button from "../../../../../../components/ui/button";
import InputField from "../../../../../../components/ui/input";
import { useFormContext } from "../../../../../../components/context/form-context";

export default function School() {
    const { setForm } = useFormContext();

    return (
        <div className="flex flex-col gap-2 pb-[20px]">
            <div className="w-full min-h-[80px] bg-white/90 rounded flex justify-center items-center text-black">
                <div className="w-[98%] flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1 font-bold"><LuSchool className="text-[var(--primary-color)]" />School</div>
                        <div className="flex items-center gap-1 text-[#333] text-[13px]">Active:
                            <span className="text-[var(--primary-color)]">0</span>{" "}| Suspended:<span className="text-[var(--primary-color)]">0</span>
                        </div>
                    </div>

                    <div className="w-[50%] flex items-center gap-2">
                        <InputField
                            label="Type here to search school"
                            className="!h-[50px]"
                        />

                        <Button
                            label="ADD NEW SCHOOL"
                            type="submit" className="p-[15px]"
                            icon={<LuSchool/>} onClick={() => { setForm('addDepartment') }}
                            title="ADD NEW SCHOOL"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full bg-white">
                <table>
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>School Name</th>
                            <th>Created By</th>
                            <th>Number Of Staff</th>
                            <th>Number Of Students</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>View</th>
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
                            <td><span className="bg-[var(--active-color)] text-white px-2 py-1 rounded font-semibold">ACTIVE</span></td>
                            <td>
                                <Button label="VIEW" title="VIEW" onClick={() => setForm('schoolDashboard')} />
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
                            <td><span className="bg-[var(--active-color)] text-white px-2 py-1 rounded font-semibold">ACTIVE</span></td>
                            <td>
                                <Button label="VIEW" title="VIEW" />
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
                            <td><span className="bg-[var(--inactive-color)] text-red-700 px-2 py-1 rounded italic">INACTIVE</span></td>
                            <td>
                                <Button label="VIEW" title="VIEW" />
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>COMPUTER SCIENCE</td>
                            <td>ADMINISTATOR</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/05/2025</td>
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