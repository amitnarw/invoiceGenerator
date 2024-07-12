"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  useEffect(() => {
    setLoaded(true);
  });

  return (
    <div>
      {typeof window !== "undefined" && loaded && (
        <>
          <PDFViewer className="h-screen w-full">
            <MyPDFDocument text={text} />
          </PDFViewer>
          <PDFDownloadLink
            document={<MyPDFDocument text={text} />}
            fileName="example.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button className="rounded-xl px-5 py-2 bg-red-500/50 m-auto">
                  Loading document
                </button>
              ) : (
                <button className="bg-[#1abc9c] hover:bg-[#16a085] p-6 rounded-lg flex items-center justify-center gap-2 text-white duration-300 sm:w-96 w-44 m-auto mt-20">
                  <FiDownload size={15} />
                  Download
                </button>
              )
            }
          </PDFDownloadLink>
        </>
      )}
    </div>
  );
}

// const MyDocument = ({ text }: any) => (
// <PDFViewer className="w-full h-full">
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.invoiceDiv}>
//         <Text style={styles.textBold}>{text?.whoIsThisFrom}</Text>
//         <View>
//           <Text style={styles.textInvoice}>{text?.invoice}</Text>
//           <Text style={styles.textPage}># {text?.page}</Text>
//         </View>
//       </View>
//       <View style={styles.secondDiv}>
//         <View style={styles.secondDivLeftDiv}>
//           <View style={styles.secondDivLeftDivInside}>
//             <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
//               {text?.billTo}:
//             </Text>
//             <Text style={styles.textBold}>{text?.whoIsThisTo}</Text>
//           </View>
//           <View style={styles.secondDivLeftDivInside}>
//             <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
//               {text?.shipTo}
//             </Text>
//             <Text style={styles.textBold}>{text?.shipToOptional}</Text>
//           </View>
//         </View>
//         <View style={{ ...styles.secondDivLeftDiv, gap: "10px" }}>
//           <View style={{ ...styles.secondDivRightDivInside, width: "60%" }}>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.date}
//             </Text>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.paymentTerms}
//             </Text>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.dueDate}
//             </Text>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.poNumber}
//             </Text>
//           </View>
//           <View style={{ ...styles.secondDivRightDivInside, width: "40%" }}>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.dateTxt}
//             </Text>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.paymentTermsTxt}
//             </Text>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.dueDateTxt}
//             </Text>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.poNumberTxt}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "flex-end",
//           marginTop: "10px",
//         }}
//       >
//         <View style={styles.balanceDueDiv}>
//           <Text
//             style={{
//               ...styles.textBold,
//               textAlign: "right",
//               fontSize: "12px",
//               width: "50%",
//               backgroundColor: "red",
//             }}
//           >
//             Balance Due:
//           </Text>
//           <Text
//             style={{
//               ...styles.textBold,
//               textAlign: "right",
//               fontSize: "12px",
//               width: "50%",
//               backgroundColor: "blue",
//             }}
//           >
//             $3
//           </Text>
//         </View>
//       </View>
//     </Page>
//   </Document>
// </PDFViewer>
// <PDFDownloadLink
//   document={<MyPDFDocument text={text} />}
//   fileName="YOUR_FILE_NAME.pdf"
// >
//   {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
// </PDFDownloadLink>
//   <PDFDownloadLink document={<MyDocument text={text} />} fileName="YOUR_FILE_NAME">
//   {({ loading }) => loading ? "Loading..." : <ModalPDFGenerated />}
// </PDFDownloadLink>
// );

// const MyPDFDocument = ({ text }: any) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.invoiceDiv}>
//         <Text style={styles.textBold}>{text?.whoIsThisFrom}</Text>
//         <View>
//           <Text style={styles.textInvoice}>{text?.invoice}</Text>
//           <Text style={styles.textPage}># {text?.page}</Text>
//         </View>
//       </View>
//       <View style={styles.secondDiv}>
//         <View style={styles.secondDivLeftDiv}>
//           <View style={styles.secondDivLeftDivInside}>
//             <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
//               {text?.billTo}:
//             </Text>
//             <Text style={styles.textBold}>{text?.whoIsThisTo}</Text>
//           </View>
//           <View style={styles.secondDivLeftDivInside}>
//             <Text style={{ ...styles.textQues, marginBottom: "5px" }}>
//               {text?.shipTo}
//             </Text>
//             <Text style={styles.textBold}>{text?.shipToOptional}</Text>
//           </View>
//         </View>
//         <View style={{ ...styles.secondDivLeftDiv, gap: "10px" }}>
//           <View style={{ ...styles.secondDivRightDivInside, width: "60%" }}>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.date}
//             </Text>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.paymentTerms}
//             </Text>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.dueDate}
//             </Text>
//             <Text style={{ ...styles.textQues, textAlign: "right" }}>
//               {text?.poNumber}
//             </Text>
//           </View>
//           <View style={{ ...styles.secondDivRightDivInside, width: "40%" }}>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.dateTxt}
//             </Text>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.paymentTermsTxt}
//             </Text>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.dueDateTxt}
//             </Text>
//             <Text style={{ ...styles.textAns, textAlign: "right" }}>
//               {text?.poNumberTxt}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "flex-end",
//           marginTop: "10px",
//         }}
//       >
//         <View style={styles.balanceDueDiv}>
//           <Text
//             style={{
//               ...styles.textBold,
//               textAlign: "right",
//               fontSize: "12px",
//               width: "50%",
//               backgroundColor: "red",
//             }}
//           >
//             Balance Due:
//           </Text>
//           <Text
//             style={{
//               ...styles.textBold,
//               textAlign: "right",
//               fontSize: "12px",
//               width: "50%",
//               backgroundColor: "blue",
//             }}
//           >
//             $3
//           </Text>
//         </View>
//       </View>
//     </Page>
//   </Document>
// );

const MyPDFDocument = ({ text }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.invoiceDiv}>
        <Text style={styles.textBold}>{text?.whoIsThisFrom}</Text>
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
              backgroundColor: "red",
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
              backgroundColor: "blue",
            }}
          >
            $3
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "40px",
    fontFamily: "OpenSans",
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
});
