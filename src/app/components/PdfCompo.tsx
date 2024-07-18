"use client";

import { useRef, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Test from "./Test";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const PdfCompo = () => {
  const inputFile: any = useRef();
  const dateRef: any = useRef();

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
    date: "Date",
    dateTxt: "",
    paymentTerms: "Payment Terms",
    paymentTermsTxt: "",
    dueDate: "Due Date",
    dueDateTxt: "",
    poNumber: "PO Number",
    poNumberTxt: "",
    item: "Item",
    quantity: "Quantity",
    rate: "Rate",
    amount: "Amount",
    itemTxt1: [""],
    quantityTxt1: [1],
    rateTxt1: [0],
    amountTxt1: [0],
    notes: "Notes",
    notesTxt: "",
    terms: "Terms",
    termsTxt: "",
    subtotal: "Subtotal",
    subtotalTxt: 0,
    discount: "Discount",
    discountTxt: 0,
    discountType: 1,
    tax: "Tax",
    taxTxt: 0,
    taxType: 1,
    shipping: "Shipping",
    shippingTxt: 0,
    // shippingType: 1,
    total: "Total",
    totalTxt: 0,
    amountPaid: "Amount Paid",
    amountPaidTxt: 0,
    balanceDue: "Balance Due",
    balanceDueTxt: 0,
  });
  const [visible, setVisible] = useState(true);
  const [taxDiscountShipping, setTaxDiscountShipping] = useState({
    tax: false,
    discount: true,
    shipping: true,
  });

  const handleSelectFile = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSelectFileClick = () => {
    inputFile.current.click();
  };

  // const handleSelectDateClick = () => {
  //   dateRef.current.showPicker();
  // };

  const handleSetText = (e: any) => {
    console.log(e.target.name, e.target.value, "object");
    let name = e.target.name;
    let value = e.target.value;
    setText((prevText: any) => ({ ...prevText, [name]: value }));
  };

  const handleSetTextArray = (e: any, index: any) => {
    const { name, value } = e.target;

    setText((prevText: any) => {
      const updatedItemTxt1 = [...prevText.itemTxt1];
      const updatedQuantityTxt1 = [...prevText.quantityTxt1];
      const updatedRateTxt1 = [...prevText.rateTxt1];

      if (name === "itemTxt1") {
        updatedItemTxt1[index] = value;
      } else if (name === "quantityTxt1") {
        updatedQuantityTxt1[index] = parseFloat(value) || 0;
      } else if (name === "rateTxt1") {
        updatedRateTxt1[index] = parseFloat(value) || 0;
      }

      return {
        ...prevText,
        itemTxt1: updatedItemTxt1,
        quantityTxt1: updatedQuantityTxt1,
        rateTxt1: updatedRateTxt1,
        amountTxt1: updatedQuantityTxt1.map(
          (qty, i) => qty * updatedRateTxt1[i]
        ),
      };
    });
  };

  const handleDeleteTextArray = (index: number) => {
    setText((prevText: any) => {
      const updatedItemTxt1 = prevText.itemTxt1.filter(
        (_: any, i: any) => i !== index
      );
      const updatedQuantityTxt1 = prevText.quantityTxt1.filter(
        (_: any, i: any) => i !== index
      );
      const updatedRateTxt1 = prevText.rateTxt1.filter(
        (_: any, i: any) => i !== index
      );

      return {
        ...prevText,
        itemTxt1: updatedItemTxt1,
        quantityTxt1: updatedQuantityTxt1,
        rateTxt1: updatedRateTxt1,
        amountTxt1: updatedQuantityTxt1.map(
          (qty: any, i: any) => qty * updatedRateTxt1[i]
        ),
      };
    });
  };

  const handleAddTextArray = () => {
    setText((prevText: any) => ({
      ...prevText,
      itemTxt1: [...prevText.itemTxt1, ""],
      quantityTxt1: [...prevText.quantityTxt1, 1],
      rateTxt1: [...prevText.rateTxt1, 0],
    }));
  };

  // const handleDownloadPdf = async () => {
  //   if (printRef.current) {
  //     const element = printRef.current;

  //     try {
  //       const canvas = await html2canvas(element, {
  //         scale: 2, // Higher scale for better quality
  //         useCORS: true,
  //       });
  //       const data = canvas.toDataURL("image/png");

  //       const pdf = new jsPDF();
  //       const imgProps = pdf.getImageProperties(data);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //       pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  //       pdf.save("download.pdf");
  //     } catch (error) {
  //       console.error("Error generating PDF", error);
  //     }
  //   } else {
  //     console.error("Reference to the element is not available");
  //   }
  // };

  // const handleDownloadPdf = () => {
  //   if (elementRef.current) {
  //     html2pdf().from(elementRef.current).save();
  //   }
  // };

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

  const handleTxDiscountShippingType = (id: number) => {
    if (id === 1) {
      setText((prevText: any) => ({
        ...prevText,
        taxType: prevText.taxType === 1 ? 2 : 1,
      }));
    } else if (id === 2) {
      setText((prevText: any) => ({
        ...prevText,
        discountType: prevText.discountType === 1 ? 2 : 1,
      }));
    } else if (id === 3) {
      setText((prevText: any) => ({
        ...prevText,
        shippingType: prevText.shippingType === 1 ? 2 : 1,
      }));
    }
  };

  const subtotal = text.itemTxt1.reduce((acc: any, item: any, index: any) => {
    return acc + text.quantityTxt1[index] * text.rateTxt1[index];
  }, 0);

  const totalTax = Number(
    text?.taxType === 1 ? (subtotal * text?.taxTxt) / 100 : text?.taxTxt
  );
  const totalDiscount =
    text?.discountType === 1
      ? (subtotal * text?.discountTxt) / 100
      : text?.discountTxt;
  const totalRaw = (
    subtotal +
    totalTax -
    totalDiscount +
    Number(text?.shippingTxt)
  ).toFixed(2);
  const total = Number(totalRaw);
  const balanceDue = total - text?.amountPaidTxt;

  return (
    <>
      <div
        className={`w-full flex lg:px-16 px-4 lg:gap-10 gap-4 mt-10 lg:flex-row flex-col mb-20 ${
          visible ? "visible" : "hidden"
        }`}
      >
        <div className="bg-white h-full lg:w-5/6 w-full rounded-xl p-5">
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
            </button>
            <div className="lg:w-2/6 w-full flex flex-col gap-3 lg:items-end lg:mt-0 mt-2">
              <input
                name="invoice"
                type="text"
                accept="image/*"
                value={text.invoice}
                onChange={handleSetText}
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
                  onChange={handleSetText}
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
                  onChange={handleSetText}
                ></textarea>
              </div>
              <div className="flex mt-2 lg:gap-4 gap-2 lg:flex-row flex-col">
                <div className="w-full flex flex-col gap-1">
                  <input
                    name="billTo"
                    type="text"
                    value={text.billTo}
                    onChange={handleSetText}
                    className="inputHoverShow"
                  />
                  <textarea
                    name="whoIsThisTo"
                    placeholder="Who is this to?"
                    value={text.whoIsThisTo}
                    onChange={handleSetText}
                    className="inputNonHoverShow"
                  ></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    name="shipTo"
                    type="text"
                    value={text.shipTo}
                    onChange={handleSetText}
                    className="inputHoverShow"
                  />
                  <textarea
                    name="shipToOptional"
                    placeholder="(optional)"
                    value={text.shipToOptional}
                    onChange={handleSetText}
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
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="dateTxt"
                    type="text"
                    // type="date"
                    value={text.dateTxt}
                    onChange={handleSetText}
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
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="paymentTermsTxt"
                    type="text"
                    value={text.paymentTermsTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="dueDate"
                  value={text.dueDate}
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="dueDateTxt"
                    type="text"
                    value={text.dueDateTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  name="poNumber"
                  type="text"
                  value={text.poNumber}
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="poNumberTxt"
                    type="text"
                    value={text.poNumberTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex hidden mt-8 bg-[#192a56] text-white rounded-lg pr-8">
            <input
              name="item"
              type="text"
              value={text.item}
              onChange={handleSetText}
              className="inputHoverShowWhite w-full"
            />
            <div className="flex w-3/12">
              <input
                name="quantity"
                type="text"
                value={text.quantity}
                onChange={handleSetText}
                className="inputHoverShowWhite w-4/5 text-center"
                style={{ padding: "0px" }}
              />
              <input
                name="rate"
                type="text"
                value={text.rate}
                onChange={handleSetText}
                className="inputHoverShowWhite w-full w-3/5"
              />
            </div>
            <input
              name="amount"
              type="text"
              value={text.amount}
              onChange={handleSetText}
              className="inputHoverShowWhite w-2/12 text-center"
            />
          </div>

          {text?.itemTxt1.map((item: any, index: number) => (
            <div
              className="lg:flex grid gap-1 border lg:border-transparent border-[#d5dbe2]/50 lg:p-0 p-4 rounded-lg lg:mt-1.5 mt-10"
              key={index}
            >
              <input
                name="itemTxt1"
                type="text"
                placeholder="Description of item/service"
                value={text.itemTxt1[index]}
                onChange={(e) => handleSetTextArray(e, index)}
                className="inputNonHoverShowNoWidth w-full lg:order-1 order-3"
              />

              <div className="flex sm:w-6/12 lg:w-3/12 w-10/12 gap-1 lg:order-2 order-2">
                <input
                  name="quantityTxt1"
                  type="number"
                  value={text.quantityTxt1[index]}
                  onChange={(e) => handleSetTextArray(e, index)}
                  className="inputNonHoverShowNoWidth sm:w-1/3 w-2/5 !px-2"
                />

                <div className="sm:w-2/3 w-3/5 flex items-center gap-1 pl-4 border border-[#d5dbe2] rounded-md">
                  <span className="text-gray-500 text-sm">
                    {text?.currency}
                  </span>
                  <input
                    name="rateTxt1"
                    type="number"
                    value={text.rateTxt1[index]}
                    onChange={(e) => handleSetTextArray(e, index)}
                    className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg"
                  />
                </div>
              </div>

              <span
                className={`sm:w-2/12 w-full flex items-center lg:justify-center justify-start text-gray-500 text-sm lg:order-3 order-1 ${
                  index === 0 ? "mr-9" : "mr-0"
                }`}
              >
                <span className="lg:hidden inline mr-1">Amount:</span>
                {text.currency}{" "}
                {text.quantityTxt1[index] * text.rateTxt1[index]}
              </span>

              {index !== 0 && (
                <button
                  className="px-2 py-2 flex items-center justify-center rounded-md text-[#16a085] order-4 duration-300"
                  onClick={() => handleDeleteTextArray(index)}
                >
                  <IoMdClose />
                </button>
              )}
            </div>
          ))}

          <div className="mt-2">
            <button
              className="text-[#16a085] text-sm flex items-center gap-2 px-4 py-2 border border-[#16a085] rounded-md hover:bg-[#16a085] hover:text-white duration-300"
              onClick={handleAddTextArray}
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
                onChange={handleSetText}
                className="inputHoverShow"
              />
              <textarea
                name="notesTxt"
                placeholder="Notes - any relevant information not already covered"
                value={text.notesTxt}
                onChange={handleSetText}
                className="inputNonHoverShow"
              ></textarea>
              <input
                name="terms"
                type="text"
                value={text.terms}
                onChange={handleSetText}
                className="inputHoverShow mt-5"
              />
              <textarea
                name="termsTxt"
                placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                value={text.termsTxt}
                onChange={handleSetText}
                className="inputNonHoverShow"
              ></textarea>
            </div>
            <div className="lg:w-1/2 w-full flex">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex gap-1 items-center">
                  <input
                    name="subtotal"
                    type="text"
                    value={text.subtotal}
                    onChange={handleSetText}
                    className="inputHoverShow text-end  "
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    {/* {text?.currency} {text.quantityTxt1 * text.rateTxt1} */}
                    {text?.currency} {subtotal}
                  </span>
                </div>
                {!taxDiscountShipping.tax && (
                  <div className="flex gap-1">
                    <input
                      name="tax"
                      type="text"
                      value={text.tax}
                      onChange={handleSetText}
                      className="inputHoverShow text-end"
                    />
                    <div className="sm:w-2/4 w-full flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                      <input
                        name="taxTxt"
                        type="number"
                        value={text.taxTxt}
                        onChange={handleSetText}
                        className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                      />
                      <span className="text-gray-500 text-sm mr-2">
                        {text.taxType === 1 ? "%" : text?.currency}
                      </span>
                      <button
                        className="text-[#34495e] hover:text-white hover:bg-[#34495e] duration-300 h-full w-1/2 border-l flex items-center justify-center rounded-md px-1"
                        onClick={() => handleTxDiscountShippingType(1)}
                      >
                        <HiOutlineRefresh />
                      </button>
                    </div>
                    <button
                      className="sm:px-4 px-1 py-2 rounded-md sm:text-white text-[#16a085] hover:text-[#16a085] duration-300"
                      onClick={() => handleTxDiscountShipping(1, true)}
                    >
                      <IoMdClose />
                    </button>
                  </div>
                )}
                {!taxDiscountShipping.discount && (
                  <div className="flex gap-1">
                    <input
                      name="discount"
                      type="text"
                      value={text.discount}
                      onChange={handleSetText}
                      className="inputHoverShow text-end"
                    />
                    <div className="sm:w-2/4 w-full flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                      <input
                        name="discountTxt"
                        type="number"
                        value={text.discountTxt}
                        onChange={handleSetText}
                        className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                      />
                      <span className="text-gray-500 text-sm mr-2">
                        {text.discountType === 1 ? "%" : text?.currency}
                      </span>
                      <button
                        className="text-[#34495e] hover:text-white hover:bg-[#34495e] duration-300 h-full w-1/2 border-l flex items-center justify-center rounded-md px-1"
                        onClick={() => handleTxDiscountShippingType(2)}
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
                      onChange={handleSetText}
                      className="inputHoverShow text-end"
                    />
                    <div className="sm:w-2/4 w-full flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                      <input
                        name="shippingTxt"
                        type="number"
                        value={text.shippingTxt}
                        onChange={handleSetText}
                        className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                      />
                      <span className="text-gray-500 text-sm mr-2">
                        {text.shippingType === 1 ? "%" : text?.currency}
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
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    {/* $ {text.totalTxt} */}
                    {text?.currency}{" "}
                    {/* {text.quantityTxt1 * text.rateTxt1 +
                      (text.quantityTxt1 * text.rateTxt1 * text.taxTxt) / 100} */}
                    {total}
                  </span>
                </div>
                <div className="flex gap-1 sm:mr-12 mr-8">
                  <input
                    name="amountPaid"
                    type="text"
                    value={text.amountPaid}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <div className="w-2/4 flex items-center gap-1 pl-2 mt-2 border-[1px] border-[#d5dbe2] rounded-md">
                    <span className="text-gray-500 text-sm mr-2">
                      {text?.currency}{" "}
                    </span>
                    <input
                      name="amountPaidTxt"
                      type="number"
                      value={text.amountPaidTxt}
                      onChange={handleSetText}
                      className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                    />
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    name="balanceDue"
                    type="text"
                    value={text.balanceDue}
                    onChange={handleSetText}
                    className="inputHoverShow text-end  "
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    {/* $ {text.balanceDueTxt} */}
                    {text?.currency}{" "}
                    {/* {text.quantityTxt1 * text.rateTxt1 +
                      (text.quantityTxt1 * text.rateTxt1 * text.taxTxt) / 100 -
                      text.amountPaidTxt} */}
                    {balanceDue}
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
          <hr />
          <div>
            <p>Currency</p>
            <select
              className="p-2 rounded-lg outline-none bg-white border-[1px] border-[#d5dbe2] mt-2 lg:w-full w-1/3"
              defaultValue={"$"}
              name="currency"
              onChange={handleSetText}
            >
              <option value="₹">INR</option>
              <option value="$">USD</option>
            </select>
          </div>
        </div>
        {/* <Pdf fileData={file} textData={text} ref={elementRef} /> */}
      </div>
      <div
        className={`${
          visible ? "hidden" : "visible"
        } w-full h-full p-5 pt-1 pb-2 mt-1 rounded-xl`}
      >
        <button onClick={toggleVisible}>
          <AiTwotoneCloseCircle size={40} />
        </button>
        <Test text={text} file={file} />
      </div>
    </>
  );
};

export default PdfCompo;
