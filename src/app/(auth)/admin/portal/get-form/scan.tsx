import { IoClose } from "react-icons/io5";
import QrScanner from "../qrcodescan";

type ScanProps = {
    onClose: () => void;
    id: string;
};

export default function Scan({ onClose, id }: ScanProps) {
    const handleScanSuccess = (decodedText: string, decodedResult: any) => {
        console.log('Scanned:', decodedText);
    };

    return (
        <div className="w-full h-full bg-white/90 flex">
            <div className="w-[20%] h-full bg-white shadow fixed z-20 flex justify-center">
                <div className="w-[90%] pt-[30px] flex flex-col">
                    <div className="w-full h-[250px] rounded">
                        <QrScanner onScanSuccess={handleScanSuccess} />
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[200px]">
                <div className="w-full h-[55px] bg-white shadow fixed z-10 pl-[20%] flex justify-center">
                    <div className="w-[98%] flex justify-between items-center">
                        <div className="font-title">Attendance Scanning</div>

                        <div className="w-[30px] h-[30px] rounded-[50%] bg-[var(--primary-color)] flex justify-center items-center cursor-pointer" title="close" onClick={onClose}><IoClose className="text-white" /></div>
                    </div>
                </div>

                <div className="h-full pt-[60px] overflow-auto pl-[20%] flex justify-center">
                    <div className="w-[98%] h-full bg-white">
                        <table>
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>COURSE CODE</th>
                                    <th>COURSE NAME</th>
                                    <th>LEVEL</th>
                                    <th>DEPARTMENT</th>
                                    <th>SEMESTER</th>
                                    <th>MATRIC NUMBER</th>
                                    <th>DATE</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>CSC101</td>
                                    <td>INTRO TO COMPUTER</td>
                                    <td>100</td>
                                    <td>COMPUTER SCIENCE</td>
                                    <td>FIRST</td>
                                    <td>4543432345</td>
                                    <td>10/05/2025</td>
                                    <td>PRESENT</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>MTH102</td>
                                    <td>CALCULUS I</td>
                                    <td>100</td>
                                    <td>COMPUTER SCIENCE</td>
                                    <td>SECOND</td>
                                    <td>4545656543</td>
                                    <td>11/05/2025</td>
                                    <td>ABSENT</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}