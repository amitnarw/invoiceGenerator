import { FiDownload } from "react-icons/fi";
import { BiSolidImageAdd } from "react-icons/bi";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-full flex px-16 lg:gap-10 gap-4 mt-10 lg:flex-row flex-col">
        <div className="bg-white h-full lg:w-5/6 w-full rounded-xl p-5">
          <div className="flex justify-between lg:flex-row flex-col">
            <button className="text-gray-400 bg-[#f5f5f5] p-12 rounded-md border-[1px] border-[#d5dbe2] flex items-center gap-3 hover:bg-[#EBEBEB] duration-300">
              <BiSolidImageAdd />
              Add your logo
            </button>
            <div className="lg:w-2/6 w-full flex flex-col gap-3 lg:items-end lg:mt-0 mt-2">
              <input
                type="text"
                value={"INVOICE"}
                className="w-full text-4xl outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 lg:text-end"
              />
              <div className="inputOut w-2/4 flex items-center gap-1 pl-3">
                <span className="text-gray-500 text-sm">#</span>
                <input
                  type="text"
                  value={"1"}
                  // className="w-full text-4xl outline-none text-sm text-end px-3 py-2 rounded-xl"
                  className="w-full text-sm outline-none rounded-sm duration-300 px-3 py-2 text-end border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-4 lg:flex-row flex-col gap-6">
            <div className="lg:w-3/5 w-full">
              <textarea
                className="inputOut px-3 py-2 overflow-hidden lg:w-3/5 w-full text-sm"
                placeholder="Who is this from?"
                cols={40}
              ></textarea>
              <div className="flex mt-2 lg:gap-4 gap-2 lg:flex-row flex-col">
                <div className="w-full">
                  <input
                    type="text"
                    value={"Bill To"}
                    // className="w-full text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-gray-500"
                    className="inputHoverShow"
                  />
                  <textarea
                    className="inputOut px-3 py-2 text-sm mt-1 w-full"
                    placeholder="Who is this from?"
                  ></textarea>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    value={"Ship To"}
                    className="w-full text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-gray-500"
                  />
                  <textarea
                    className="inputOut px-3 py-2 text-sm mt-1 w-full"
                    placeholder="(optional)"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 lg:w-2/5 w-full">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={"Date"}
                  className="lg:w-full w-2/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end text-gray-500"
                />
                <input
                  type="text"
                  // value=
                  className="lg:w-full w-1/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end inputOut"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={"Payment Terms"}
                  className="lg:w-full w-2/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end text-gray-500"
                />
                <input
                  type="text"
                  // value=
                  className="lg:w-full w-1/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end inputOut"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={"Due Date"}
                  className="lg:w-full w-2/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end text-gray-500"
                />
                <input
                  type="text"
                  // value=
                  className="lg:w-full w-1/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end inputOut"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={"PO Number"}
                  className="lg:w-full w-2/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end text-gray-500"
                />
                <input
                  type="text"
                  // value=
                  className="lg:w-full w-1/3 text-sm outline-none rounded-sm hover:border-[#d5dbe2] border border-transparent duration-300 text-end inputOut"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/6 w-full mt-5 flex flex-col gap-6">
          <button className="bg-[#1abc9c] px-12 py-2 rounded-lg flex items-center gap-2 text-white lg:w-full w-1/3">
            <FiDownload size={15} />
            Download
          </button>
          <hr />
          <div>
            <p>Currency</p>
            <select className="p-2 rounded-lg outline-none bg-white border-[1px] border-[#d5dbe2] mt-2 lg:w-full w-1/3">
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
              <option value="USD" selected>
                USD
              </option>
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
      </div>
    </main>
  );
}
