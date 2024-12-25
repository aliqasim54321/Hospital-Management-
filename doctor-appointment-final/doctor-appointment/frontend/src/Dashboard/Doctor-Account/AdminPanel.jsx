/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/formatDate";
import useFetchData from "../../hooks/useFetchData";
import { toast } from "react-toastify";
import { useState } from "react";
import { BASE_URL } from "../../config";
import Appointments from "./Appointments";

const AdminPanel = ({ appointments }) => {



    return (
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Photo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Specialization
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(item => (
                    <ApprovalLists item={item} />
                ))}
            </tbody>
        </table>
    );
};


const ApprovalLists = ({ item }) => {

    const [isApproved, setIsApproved] = useState(item.isApproved);


    async function approveDoctor(id) {
        try {
            const res = await fetch(`${BASE_URL}/doctors/${id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ isApproved: "approved" })
            });

            const result = await res.json();
            if (!res.ok) {
                throw new Error(result.message);
            }

            toast.success(result.message);
            setIsApproved('approved')
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <tr key={item._id} className="bg-white border-b  hover:bg-gray-50 ">
            <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
                <img
                    className="w-10 h-10 rounded-full"
                    src={item.photo}
                    alt={item.name}
                />
                <div className="pl-3">
                    <div className="text-base font-semibold">{item.name}</div>
                    <div className="font-normal text-gray-500">
                        {item.email}
                    </div>
                </div>
            </th>
            <td className="px-6 py-4">{item.specialization ? item.specialization : "none"}</td>
            <td className="px-6 py-4">{item?.ticketPrice ? item.ticketPrice : 0}</td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    {isApproved == 'approved' ?
                        <>
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                            <p>approved</p>
                        </>
                        :
                        <>
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                            <p>Pending</p>
                            <p className="mx-5 cursor-pointer" onClick={() => approveDoctor(item._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 12 2 2 4-4" /></svg>
                            </p>
                        </>
                    }
                </div>
            </td>
        </tr>

    )
}

export default AdminPanel;
