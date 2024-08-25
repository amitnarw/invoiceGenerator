"use client";
import { useEffect, useState } from "react";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import MiniLoader from "./MiniLoader";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";

const Modal = ({ modal, handleModalValues, handlePClick }: any) => {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [editNumber, setEditNumber] = useState<any>();
  const [editValue, setEditValue] = useState("");

  const { show, title, key } = modal;
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(`/api/v1/singleSaves/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("nexinvoice-token")}`,
        },
        body: JSON.stringify({
          key,
        }),
      });
      let data = await res.json();
      setData(data?.result);
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
    await fetch(`/api/v1/singleSaves/delete`, {
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

  const closeModal = (e: any) => {
    if (e.target === e.currentTarget) {
      handleModalValues(false, "")
    }
  }

  return (
    <div className="bg-black/40 fixed inset-0 h-screen w-full flex items-center justify-center"
    onClick={closeModal}
    >
      <div className="bg-white rounded-xl w-96 p-3 max-h-[70vh] overflow-y-auto">
        <div className="w-full flex items-center justify-between mb-2 ">
          <p>{title}</p>
          <button
            className="hover:bg-gray-300 rounded-xl p-2 duration-300"
            onClick={() => handleModalValues(false, "")}
          >
            <IoMdClose />
          </button>
        </div>
        {isLoading ? (
          <div className="w-full text-center">
            <MiniLoader />
          </div>
        ) : data?.length > 0 ? (
          <ul>
            {data?.map((item: any, index: number) => (
              <li className="w-full flex items-center gap-2 mt-1.5" key={index}>
                {editNumber === index ? (
                  <input
                    type="text"
                    placeholder="Value"
                    name="value"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="inputNonHoverShow text-center"
                  />
                ) : (
                  <p
                    className="w-full cursor-pointer hover:bg-gray-200 rounded-lg text-center p-1 duration-300"
                    onClick={() => {
                      handlePClick(key, item?.value, index);
                      handleModalValues(false, "");
                    }}
                  >
                    {item?.value}
                  </p>
                )}
                {isSaving ? (
                  <MiniLoader />
                ) : (
                  <>
                    {editNumber === index ? (
                      <>
                        <button
                          className="p-2 rounded-lg bg-[#2ecc71]/20 hover:bg-[#27ae60]/50 text-[#27ae60] duration-300"
                          onClick={(e) => handleEdit(item?.id, e)}
                        >
                          <AiOutlineSave />
                        </button>
                        <button
                          className="p-2 rounded-lg bg-black/20 hover:bg-black/50 text-<IoIosCloseCircle /> duration-300"
                          onClick={() => setEditNumber("")}
                        >
                          <IoIosCloseCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        className="bg-blue-100 hover:bg-blue-200 text-blue-500 rounded-md p-2 duration-300"
                        onClick={() => {
                          setEditNumber(index);
                          setEditValue(item?.value);
                        }}
                      >
                        <MdEdit />
                      </button>
                    )}
                    <button
                      className="bg-red-100 hover:bg-red-200 text-red-500 rounded-md p-2 duration-300"
                      onClick={() => handleDelete(item?.id)}
                    >
                      <MdDelete />
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 w-full text-center">
            No saved data found
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;