"use client";
import { useEffect, useState } from "react";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import MiniLoader from "./MiniLoader";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import Image from "next/image";
import { CiImageOff } from "react-icons/ci";

const Modal = ({ setText, setList, setFile }: any) => {
  const { isAuthenticated, setShowSavedInvoices } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [editNumber, setEditNumber] = useState<any>();
  const [editValue, setEditValue] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(`/api/v1/invoice/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("nexinvoice-token")}`,
        },
      });
      let data = await res.json();
      setData(data?.result);
      console.log(data?.result)
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    setIsSaving(true);
    await fetch(`/api/v1/invoice/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("nexinvoice-token")}`,
      },
      body: JSON.stringify({
        id,
      }),
    });
    setIsSaving(false);
    fetchData();
  };

  const handleEdit = async (id: number, e: any) => {
    setIsSaving(true);
    await fetch(`/api/v1/singleSaves/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("nexinvoice-token")}`,
      },
      body: JSON.stringify({
        id,
        value: editValue,
      }),
    });
    setIsSaving(false);
    setEditNumber("");
    fetchData();
  };

  const handleSelect = (index: number) => {
    setText(data[index]);
    setList(data[index]?.invoiceitems);
    setFile(data[index]?.logo);
  }

  const closeModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setShowSavedInvoices(false);
    }
  }

  return (
    <div className="bg-black/40 fixed inset-0 h-screen w-full flex items-center justify-center"
      onClick={closeModal}>
      <div className="bg-white rounded-xl w-[80vw] p-3 max-h-[70vh] overflow-y-auto">
        <div className="w-full flex items-center justify-between mb-2 ">
          <p>Saved Invoices</p>
          <button
            className="hover:bg-gray-300 rounded-xl p-2 duration-300"
            onClick={() => setShowSavedInvoices(false)}
          >
            <IoMdClose />
          </button>
        </div>
        {isLoading ? (
          <div className="w-full text-center">
            <MiniLoader />
          </div>
        ) : data?.length > 0 ? (
          <ul className="flex flex-col lg:gap-0 gap-5">
            <div className="w-full flex gap-2 text-gray-500 text-sm lg:flex hidden">
              <div className="w-3/12 flex flex-row items-center">
                <span className="w-[30px]">S.N</span>
                <span className="w-4/12 text-center">Logo</span>
                <span className="w-8/12">Invoice name</span>
              </div>
              <div className="w-9/12 flex flex-row items-center mr-10">
                <span className="w-1/2">From</span>
                <span className="w-1/2">To</span>
              </div>
            </div>
            {data?.map((item: any, index: number) => (
              <li className="w-full flex flex-row items-center gap-2 mt-1.5 border rounded-lg" key={index}>
                <div className="w-full cursor-pointer hover:bg-gray-200 rounded-lg p-1 duration-300 flex gap-2 items-center lg:flex-row flex-col"
                  onClick={() => {
                    setShowSavedInvoices(false);
                    handleSelect(index);
                  }}
                >
                  <div className="lg:w-3/12 w-full flex flex-row items-center">
                    <span className="w-[30px]">
                      {index + 1}.
                    </span>
                    <div className="lg:w-4/12 sm:w-2/12 w-4/12">

                      {item?.logo ?
                        <Image
                          src={item?.logo}
                          alt="logo"
                          height={200}
                          width={200}
                          className="rounded-md w-14 h-14 object-cover m-auto"
                        />
                        :
                        <CiImageOff className="rounded-md text-gray-200 w-14 h-14 object-cover" />
                      }
                    </div>

                    <span className="lg:w-8/12 sm:w-10/12 w-8/12">
                      {item?.invoice || ""}
                    </span>
                  </div>
                  <div className="lg:w-9/12 w-full flex flex-row items-center">
                    <span className="w-1/2">
                      {item?.whoIsThisFrom || ""}
                    </span>
                    <span className="w-1/2">
                      {item?.whoIsThisTo || ""}
                    </span>
                  </div>

                </div>

                <button
                  className="bg-red-100 hover:bg-red-200 text-red-500 rounded-md p-2 duration-300"
                  onClick={() => handleDelete(item?.id)}
                >
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 w-full text-center">
            No saved invoice found
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;
