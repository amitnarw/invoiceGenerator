"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import { FiDownload } from "react-icons/fi";

Font.register({
  family: "OpenSans",
  fonts: [
    {
      // src: "OpenSans-Regular.ttf",
      src: "Roboto-Regular.ttf",
      fontWeight: 400,
    },
    {
      // src: "/OpenSans-Bold.ttf",
      src: "Roboto-Bold.ttf",
      fontWeight: 700,
    },
  ],
});

type TaxDropTxt = {
  title: string;
  name: string;
  value: number;
};

type TextState = {
  currency: string;
  invoice: string;
  page: number;
  whoIsThisFrom: string;
  billTo: string;
  whoIsThisTo: string;
  shipTo: string;
  shipToOptional: string;
  date: string;
  dateTxt: string;
  paymentTerms: string;
  paymentTermsTxt: string;
  dueDate: string;
  dueDateTxt: string;
  poNumber: string;
  poNumberTxt: string;
  item: string;
  taxDrop: string;
  quantity: string;
  rate: string;
  amount: string;
  itemTxt1: string[];
  taxDropTxt: TaxDropTxt[];
  quantityTxt1: number[];
  rateTxt1: number[];
  amountTxt1: number[];
  notes: string;
  notesTxt: string;
  terms: string;
  termsTxt: string;
  subtotal: string;
  subtotalTxt: number;
  discount: string;
  discountTxt: number;
  discountType: number;
  tax: string;
  taxTxt: number;
  taxType: number;
  shipping: string;
  shippingTxt: number;
  total: string;
  totalTxt: number;
  amountPaid: string;
  amountPaidTxt: number;
  balanceDue: string;
  balanceDueTxt: number;
};

type TaxTotal = {
  name: string;
  total: number;
};

