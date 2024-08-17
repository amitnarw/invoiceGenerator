"use client"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { useAuth } from "../context/AuthContext";
import MiniLoader from "./MiniLoader";
import { MdDelete, MdEdit } from "react-icons/md";


const Modal = ({ modal, handleModalValues }: any) => {
    const { isAuthenticated } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>([]);

    const { show, title, key } = modal;
    useEffect(() => {
        console.log(key, "KEY")
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let res = await fetch(`/api/v1/singleSaves/get`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("nexinvoice-token")}`,
                    },
                    body: JSON.stringify({
                        key
                    })
                });
                let data = await res.json();
                console.log(data, 'llllll')
                setData(data?.result);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.error(err);
            }
        }
        fetchData();
    }, [])

    const handleDelete = () => {

    }

    return (
        <div className="bg-black/40 fixed inset-0 h-screen w-full flex items-center justify-center">
            <div className="bg-white rounded-xl w-96 p-3 max-h-[70vh] overflow-scroll">
                <div className="w-full flex items-center justify-between mb-2 ">
                    <p>
                        {title}
                    </p>
                    <button className="hover:bg-gray-300 rounded-xl p-2 duration-300"
                        onClick={() => handleModalValues(false, "")}
                    >
                        <IoMdClose />
                    </button>
                </div>
                {isLoading ?
                    <div className="w-full text-center">
                        <MiniLoader />
                    </div>
                    :
                    data?.length > 0 ?
                        <ul>
                            {data?.map((item: any, index: number) => (
                                <li className="w-full flex items-center gap-2 mt-1.5" key={index}>
                                    <p className="w-full cursor-pointer hover:bg-gray-200 rounded-lg text-center p-1 duration-300">{item?.value}</p>
                                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-500 rounded-md p-2 duration-300">
                                        <MdEdit />
                                    </button>
                                    <button className="bg-red-100 hover:bg-red-200 text-red-500 rounded-md p-2 duration-300">
                                        <MdDelete />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        :
                        <p className="text-gray-400 w-full text-center">No saved data found</p>
                }
            </div>
        </div>
    )
}

export default Modal;