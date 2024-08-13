"use client";

import { useRef, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import PDF from "./PDF";
import { AiOutlineSave, AiTwotoneCloseCircle } from "react-icons/ai";
import Footer from "./Footer";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";

const PdfCompo = () => {
  const inputFile: any = useRef();

  const [file, setFile] = useState<any>();
  const [text, setText] = useState<any>({
    currency: "$",
    invoice: "INVOICE",
    page: 1,
    whoIsThisFrom: "",
    billTo: "Bill To",
    whoIsThisTo: "",
    shipTo: "Ship To",
    shipToOptional: "",
    placeOfSupply: "",
    date: "Date",
    dateTxt: "",
    paymentTerms: "Payment Terms",
    paymentTermsTxt: "",
    dueDate: "Due Date",
    dueDateTxt: "",
    poNumber: "PO Number",
    poNumberTxt: "",
    item: "Item",
    HSN: "HSN/SAC",
    taxDrop: "Tax",
    quantity: "Quantity",
    rate: "Rate",
    amount: "Amount",
    notes: "Payment details",
    notesTxt: "",
    terms: "Terms",
    termsTxt: "",
    subtotal: "Subtotal",
    subtotalTxt: 0,
    discount: "Discount",
    discountTxt: 0,
    discountType: 1,
    discountVisible: false,
    shipping: "Shipping",
    shippingTxt: 0,
    shippingVisible: false,
    total: "Total",
    totalTxt: 0,
    amountPaid: "Amount Paid",
    amountPaidTxt: 0,
    balanceDue: "Balance Due",
    balanceDueTxt: 0,
  });
  const [list, setList] = useState<any>([
    {
      itemTxt: "",
      HSNTxt: "",
      taxDropTxt: { type: 0, value: 0 },
      quantityTxt: 1,
      rateTxt: 0,
      amountTxt: 0,
    },
  ]);
  const [visible, setVisible] = useState(true);
  const [taxDiscountShipping, setTaxDiscountShipping] = useState({
    tax: false,
    discount: true,
    shipping: true,
  });
  const [error, setError] = useState("");
  const { isAuthenticated } = useAuth();

  const taxOptions: any = {
    "0": { name: "No tax", value: 0 },
    "1": { name: "SGST + CGST (5%)", value: 5 },
    "2": { name: "SGST + CGST (12%)", value: 12 },
    "3": { name: "SGST + CGST (18%)", value: 18 },
    "4": { name: "SGST + CGST (28%)", value: 28 },
    "5": { name: "IGST (5%)", value: 5 },
    "6": { name: "IGST (12%)", value: 12 },
    "7": { name: "IGST (18%)", value: 18 },
    "8": { name: "IGST (28%)", value: 28 },
    "9": { name: "UTGST + CGST (5%)", value: 5 },
    "10": { name: "UTGST + CGST (12%)", value: 12 },
    "11": { name: "UTGST + CGST (18%)", value: 18 },
    "12": { name: "UTGST + CGST (28%)", value: 28 },
  };
  const handleText = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setText((prevText: any) => {
      const updatedText = { ...prevText, [name]: value };
      const totals = calculateTotals(list, updatedText);

      return {
        ...updatedText,
        ...totals,
      };
    });
  };

  const handleArrayAdd = () => {
    const newArray = [
      ...list,
      {
        itemTxt: "",
        HSNTxt: "",
        taxDropTxt: { type: 0, value: 0, name: "No tax", total: 0 },
        quantityTxt: 1,
        rateTxt: 0,
        amountTxt: 0,
      },
    ];
    setList(newArray);
  };

  const handleArrayUpdate = (e: any, type: string, index: number) => {
    const name = e.target.name;
    const value = e.target.value;

    setList((prevList: any) => {
      const updatedList = prevList.map((item: any, i: number) => {
        if (i === index) {
          let updatedItem;
          if (name === "taxDropTxt") {
            const taxOption = taxOptions[value];
            const taxAmount =
              (item.quantityTxt * item.rateTxt * taxOption.value) / 100;
            updatedItem = {
              ...item,
              taxDropTxt: {
                type: Number(value),
                value: taxOption.value,
                name: taxOption.name,
                total: taxAmount,
              },
              amountTxt:
                (item.quantityTxt || 0) * (item.rateTxt || 0) + taxAmount,
            };
          } else {
            updatedItem = { ...item, [name]: value };
            const taxAmount =
              (updatedItem.quantityTxt *
                updatedItem.rateTxt *
                updatedItem.taxDropTxt.value) /
              100;
            updatedItem.taxDropTxt.total = taxAmount;
            updatedItem.amountTxt =
              updatedItem.quantityTxt * updatedItem.rateTxt + taxAmount;
          }
          return updatedItem;
        }
        return item;
      });

      const totals = calculateTotals(updatedList, text);
      setText((prevText: any) => ({ ...prevText, ...totals }));
      return updatedList;
    });
  };

  const handleArrayDelete = (index: number) => {
    setList((prevList: any) => {
      const updatedList = prevList.filter((_: any, i: number) => i !== index);
      const totals = calculateTotals(updatedList, text);
      setText((prevText: any) => ({ ...prevText, ...totals }));
      return updatedList;
    });
  };

  const toggleDiscountType = () => {
    setText((prevText: any) => {
      const newDiscountType = prevText.discountType === 1 ? 2 : 1;
      const updatedText = { ...prevText, discountType: newDiscountType };
      const totals = calculateTotals(list, updatedText);
      return {
        ...updatedText,
        ...totals,
      };
    });
  };

  const calculateTotals = (list: any[], text: any) => {
    const subtotalTxt = list.reduce((total, item) => total + item.amountTxt, 0);
    const discount =
      text.discountType == 1
        ? (subtotalTxt * text.discountTxt) / 100
        : text.discountTxt;
    const totalTxt = subtotalTxt - discount + Number(text.shippingTxt);
    const balanceDueTxt = totalTxt - Number(text.amountPaidTxt);
    return { subtotalTxt, totalTxt, balanceDueTxt };
  };

  const handleSelectFile = (e: any) => {
    const MAX_FILE_SIZE = 1 * 1024 * 1024; // 2MB in bytes
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError("File size exceeds the 1MB limit.");
        return;
      }

      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleSelectFileClick = () => {
    inputFile.current.click();
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleTxDiscountShipping = (id: number, show: boolean) => {
    if (id === 1) {
      setTaxDiscountShipping({ ...taxDiscountShipping, tax: show });
    } else if (id === 2) {
      setTaxDiscountShipping({ ...taxDiscountShipping, discount: show });
    } else if (id === 3) {
      setTaxDiscountShipping({ ...taxDiscountShipping, shipping: show });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className={`${visible ? "visible" : "hidden"}`}>
        <Header />
        <div className="w-full flex lg:px-16 px-3 lg:gap-10 gap-4 mt-10 lg:flex-row flex-col mb-10 mt-32">
          <div className="bg-white h-full lg:w-5/6 w-full rounded-xl sm:p-5 p-2">
            <div className="flex justify-between lg:flex-row flex-col">
              <input
                type="file"
                accept="image/*"
                ref={inputFile}
                onChange={handleSelectFile}
                hidden
              ></input>
              <button
                className={`text-gray-400 bg-[#f5f5f5] py-12 rounded-md border-[1px] border-[#d5dbe2] flex gap-3 hover:bg-[#EBEBEB] duration-300 justify-center items-center w-[12vw] h-[7vw] min-w-[180px]`}
                onClick={handleSelectFileClick}
              >
                {file ? (
                  <img
                    src={file}
                    alt="logo"
                    className="object-cover w-[12vw] h-[7vw] min-w-[180px] min-h-[100px] rounded-md"
                  ></img>
                ) : (
                  <>
                    <BiSolidImageAdd />
                    Add your logo
                  </>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
              </button>
              <div className="lg:w-2/6 w-full flex flex-col gap-3 lg:items-end lg:mt-0 mt-2">
                <input
                  name="invoice"
                  type="text"
                  accept="image/*"
                  value={text.invoice}
                  onChange={handleText}
                  className="inputHoverShow lg:text-end text-start"
                  style={{
                    fontSize: "35px",
                    color: "black",
                    padding: "0px 15px",
                  }}
                />
                <div className="lg:w-2/4 w-1/4 min-w-[100px] flex items-center gap-1 pl-4 border-[1px] border-[#d5dbe2] rounded-md">
                  <span className="text-gray-500 text-sm">#</span>
                  <input
                    name="page"
                    type="number"
                    value={text.page}
                    onChange={handleText}
                    className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg lg:text-end text-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-4 lg:flex-row flex-col gap-6">
              <div className="lg:w-3/5 w-full">
                <div className="lg:w-3/5 w-full">
                  <textarea
                    name="whoIsThisFrom"
                    placeholder="Who is this from?"
                    className="inputNonHoverShow"
                    // style={{ width: "70%" }}
                    cols={40}
                    value={text.whoIsThisFrom}
                    onChange={handleText}
                  ></textarea>
                </div>
                <div className="flex mt-2 lg:gap-4 gap-2 lg:flex-row flex-col">
                  <div className="w-full flex flex-col gap-1">
                    <input
                      name="billTo"
                      type="text"
                      value={text.billTo}
                      onChange={handleText}
                      className="inputHoverShow"
                    />
                    <textarea
                      name="whoIsThisTo"
                      placeholder="Who is this to?"
                      value={text.whoIsThisTo}
                      onChange={handleText}
                      className="inputNonHoverShow"
                    ></textarea>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <input
                      name="shipTo"
                      type="text"
                      value={text.shipTo}
                      onChange={handleText}
                      className="inputHoverShow"
                    />
                    <textarea
                      name="shipToOptional"
                      placeholder="(optional)"
                      value={text.shipToOptional}
                      onChange={handleText}
                      className="inputNonHoverShow"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1 lg:w-2/5 w-full">
                <div className="flex gap-2">
                  <input
                    name="date"
                    type="text"
                    value={text.date}
                    onChange={handleText}
                    className="inputHoverShow text-end"
                  />
                  <div>
                    <input
                      name="dateTxt"
                      type="text"
                      // type="date"
                      value={text.dateTxt}
                      onChange={handleText}
                      // onClick={handleSelectDateClick}
                      className="inputNonHoverShow text-end"
                    />
                    {/* <input type="date" hidden ref={dateRef} /> */}
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    name="paymentTerms"
                    type="text"
                    value={text.paymentTerms}
                    onChange={handleText}
                    className="inputHoverShow text-end"
                  />
                  <div>
                    <input
                      name="paymentTermsTxt"
                      type="text"
                      value={text.paymentTermsTxt}
                      onChange={handleText}
                      className="inputNonHoverShow text-end"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="dueDate"
                    value={text.dueDate}
                    onChange={handleText}
                    className="inputHoverShow text-end"
                  />
                  <div>
                    <input
                      name="dueDateTxt"
                      type="text"
                      value={text.dueDateTxt}
                      onChange={handleText}
                      className="inputNonHoverShow text-end"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    name="poNumber"
                    type="text"
                    value={text.poNumber}
                    onChange={handleText}
                    className="inputHoverShow text-end"
                  />
                  <div>
                    <input
                      name="poNumberTxt"
                      type="text"
                      value={text.poNumberTxt}
                      onChange={handleText}
                      className="inputNonHoverShow text-end"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span className="w-2/4 text-end text-sm text-gray-500 mr-3">
                Place of Supply:
              </span>
              <input
                name="placeOfSupply"
                type="text"
                value={text?.placeOfSupply}
                onChange={handleText}
                className="inputNonHoverShow text-start sm:!w-60 !w-full"
              />
            </div>

            <div className="lg:flex hidden mt-8 bg-[#192a56] text-white rounded-lg">
              <div className="flex w-full">
                <div className="flex w-full gap-1">
                  <input
                    name="item"
                    type="text"
                    value={text.item}
                    onChange={handleText}
                    className="inputHoverShowWhite w-full"
                  />
                  <input
                    name="HSN"
                    type="text"
                    value={text.HSN}
                    onChange={handleText}
                    className="inputHoverShowWhite w-3/12"
                  />
                </div>

                <input
                  name="taxDrop"
                  type="text"
                  value={text.taxDrop}
                  onChange={handleText}
                  className="inputHoverShowWhite w-3/12"
                />
              </div>

              <div className="flex w-4/12">
                <input
                  name="quantity"
                  type="text"
                  value={text.quantity}
                  onChange={handleText}
                  className="inputHoverShowWhite w-3/5 text-center !px-0 !pl-3 !text-left"
                />
                <input
                  name="rate"
                  type="text"
                  value={text.rate}
                  onChange={handleText}
                  className="inputHoverShowWhite w-full w-3/5"
                />
              </div>

              <input
                name="amount"
                type="text"
                value={text.amount}
                onChange={handleText}
                className="inputHoverShowWhite w-2/12 text-center !px-0 !ml-[-20px]"
              />
            </div>

            {list?.map((item: any, index: number) => (
              <div
                className="lg:flex grid gap-1 border lg:border-transparent border-[#d5dbe2]/50 lg:p-0 p-2 rounded-lg lg:mt-1.5 mt-10"
                key={index}
              >
                <div className="flex gap-1 w-full lg:order-1 order-3">
                  <input
                    name="itemTxt"
                    type="text"
                    placeholder="Description of item / service"
                    value={item?.itemTxt}
                    onChange={(e) => handleArrayUpdate(e, "array", index)}
                    className="inputNonHoverShowNoWidth w-full"
                  />

                  <input
                    name="HSNTxt"
                    type="text"
                    placeholder="HSN/SAC"
                    value={item?.HSNTxt}
                    onChange={(e) => handleArrayUpdate(e, "array", index)}
                    className="inputNonHoverShowNoWidth sm:w-3/12 w-5/12"
                  />
                </div>

                <div className="flex sm:w-8/12 w-full gap-1 lg:order-2 order-2 items-center">
                  <select
                    className="w-8/12 p-2 rounded-lg outline-none bg-white border-[1px] border-[#d5dbe2] text-[12px] lg:order-1 order-4"
                    value={item?.taxDropTxt?.type}
                    name="taxDropTxt"
                    onChange={(e) => handleArrayUpdate(e, "array", index)}
                  >
                    <option value={"0"}>No tax</option>
                    <option value={"1"}>SGST + CGST (5%)</option>
                    <option value={"2"}>SGST + CGST (12%)</option>
                    <option value={"3"}>SGST + CGST (18%)</option>
                    <option value={"4"}>SGST + CGST (28%)</option>
                    <option value={"5"}>IGST (5%)</option>
                    <option value={"6"}>IGST (12%)</option>
                    <option value={"7"}>IGST (18%)</option>
                    <option value={"8"}>IGST (28%)</option>
                    <option value={"9"}>UTGST + CGST (5%)</option>
                    <option value={"10"}>UTGST + CGST (12%)</option>
                    <option value={"11"}>UTGST + CGST (18%)</option>
                    <option value={"12"}>UTGST + CGST (28%)</option>
                  </select>
                  <input
                    name="quantityTxt"
                    type="number"
                    value={item?.quantityTxt}
                    onChange={(e) => handleArrayUpdate(e, "array", index)}
                    className="inputNonHoverShowNoWidth sm:w-2/6 w-2/5 !px-2  sm:order-3 order-1"
                  />
                  <span className="text-gray-500 sm:hidden inline order-2">
                    x
                  </span>

                  <div className="sm:w-3/5 w-3/5 flex items-center gap-1 sm:pl-4 pl-1 border border-[#d5dbe2] rounded-md  lg:order-4 order-2">
                    <span className="text-gray-500 text-sm">
                      {text?.currency}
                    </span>
                    <input
                      name="rateTxt"
                      type="number"
                      value={item?.rateTxt}
                      onChange={(e) => handleArrayUpdate(e, "array", index)}
                      className="w-full text-sm outline-none rounded-sm duration-300 sm:px-3 px-0 py-1.5 border-transparent bg-transparent focus:shadow-lg"
                    />
                  </div>
                </div>

                <span
                  className={`sm:w-2/12 w-full flex items-center lg:justify-center justify-start text-gray-500 text-sm lg:order-3 order-1 ${
                    index === 0 ? "mr-4" : "mr-[-12px]"
                  }`}
                >
                  <span className="lg:hidden inline mr-1">Amount:</span>
                  {text.currency} {item?.amountTxt}
                  {/* {text.quantityTxt[index] * text.rateTxt[index] +
                  (text?.taxDropTxt[index]?.type === "9"
                    ? 0
                    : Number(text?.taxDropTxt[index]?.type) % 2 !== 0
                      ? ((text.quantityTxt[index] *
                        text.rateTxt[index]) *
                        Number(text?.taxDropTxt[index]?.type)) /
                      100
                      : Number(text?.taxDropTxt[index]?.type))} */}
                </span>

                {index !== 0 && (
                  <button
                    className="px-1 py-2 flex items-center justify-center rounded-md text-[#16a085] order-4 duration-300"
                    onClick={() => handleArrayDelete(index)}
                  >
                    <IoMdClose />
                  </button>
                )}
              </div>
            ))}

            <div className="mt-2">
              <button
                className="text-[#16a085] text-sm flex items-center gap-2 px-4 py-2 border border-[#16a085] rounded-md hover:bg-[#16a085] hover:text-white duration-300"
                onClick={handleArrayAdd}
              >
                <IoMdAdd size={16} />
                Line item
              </button>
            </div>

            <div className="flex gap-4 mt-8 lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full flex flex-col gap-1">
                <input
                  name="notes"
                  type="text"
                  value={text.notes}
                  onChange={handleText}
                  className="inputHoverShow"
                />
                <textarea
                  name="notesTxt"
                  placeholder="Details - any relevant information not already covered"
                  value={text.notesTxt}
                  onChange={handleText}
                  className="inputNonHoverShow"
                ></textarea>
                <input
                  name="terms"
                  type="text"
                  value={text.terms}
                  onChange={handleText}
                  className="inputHoverShow mt-5"
                />
                <textarea
                  name="termsTxt"
                  placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                  value={text.termsTxt}
                  onChange={handleText}
                  className="inputNonHoverShow"
                ></textarea>
              </div>
              <div className="lg:w-1/2 w-full flex">
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex gap-1 items-center">
                    <input
                      name="subtotal"
                      type="text"
                      value={text?.subtotal}
                      onChange={handleText}
                      className="inputHoverShow text-end  "
                    />
                    <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                      {text?.currency} {(text?.subtotalTxt).toFixed(2)}
                    </span>
                  </div>

                  {!taxDiscountShipping.discount && (
                    <div className="flex gap-1">
                      <input
                        name="discount"
                        type="text"
                        value={text.discount}
                        onChange={handleText}
                        className="inputHoverShow text-end"
                      />
                      <div className="sm:w-2/4 w-full flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                        <input
                          name="discountTxt"
                          type="number"
                          value={text.discountTxt}
                          onChange={handleText}
                          className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                        />
                        <span className="text-gray-500 text-sm mr-1">
                          {text.discountType === 1 ? "%" : text?.currency}
                        </span>
                        <button
                          className="text-[#34495e] hover:text-white hover:bg-[#34495e] duration-300 h-full w-1/2 border-l flex items-center justify-center rounded-md px-1"
                          onClick={toggleDiscountType}
                        >
                          <HiOutlineRefresh />
                        </button>
                      </div>
                      <button
                        className="sm:px-4 px-1 py-2 rounded-md sm:text-white text-[#16a085] hover:text-[#16a085] duration-300"
                        onClick={() => handleTxDiscountShipping(2, true)}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  )}
                  {!taxDiscountShipping.shipping && (
                    <div className="flex gap-1">
                      <input
                        name="shipping"
                        type="text"
                        value={text.shipping}
                        onChange={handleText}
                        className="inputHoverShow text-end"
                      />
                      <div className="sm:w-2/4 w-full flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                        <input
                          name="shippingTxt"
                          type="number"
                          value={text.shippingTxt}
                          onChange={handleText}
                          className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                        />
                        <span className="text-gray-500 text-sm mr-1">
                          {/* {text.shippingType === 1 ? "%" : text?.currency} */}
                          {text?.currency}
                        </span>
                        {/* <button
                        className="text-[#34495e] hover:text-white hover:bg-[#34495e] duration-300 h-full w-1/2 border-l flex items-center justify-center rounded-md px-1"
                        onClick={() => handleTxDiscountShippingType(3)}
                      >
                        <HiOutlineRefresh />
                      </button> */}
                      </div>
                      <button
                        className="sm:px-4 px-1 py-2 rounded-md sm:text-white text-[#16a085] hover:text-[#16a085] duration-300"
                        onClick={() => handleTxDiscountShipping(3, true)}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  )}

                  <div className="flex justify-end sm:mr-10 mr-2 mt-2 gap-5">
                    {taxDiscountShipping.tax && (
                      <button
                        className="flex gap-1 items-center text-[#16a085] hover:text-[#0f7b65] text-sm px-1 py-2 font-semibold"
                        onClick={() => handleTxDiscountShipping(1, false)}
                      >
                        <IoMdAdd />
                        Tax
                      </button>
                    )}
                    {taxDiscountShipping.discount && (
                      <button
                        className="flex gap-1 items-center text-[#16a085] hover:text-[#0f7b65] text-sm px-1 py-2 font-semibold"
                        onClick={() => handleTxDiscountShipping(2, false)}
                      >
                        <IoMdAdd />
                        Discount
                      </button>
                    )}
                    {taxDiscountShipping.shipping && (
                      <button
                        className="flex gap-1 items-center text-[#16a085] hover:text-[#0f7b65] text-sm px-1 py-2 font-semibold"
                        onClick={() => handleTxDiscountShipping(3, false)}
                      >
                        <IoMdAdd />
                        Shipping
                      </button>
                    )}
                  </div>
                  <div className="flex gap-1 items-center">
                    <input
                      name="total"
                      type="text"
                      value={text.total}
                      onChange={handleText}
                      className="inputHoverShow text-end"
                    />
                    <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                      {text?.currency} {(text?.totalTxt).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-1 sm:mr-12 mr-8 mt-2">
                    <input
                      name="amountPaid"
                      type="text"
                      value={text.amountPaid}
                      onChange={handleText}
                      className="inputHoverShow text-end !mt-0"
                    />
                    <div className="w-2/4 flex items-center gap-1 pl-2 border-[1px] border-[#d5dbe2] rounded-md">
                      <span className="text-gray-500 text-sm mr-1">
                        {text?.currency}{" "}
                      </span>
                      <input
                        name="amountPaidTxt"
                        type="number"
                        value={text.amountPaidTxt}
                        onChange={handleText}
                        className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                      />
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <input
                      name="balanceDue"
                      type="text"
                      value={text.balanceDue}
                      onChange={handleText}
                      className="inputHoverShow text-end  "
                    />
                    <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                      {text?.currency} {(text?.balanceDueTxt).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/6 w-full mt-5 flex flex-col gap-6">
            <button
              className="bg-[#1abc9c] hover:bg-[#16a085] p-2 rounded-lg flex items-center justify-center gap-2 text-white w-full duration-300"
              // onClick={handleDownloadPdf}
              onClick={toggleVisible}
            >
              <FiDownload size={15} />
              Download
            </button>
            {isAuthenticated && (
              <button
                className="bg-white hover:bg-[#2ecc71] hover:text-white border border-[#1abc9c] p-2 rounded-lg flex items-center justify-center gap-2 text-[#1abc9c] w-full duration-300"
                // onClick={handleDownloadPdf}
                onClick={toggleVisible}
              >
                <AiOutlineSave size={15} />
                Save
              </button>
            )}
            <hr />
            <div>
              <p>Currency</p>
              <select
                className="p-2 rounded-lg outline-none bg-white border-[1px] border-[#d5dbe2] mt-2 lg:w-full w-1/3"
                defaultValue={"$"}
                name="currency"
                onChange={handleText}
              >
                <option value="₹">INR</option>
                <option value="$">USD</option>
              </select>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div
        className={`${
          visible ? "hidden" : "visible"
        } w-screen h-full p-5 pt-1 pb-2 mt-1 rounded-xl`}
      >
        <button onClick={toggleVisible}>
          <AiTwotoneCloseCircle size={40} />
        </button>
        <PDF text={text} file={file} list={list} />
      </div>
    </div>
  );
};

export default PdfCompo;