export default function PDF(props: any) {
  const [text, setText] = useState<any>();
  const [file, setFile] = useState<any>();
  const [loaded, setLoaded] = useState(false);
  const [taxTotals, setTaxTotals] = useState({});

  useEffect(() => {
    setText(props.text);
    const taxTotalsNew: any = calculateTaxTotals(props?.list);
    setTaxTotals(taxTotalsNew);
  }, [props.text]);

  useEffect(() => {
    setFile(props.file);
  }, [props.file]);

  useEffect(() => {
    setLoaded(true);
  });

  const calculateTaxTotals = (list: any[]) => {
    const taxTotals: { [key: string]: number } = {};
  
    list.forEach(item => {
      const taxName = item.taxDropTxt.name;
      const taxTotal = item.taxDropTxt.total;
      
      if (taxTotals[taxName]) {
        taxTotals[taxName] += taxTotal;
      } else {
        taxTotals[taxName] = taxTotal;
      }
    });
  
    return taxTotals;
  };

  return (
    <div>
      {typeof window !== "undefined" && loaded && (
        <div className="flex flex-col gap-3 h-[90vh]">
          <button className="bg-[#1abc9c] hover:bg-[#16a085] p-6 rounded-lg flex items-center justify-center gap-2 text-white duration-300 sm:w-96 w-44 m-auto text-lg">
            <PDFDownloadLink
              document={<MyPDFDocument text={text} file={file} list={props?.list} taxTotals={taxTotals} />}
              fileName="example.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  <span className="rounded-xl px-5 py-2 bg-red-500/50">
                    Loading document
                  </span>
                ) : (
                  <div className="flex items-center gap-3">
                    <FiDownload size={15} />
                    Download
                  </div>
                )
              }
            </PDFDownloadLink>
          </button>
          <PDFViewer className="h-full w-full">
            <MyPDFDocument
              text={text}
              file={file}
              list={props?.list}
              taxTotals={taxTotals}
            />
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

const MyPDFDocument = ({ text, file, list, taxTotals }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.invoiceDiv}>
        <View style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {file && <Image src={file} style={styles.logo} />}
          <Text style={styles.textBold}>{text?.whoIsThisFrom}</Text>
        </View>
        <View>
          <Text style={styles.textInvoice}>{text?.invoice}</Text>
          <Text style={styles.textPage}># {text?.page}</Text>
        </View>
      </View>
      <View style={styles.secondDiv}>
        <View style={styles.secondDivLeftDiv}>
          <View style={styles.secondDivLeftDivInside}>
            <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
              {text?.billTo}:
            </Text>
            <Text style={styles.textBold}>{text?.whoIsThisTo}</Text>
          </View>
          {text?.shipToOptional && (
            <View style={styles.secondDivLeftDivInside}>
              <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
                {text?.shipTo}
              </Text>
              <Text style={styles.textBold}>{text?.shipToOptional}</Text>
            </View>
          )}
        </View>
        <View style={{ ...styles.secondDivLeftDiv, gap: "10px" }}>
          <View style={{ ...styles.secondDivRightDivInside, width: "60%" }}>
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.date}
            </Text>
            {text?.paymentTermsTxt && (
              <Text style={{ ...styles.textQues, textAlign: "right" }}>
                {text?.paymentTerms}
              </Text>
            )}
            {text?.dueDateTxt && (
              <Text style={{ ...styles.textQues, textAlign: "right" }}>
                {text?.dueDate}
              </Text>
            )}
            {text?.poNumberTxt && (
              <Text style={{ ...styles.textQues, textAlign: "right" }}>
                {text?.poNumber}
              </Text>
            )}
          </View>
          <View style={{ ...styles.secondDivRightDivInside, width: "40%" }}>
            <Text style={{ ...styles.textAns, textAlign: "right" }}>
              {text?.dateTxt}
            </Text>
            {text?.paymentTermsTxt && (
              <Text style={{ ...styles.textAns, textAlign: "right" }}>
                {text?.paymentTermsTxt}
              </Text>
            )}
            {text?.dueDateTxt && (
              <Text style={{ ...styles.textAns, textAlign: "right" }}>
                {text?.dueDateTxt}
              </Text>
            )}
            {text?.poNumberTxt && (
              <Text style={{ ...styles.textAns, textAlign: "right" }}>
                {text?.poNumberTxt}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          marginTop: "10px",
          flexDirection: "row"
        }}
      >
          <View style={{width: "50%", display: "flex", flexDirection: "row"}}>
            <Text style={{ ...styles.textQues }}>Place of Supply: </Text>
            <Text style={{ ...styles.textAns, marginLeft: "20px" }}>{text?.placeOfSupply}</Text>
          </View>
        <View style={styles.balanceDueDiv}>
          <Text
            style={{
              ...styles.textBold,
              textAlign: "right",
              fontSize: "12px",
              width: "50%",
              marginLeft: "40px",
            }}
          >
            Balance Due:
          </Text>
          <Text
            style={{
              ...styles.textBold,
              textAlign: "right",
              fontSize: "12px",
              width: "50%",
            }}
          >
            {text?.currency}{" "}
            {(text?.balanceDueTxt).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.itemsHeadDiv}>
        <Text style={{ width: "50%" }}>Item</Text>
        <Text style={{ width: "18%" }}>HSN/SAC</Text>
        <Text style={{ width: "18%" }}>Tax</Text>
        <Text style={{ width: "12%" }}>Quantity</Text>
        <Text style={{ width: "9%" }}>Rate</Text>
        <Text style={{ width: "12%" }}>Amount</Text>
      </View>
      {list?.map((item: any, index: number) => (
        <View style={styles.itemsItemDiv} key={index}>
          <Text style={{ ...styles.textAns, width: "55%" }}>
            {item?.itemTxt}
          </Text>
          <Text style={{ ...styles.textAns, width: "18%", fontSize: "8px" }}>
            {item?.HSNTxt}
          </Text>
          <Text
            style={{
              ...styles.textAns,
              textAlign: "left",
              width: "22%",
              fontSize: "8px",
            }}
          >
            {item?.taxDropTxt?.name}
          </Text>
          <Text style={{ ...styles.textAns, textAlign: "left", width: "10%", fontSize: "9px" }}>
            {item?.quantityTxt}
          </Text>
          <Text style={{ ...styles.textAns, textAlign: "left", width: "12%", fontSize: "9px" }}>
            {text?.currency} {item?.rateTxt}
          </Text>
          <Text style={{ ...styles.textAns, width: "12%", textAlign: "left", fontSize: "9px" }}>
            {text.currency}{" "}
            {item?.amountTxt}
          </Text>
        </View>
      ))}
      <View style={styles.totalDiv}>
        <View style={{ ...styles.secondDivRightDivInside, width: "35%" }}>
          <Text style={{ ...styles.textQues, textAlign: "right" }}>
            {text?.subtotal}
          </Text>

          {text?.discountTxt && (
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.discount}
              {` (${text?.discountTxt} ${text?.discountType === 1 ? "%" : text?.currency
                })`}
            </Text>
          )}


        </View>
        <View
          style={{
            ...styles.secondDivRightDivInside,
            width: "21%",
          }}
        >
          <Text style={{ ...styles.textAns, textAlign: "right" }}>
            {text?.currency} {(text?.subtotalTxt).toFixed(2)}
          </Text>

          {text?.discountTxt && (
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              - {text?.currency} {(text?.discountType == 1
                ? (text?.subtotalTxt * text?.discountTxt) / 100
                : text?.discountTxt).toFixed(2)}
            </Text>
          )}


        </View>
      </View>

      <View style={{...styles.totalDiv, marginTop: "2px"}}>
        <View style={{ ...styles.secondDivRightDivInside, width: "35%", gap: "0px" }}>
          {Object.entries(taxTotals)?.map(([taxName, total], index) => (
            <View style={{...styles.itemsItemDiv, justifyContent: "flex-end", paddingRight: "0px"}} key={index}>
              <Text style={{ ...styles.textQues, textAlign: "right", fontSize: "9px" }}>
                {taxName}
              </Text>
            </View>
          ))}
        </View>
        <View style={{...styles.secondDivRightDivInside, width: "21%", gap: "0px"}}>
          {Object.entries(taxTotals)?.map(([taxName, total]: any, index) => (
            <View style={{...styles.itemsItemDiv, justifyContent: "flex-end", paddingRight: "0px"}} key={index}>
              <Text style={{ ...styles.textQues, textAlign: "right", fontSize: "9px" }}>
                {text?.currency} {total?.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{...styles.totalDiv, marginTop: "7px"}}>
        <View style={{ ...styles.secondDivRightDivInside, width: "35%" }}>
    

          {text?.shippingTxt && (
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.shipping}
            </Text>
          )}

          <Text style={{ ...styles.textQues, textAlign: "right" }}>
            {text?.total}
          </Text>

          {text?.amountPaidTxt && (
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.amountPaid}
            </Text>
          )}
        </View>
        <View
          style={{
            ...styles.secondDivRightDivInside,
            width: "21%",
          }}
        >

          {text?.shippingTxt && (
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.currency} {text?.shippingTxt}
            </Text>
          )}
          <Text style={{ ...styles.textAns, textAlign: "right" }}>
            {text?.currency}{" "}
            {(text?.totalTxt).toFixed(2)}
          </Text>
          {text?.amountPaidTxt && (
            <Text style={{ ...styles.textAns, textAlign: "right" }}>
              {text?.currency} {text?.amountPaidTxt}
            </Text>
          )}
        </View>
      </View>
      {text?.notesTxt && (
        <View style={{ ...styles.notesDiv, marginTop: "40px" }}>
          <Text style={styles.textQues}>{text?.notes}:</Text>
          <Text style={styles.textAns}>{text?.notesTxt}</Text>
        </View>
      )}
      {text?.termsTxt && (
        <View style={{ ...styles.notesDiv, marginTop: "10px" }}>
          <Text style={styles.textQues}>{text?.terms}:</Text>
          <Text style={styles.textAns}>{text?.termsTxt}</Text>
        </View>
      )}
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "40px",
    paddingTop: "20px",
    fontFamily: "OpenSans",
  },
  logo: {
    width: "100px",
    // height: "30px",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: "10px",
  },
  textInvoice: {
    fontSize: "30px",
  },
  textPage: {
    fontSize: "13px",
    color: "gray",
    textAlign: "right",
    width: "23%",
  },
  invoiceDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  secondDivLeftDiv: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
  },
  secondDivLeftDivInside: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  textQues: {
    color: "gray",
    fontSize: "10px",
  },
  textAns: {
    color: "black",
    fontSize: "10px",
    width: "100%",
  },
  secondDivRightDivInside: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "7px",
  },
  balanceDueDiv: {
    backgroundColor: "#EBEBEB",
    width: "50%",
    padding: "6px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
  },
  itemsHeadDiv: {
    backgroundColor: "#121212",
    color: "white",
    display: "flex",
    flexDirection: "row",
    fontSize: "10px",
    paddingLeft: "10px",
    paddingVertical: "4px",
    borderRadius: "4px",
    marginTop: "30px",
    // width: "108%",
    // marginLeft: "-20px"
  },
  itemsItemDiv: {
    // width: "108%",
    // marginLeft: "-20px",
    paddingHorizontal: "10px",
    paddingVertical: "2px",
    marginTop: "5px",
    display: "flex",
    flexDirection: "row",
  },
  totalDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: "50px",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  notesDiv: {
    width: "100%",
    display: "flex",
    gap: "2px",
  },
});
