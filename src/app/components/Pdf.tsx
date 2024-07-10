"use client";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { BiSolidImageAdd } from "react-icons/bi";
import { forwardRef, useEffect, useState } from "react";

interface PdfProps {
  fileData: any;
  textData: string;
}

const demoData = {
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
  itemTxt1: "",
  quantityTxt1: 1,
  rateTxt1: 0,
  amountTxt1: 0,
  notes: "Notes",
  notesTxt: "",
  terms: "Terms",
  termsTxt: "",
  subtotal: "Subtotal",
  subtotalTxt: 0,
  discount: "Discount",
  discountTxt: 0,
  discountType: "%",
  tax: "Tax",
  taxTxt: 0,
  taxType: "%",
  shipping: "Shipping",
  shippingTxt: 0,
  shippingType: "%",
  total: "Total",
  totalTxt: 0,
  amountPaid: "Amount Paid",
  amountPaidTxt: 0,
  balanceDue: "Balance Due",
  balanceDueTxt: 0,
};

const Pdf = forwardRef<HTMLDivElement, PdfProps>(
  ({ fileData, textData }, ref) => {
    const [file, setFile] = useState();
    const [text, setText] = useState<any>();

    useEffect(() => {
      setText(textData);
    }, [textData]);

    const handleSetText = (e: any) => {
      let name = e.target.name;
      let value = e.target.value;
      setText((prevText: any) => ({ ...prevText, [name]: value }));
    };

    return (
      <>
        <div
          className="bg-white h-[1123px] lg:w-5/6 w-[794px] rounded-xl p-5 hidden"
          ref={ref}
        >
          <div className="flex justify-between lg:flex-row flex-col">
            <button
              className={`text-gray-400 bg-[#f5f5f5] py-12 rounded-md border-[1px] border-[#d5dbe2] flex gap-3 hover:bg-[#EBEBEB] duration-300 justify-center items-center w-[12vw] h-[7vw] min-w-[180px]`}
            >
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
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
                value={text?.invoice}
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
                  value={text?.page}
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
                  value={text?.whoIsThisFrom}
                  onChange={handleSetText}
                ></textarea>
              </div>
              <div className="flex mt-2 lg:gap-4 gap-2 lg:flex-row flex-col">
                <div className="w-full flex flex-col gap-1">
                  <input
                    name="billTo"
                    type="text"
                    value={text?.billTo}
                    onChange={handleSetText}
                    className="inputHoverShow"
                  />
                  <textarea
                    name="whoIsThisTo"
                    placeholder="Who is this to?"
                    value={text?.whoIsThisTo}
                    onChange={handleSetText}
                    className="inputNonHoverShow"
                  ></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    name="shipTo"
                    type="text"
                    value={text?.shipTo}
                    onChange={handleSetText}
                    className="inputHoverShow"
                  />
                  <textarea
                    name="shipToOptional"
                    placeholder="(optional)"
                    value={text?.shipToOptional}
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
                  value={text?.date}
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="dateTxt"
                    type="text"
                    value={text?.dateTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end cursor-pointer"
                  />
                  {/* <input type="date" hidden ref={dateRef} /> */}
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  name="paymentTerms"
                  type="text"
                  value={text?.paymentTerms}
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="paymentTermsTxt"
                    type="text"
                    value={text?.paymentTermsTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="dueDate"
                  value={text?.dueDate}
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="dueDateTxt"
                    type="text"
                    value={text?.dueDateTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  name="poNumber"
                  type="text"
                  value={text?.poNumber}
                  onChange={handleSetText}
                  className="inputHoverShow text-end"
                />
                <div>
                  <input
                    name="poNumberTxt"
                    type="text"
                    value={text?.poNumberTxt}
                    onChange={handleSetText}
                    className="inputNonHoverShow text-end"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex hidden mt-8 bg-[#192a56] text-white rounded-lg">
            <input
              name="item"
              type="text"
              value={text?.item}
              onChange={handleSetText}
              className="inputHoverShowWhite w-full"
            />
            <div className="flex w-3/12">
              <input
                name="quantity"
                type="text"
                value={text?.quantity}
                onChange={handleSetText}
                className="inputHoverShowWhite w-2/5 text-center"
                style={{ padding: "0px" }}
              />
              <input
                name="rate"
                type="text"
                value={text?.rate}
                onChange={handleSetText}
                className="inputHoverShowWhite w-full w-3/5"
              />
            </div>
            <input
              name="amount"
              type="text"
              value={text?.amount}
              onChange={handleSetText}
              className="inputHoverShowWhite w-2/12 text-center"
            />
          </div>

          <div className="lg:flex grid gap-1 border lg:border-transparent border-[#d5dbe2]/50 lg:p-0 p-4 rounded-lg lg:mt-1.5 mt-10">
            <input
              name="itemTxt1"
              type="text"
              placeholder={"Description of item/service"}
              value={text?.itemTxt1}
              onChange={handleSetText}
              className="inputNonHoverShowNoWidth w-full lg:order-1 order-3"
            />
            <div className="flex w-3/12 gap-1 lg:order-2 order-2">
              <input
                name="quantityTxt1"
                type="number"
                value={text?.quantityTxt1}
                onChange={handleSetText}
                className="inputNonHoverShowNoWidth w-1/3"
              />
              <div className="w-2/3 flex items-center gap-1 pl-4 border-[1px] border-[#d5dbe2] rounded-md">
                <span className="text-gray-500 text-sm">$</span>
                <input
                  name="rateTxt1"
                  type="number"
                  value={text?.rateTxt1}
                  onChange={handleSetText}
                  className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg"
                />
              </div>
            </div>
            <span className="w-2/12 flex items-center lg:justify-center justify-start text-gray-500 text-sm lg:order-3 order-1">
              <span className="lg:hidden inline mr-1">Amount:</span>$
              {text?.amountTxt1}
            </span>
          </div>

          <div className="mt-2">
            <button className="text-[#16a085] text-sm flex items-center gap-2 px-4 py-2 border border-[#16a085] rounded-md hover:bg-[#16a085] hover:text-white duration-300">
              <IoMdAdd size={16} />
              Line item
            </button>
          </div>

          <div className="flex gap-4 mt-8 lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full flex flex-col gap-1">
              <input
                name="notes"
                type="text"
                value={text?.notes}
                onChange={handleSetText}
                className="inputHoverShow"
              />
              <textarea
                name="notesTxt"
                placeholder="Notes - any relevant information not already covered"
                value={text?.notesTxt}
                onChange={handleSetText}
                className="inputNonHoverShow"
              ></textarea>
              <input
                name="terms"
                type="text"
                value={text?.terms}
                onChange={handleSetText}
                className="inputHoverShow mt-5"
              />
              <textarea
                name="termsTxt"
                placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                value={text?.termsTxt}
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
                    value={text?.subtotal}
                    onChange={handleSetText}
                    className="inputHoverShow text-end  "
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    $ {text?.subtotalTxt}
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    name="tax"
                    type="text"
                    value={text?.tax}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <div className="w-2/4 flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                    <input
                      name="taxTxt"
                      type="number"
                      value={text?.taxTxt}
                      onChange={handleSetText}
                      className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                    />
                    <span className="text-gray-500 text-sm mr-2">
                      {text?.taxType}
                    </span>
                    <button className="text-[#34495e] hover:text-white hover:bg-[#34495e] duration-300 h-full w-1/2 border-l flex items-center justify-center rounded-md">
                      <HiOutlineRefresh />
                    </button>
                  </div>
                  <button className="px-4 py-2 rounded-md text-white hover:text-[#16a085] duration-300">
                    <IoMdClose />
                  </button>
                </div>
                <div className="flex justify-end mr-10 mt-2">
                  <button className="flex gap-1 items-center text-[#16a085] hover:text-[#0f7b65] text-sm px-4 py-2 font-semibold">
                    <IoMdAdd />
                    Tax
                  </button>
                  <button className="flex gap-1 items-center text-[#16a085] hover:text-[#0f7b65] text-sm px-4 py-2 font-semibold">
                    <IoMdAdd />
                    Discount
                  </button>
                  <button className="flex gap-1 items-center text-[#16a085] hover:text-[#0f7b65] text-sm px-4 py-2 font-semibold">
                    <IoMdAdd />
                    Shipping
                  </button>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    name="total"
                    type="text"
                    value={text?.total}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    $ {text?.totalTxt}
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    name="amountPaid"
                    type="text"
                    value={text?.amountPaid}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <div className="w-2/4 flex items-center gap-1 pl-2 mr-12 mt-2 border-[1px] border-[#d5dbe2] rounded-md">
                    <span className="text-gray-500 text-sm mr-2">$</span>
                    <input
                      name="amountPaidTxt"
                      type="number"
                      value={text?.amountPaidTxt}
                      onChange={handleSetText}
                      className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                    />
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    name="balanceDue"
                    type="text"
                    value={text?.balanceDue}
                    onChange={handleSetText}
                    className="inputHoverShow text-end  "
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    $ {text?.balanceDueTxt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default Pdf;
