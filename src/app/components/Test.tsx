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
      src: "OpenSans-Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/OpenSans-Bold.ttf",
      fontWeight: 700,
    },
  ],
});

export default function Home(props: any) {
  const [text, setText] = useState<any>();
  const [file, setFile] = useState<any>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  useEffect(() => {
    setFile(props.file);
  }, [props.file]);

  useEffect(() => {
    setLoaded(true);
  });

  return (
    <div>
      {typeof window !== "undefined" && loaded && (
        <div className="flex flex-col gap-5 h-[90vh]">
          <button className="bg-[#1abc9c] hover:bg-[#16a085] p-6 rounded-lg flex items-center justify-center gap-2 text-white duration-300 sm:w-96 w-44 m-auto text-lg">
            <PDFDownloadLink
              document={<MyPDFDocument text={text} file={file} />}
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
            <MyPDFDocument text={text} file={file} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

const MyPDFDocument = ({ text, file }: any) => (
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
          <View style={styles.secondDivLeftDivInside}>
            <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
              {text?.shipTo}
            </Text>
            <Text style={styles.textBold}>{text?.shipToOptional}</Text>
          </View>
        </View>
        <View style={{ ...styles.secondDivLeftDiv, gap: "10px" }}>
          <View style={{ ...styles.secondDivRightDivInside, width: "60%" }}>
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.date}
            </Text>
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.paymentTerms}
            </Text>
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.dueDate}
            </Text>
            <Text style={{ ...styles.textQues, textAlign: "right" }}>
              {text?.poNumber}
            </Text>
          </View>
          <View style={{ ...styles.secondDivRightDivInside, width: "40%" }}>
            <Text style={{ ...styles.textAns, textAlign: "right" }}>
              {text?.dateTxt}
            </Text>
            <Text style={{ ...styles.textAns, textAlign: "right" }}>
              {text?.paymentTermsTxt}
            </Text>
            <Text style={{ ...styles.textAns, textAlign: "right" }}>
              {text?.dueDateTxt}
            </Text>
            <Text style={{ ...styles.textAns, textAlign: "right" }}>
              {text?.poNumberTxt}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          marginTop: "10px",
        }}
      >
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
            $3
          </Text>
        </View>
      </View>
      <View style={styles.itemsHeadDiv}>
        <Text style={{ width: "100%" }}>Item</Text>
        <Text style={{ width: "15%", textAlign: "center" }}>Quantity</Text>
        <Text
          style={{
            width: "30%",
            textAlign: "center",
          }}
        >
          Rate
        </Text>
        <Text style={{ width: "16%" }}>Amount</Text>
      </View>
      <View style={styles.itemsItemDiv}>
        <Text style={{ ...styles.textAns, width: "100%" }}>
          {text?.itemTxt1}
        </Text>
        <Text
          style={{
            ...styles.textAns,
            textAlign: "center",
            width: "15%",
          }}
        >
          {text?.quantityTxt1}
        </Text>
        <Text
          style={{
            ...styles.textAns,
            textAlign: "center",
            width: "30%",
          }}
        >
          {text?.rateTxt1}
        </Text>
        <Text
          style={{
            ...styles.textAns,
            width: "12%",
            textAlign: "center",
          }}
        >
          {text?.amountTxt1}
        </Text>
      </View>
      <View style={styles.totalDiv}>
        <View
          style={{
            ...styles.secondDivRightDivInside,
            width: "35%",
          }}
        >
          <Text style={{ ...styles.textQues, textAlign: "right" }}>
            {text?.date}
          </Text>
          <Text style={{ ...styles.textQues, textAlign: "right" }}>
            {text?.paymentTerms}
          </Text>
          <Text style={{ ...styles.textQues, textAlign: "right" }}>
            {text?.dueDate}
          </Text>
          <Text style={{ ...styles.textQues, textAlign: "right" }}>
            {text?.poNumber}
          </Text>
        </View>
        <View
          style={{
            ...styles.secondDivRightDivInside,
            width: "21%",
          }}
        >
          <Text style={{ ...styles.textAns, textAlign: "right" }}>
            {text?.dateTxt}
          </Text>
          <Text style={{ ...styles.textAns, textAlign: "right" }}>
            {text?.paymentTermsTxt}
          </Text>
          <Text style={{ ...styles.textAns, textAlign: "right" }}>
            {text?.dueDateTxt}
          </Text>
          <Text style={{ ...styles.textAns, textAlign: "right" }}>
            {text?.poNumberTxt}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.notesDiv, marginTop: "40px" }}>
        <Text style={styles.textQues}>{text?.notes}:</Text>
        <Text style={styles.textAns}>{text?.notesTxt}</Text>
      </View>
      <View style={{ ...styles.notesDiv, marginTop: "10px" }}>
        <Text style={styles.textQues}>{text?.terms}:</Text>
        <Text style={styles.textAns}>{text?.termsTxt}</Text>
      </View>
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
    gap: "10px",
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
  },
  itemsItemDiv: {
    width: "100%",
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
