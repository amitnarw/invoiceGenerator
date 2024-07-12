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
  });
  const [visible, setVisible] = useState(true);

  const handleSelectFile = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSelectFileClick = () => {
    inputFile.current.click();
  };

  const handleSelectDateClick = () => {
    dateRef.current.showPicker();
  };

  const handleSetText = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setText((prevText: any) => ({ ...prevText, [name]: value }));
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

  return (
    <>
      <div
        className={`w-full flex lg:px-16 px-4 lg:gap-10 gap-4 mt-10 lg:flex-row flex-col mb-20 ${
          visible ? "visible" : "hidden"
        }`}
      >
        <div
          className="bg-white h-full lg:w-5/6 w-full rounded-xl p-5"
          // ref={printRef}
          // ref={elementRef}
        >
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
                  // src={URL.createObjectURL(file)}
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
                    value={text.dateTxt}
                    onChange={handleSetText}
                    onClick={handleSelectDateClick}
                    className="inputNonHoverShow text-end cursor-pointer"
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

          <div className="lg:flex hidden mt-8 bg-[#192a56] text-white rounded-lg">
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
                className="inputHoverShowWhite w-2/5 text-center"
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

          <div className="lg:flex grid gap-1 border lg:border-transparent border-[#d5dbe2]/50 lg:p-0 p-4 rounded-lg lg:mt-1.5 mt-10">
            <input
              name="itemTxt1"
              type="text"
              placeholder={"Description of item/service"}
              value={text.itemTxt1}
              onChange={handleSetText}
              className="inputNonHoverShowNoWidth w-full lg:order-1 order-3"
            />
            <div className="flex w-3/12 gap-1 lg:order-2 order-2">
              <input
                name="quantityTxt1"
                type="number"
                value={text.quantityTxt1}
                onChange={handleSetText}
                className="inputNonHoverShowNoWidth w-1/3"
              />
              <div className="w-2/3 flex items-center gap-1 pl-4 border-[1px] border-[#d5dbe2] rounded-md">
                <span className="text-gray-500 text-sm">$</span>
                <input
                  name="rateTxt1"
                  type="number"
                  value={text.rateTxt1}
                  onChange={handleSetText}
                  className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg"
                />
              </div>
            </div>
            <span className="w-2/12 flex items-center lg:justify-center justify-start text-gray-500 text-sm lg:order-3 order-1">
              <span className="lg:hidden inline mr-1">Amount:</span>$
              {/* {text.amountTxt1} */}
              {text.quantityTxt1 * text.rateTxt1}
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
                    {/* $ {text.subtotalTxt} */}$
                    {text.quantityTxt1 * text.rateTxt1}
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    name="tax"
                    type="text"
                    value={text.tax}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <div className="w-2/4 flex items-center gap-1 border-[1px] border-[#d5dbe2] rounded-md">
                    <input
                      name="taxTxt"
                      type="number"
                      value={text.taxTxt}
                      onChange={handleSetText}
                      className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 border-transparent bg-transparent focus:shadow-lg text-start"
                    />
                    <span className="text-gray-500 text-sm mr-2">
                      {text.taxType}
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
                    value={text.total}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <span className="w-2/4 text-end text-sm text-gray-500 mr-14">
                    {/* $ {text.totalTxt} */}${" "}
                    {text.quantityTxt1 * text.rateTxt1 +
                      (text.quantityTxt1 * text.rateTxt1 * text.taxTxt) / 100}
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    name="amountPaid"
                    type="text"
                    value={text.amountPaid}
                    onChange={handleSetText}
                    className="inputHoverShow text-end"
                  />
                  <div className="w-2/4 flex items-center gap-1 pl-2 mr-12 mt-2 border-[1px] border-[#d5dbe2] rounded-md">
                    <span className="text-gray-500 text-sm mr-2">$</span>
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
                    {/* $ {text.balanceDueTxt} */}${" "}
                    {text.quantityTxt1 * text.rateTxt1 +
                      (text.quantityTxt1 * text.rateTxt1 * text.taxTxt) / 100 -
                      text.amountPaidTxt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/6 w-full mt-5 flex flex-col gap-6">
          <button
            className="bg-[#1abc9c] hover:bg-[#16a085] p-2 rounded-lg flex items-center justify-center gap-2 text-white lg:w-full w-1/3 duration-300"
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
              defaultValue={"USD"}
            >
              <option value="AED">AED</option>
              <option value="AFN">AFN</option>
              <option value="ALL">ALL</option>
              <option value="AMD">AMD</option>
              <option value="ANG">ANG</option>
              <option value="AOA">AOA</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="AWG">AWG</option>
              <option value="AZN">AZN</option>
              <option value="BAM">BAM</option>
              <option value="BBD">BBD</option>
              <option value="BDT">BDT</option>
              <option value="BGN">BGN</option>
              <option value="BHD">BHD</option>
              <option value="BIF">BIF</option>
              <option value="BMD">BMD</option>
              <option value="BND">BND</option>
              <option value="BOB">BOB</option>
              <option value="BOV">BOV</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="BTN">BTN</option>
              <option value="BWP">BWP</option>
              <option value="BYN">BYN</option>
              <option value="BZD">BZD</option>
              <option value="CAD">CAD</option>
              <option value="CDF">CDF</option>
              <option value="CHE">CHE</option>
              <option value="CHF">CHF</option>
              <option value="CHW">CHW</option>
              <option value="CLF">CLF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="COU">COU</option>
              <option value="CRC">CRC</option>
              <option value="CUC">CUC</option>
              <option value="CUP">CUP</option>
              <option value="CVE">CVE</option>
              <option value="CZK">CZK</option>
              <option value="DJF">DJF</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="DZD">DZD</option>
              <option value="EGP">EGP</option>
              <option value="ERN">ERN</option>
              <option value="ETB">ETB</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="FKP">FKP</option>
              <option value="GBP">GBP</option>
              <option value="GEL">GEL</option>
              <option value="GHS">GHS</option>
              <option value="GIP">GIP</option>
              <option value="GMD">GMD</option>
              <option value="GNF">GNF</option>
              <option value="GTQ">GTQ</option>
              <option value="GYD">GYD</option>
              <option value="HKD">HKD</option>
              <option value="HNL">HNL</option>
              <option value="HTG">HTG</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="IQD">IQD</option>
              <option value="IRR">IRR</option>
              <option value="ISK">ISK</option>
              <option value="JMD">JMD</option>
              <option value="JOD">JOD</option>
              <option value="JPY">JPY</option>
              <option value="KES">KES</option>
              <option value="KGS">KGS</option>
              <option value="KHR">KHR</option>
              <option value="KMF">KMF</option>
              <option value="KPW">KPW</option>
              <option value="KRW">KRW</option>
              <option value="KWD">KWD</option>
              <option value="KYD">KYD</option>
              <option value="KZT">KZT</option>
              <option value="LAK">LAK</option>
              <option value="LBP">LBP</option>
              <option value="LKR">LKR</option>
              <option value="LRD">LRD</option>
              <option value="LSL">LSL</option>
              <option value="LYD">LYD</option>
              <option value="MAD">MAD</option>
              <option value="MDL">MDL</option>
              <option value="MGA">MGA</option>
              <option value="MKD">MKD</option>
              <option value="MMK">MMK</option>
              <option value="MNT">MNT</option>
              <option value="MOP">MOP</option>
              <option value="MRU">MRU</option>
              <option value="MUR">MUR</option>
              <option value="MVR">MVR</option>
              <option value="MWK">MWK</option>
              <option value="MXN">MXN</option>
              <option value="MXV">MXV</option>
              <option value="MYR">MYR</option>
              <option value="MZN">MZN</option>
              <option value="NAD">NAD</option>
              <option value="NGN">NGN</option>
              <option value="NIO">NIO</option>
              <option value="NOK">NOK</option>
              <option value="NPR">NPR</option>
              <option value="NZD">NZD</option>
              <option value="OMR">OMR</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PGK">PGK</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="QAR">QAR</option>
              <option value="RON">RON</option>
              <option value="RSD">RSD</option>
              <option value="RUB">RUB</option>
              <option value="RWF">RWF</option>
              <option value="SAR">SAR</option>
              <option value="SBD">SBD</option>
              <option value="SCR">SCR</option>
              <option value="SDG">SDG</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="SHP">SHP</option>
              <option value="SLE">SLE</option>
              <option value="SOS">SOS</option>
              <option value="SRD">SRD</option>
              <option value="SSP">SSP</option>
              <option value="STN">STN</option>
              <option value="SVC">SVC</option>
              <option value="SYP">SYP</option>
              <option value="SZL">SZL</option>
              <option value="THB">THB</option>
              <option value="TJS">TJS</option>
              <option value="TMT">TMT</option>
              <option value="TND">TND</option>
              <option value="TOP">TOP</option>
              <option value="TRY">TRY</option>
              <option value="TTD">TTD</option>
              <option value="TWD">TWD</option>
              <option value="TZS">TZS</option>
              <option value="UAH">UAH</option>
              <option value="UGX">UGX</option>
              <option value="USD">USD</option>
              <option value="USN">USN</option>
              <option value="UYI">UYI</option>
              <option value="UYU">UYU</option>
              <option value="UYW">UYW</option>
              <option value="UZS">UZS</option>
              <option value="VED">VED</option>
              <option value="VES">VES</option>
              <option value="VND">VND</option>
              <option value="VUV">VUV</option>
              <option value="WST">WST</option>
              <option value="XAF">XAF</option>
              <option value="XAG">XAG</option>
              <option value="XAU">XAU</option>
              <option value="XBA">XBA</option>
              <option value="XBB">XBB</option>
              <option value="XBC">XBC</option>
              <option value="XBD">XBD</option>
              <option value="XCD">XCD</option>
              <option value="XDR">XDR</option>
              <option value="XOF">XOF</option>
              <option value="XPD">XPD</option>
              <option value="XPF">XPF</option>
              <option value="XPT">XPT</option>
              <option value="XSU">XSU</option>
              <option value="XTS">XTS</option>
              <option value="XUA">XUA</option>
              <option value="XXX">XXX</option>
              <option value="YER">YER</option>
              <option value="ZAR">ZAR</option>
              <option value="ZMW">ZMW</option>
              <option value="ZWL">ZWL</option>
            </select>
          </div>
        </div>
        {/* <Pdf fileData={file} textData={text} ref={elementRef} /> */}
      </div>
      <div
        className={`${
          visible ? "hidden" : "visible"
        } w-full h-full p-5 pt-1 mt-1 rounded-xl`}
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
