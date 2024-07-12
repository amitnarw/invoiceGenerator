"use client";
import React, { useEffect, useState } from "react";
// import Html from "react-pdf-html";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import dynamic from "next/dynamic";
//I added this imports to add suport to textLayer and anotations
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { isMobile } from "react-device-detect";

//this due a Worker not found error
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

console.log(isMobile, "mobile");

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

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home(props: any) {
  const [text, setText] = useState<any>();
  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <MyDocument text={text} />
    </main>
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

const MyDocument = ({ text }: any) => {
  return (
    <div>
      {isMobile ? (
        <PDFDownloadLink
          document={<MyPDFDocument text={text} />}
          fileName="YOUR_FILE_NAME.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      ) : (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <MyPDFDocument text={text} />
        </PDFViewer>
      )}
    </div>
  );
};

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

const html = `<html>
  <body>
    <style>
      .my-heading4 {
        background: darkgreen;
        color: white;
      }
      pre {
        background-color: #eee;
        padding: 10px;
      }
    </style>
    <h1>Heading 1</h1>
    <h2 style="background-color: pink">Heading 2</h2>
    <h3>Heading 3</h3>
    <h4 class="my-heading4">Heading 4</h4>
    <p>
      Paragraph with <strong>bold</strong>, <i>italic</i>, <u>underline</u>,
      <s>strikethrough</s>,
      <strong><u><s><i>and all of the above</i></s></u></strong>
    </p>
    <p>
      Paragraph with image <img src="" /> and
      <a href="http://google.com">link</a>
    </p>
    <hr />
    <ul>
      <li>Unordered item</li>
      <li>Unordered item</li>
    </ul>
    <ol>
      <li>Ordered item</li>
      <li>Ordered item</li>
    </ol>
    <br /><br /><br /><br /><br />
    Text outside of any tags
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Foo</td>
          <td>Bar</td>
          <td>Foobar</td>
        </tr>
        <tr>
          <td colspan="2">Foo</td>
          <td>Bar</td>
        </tr>
        <tr>
          <td>Some longer thing</td>
          <td>Even more content than before!</td>
          <td>Even more content than before!</td>
        </tr>
      </tbody>
    </table>
    <div style="width: 200px; height: 200px; background: pink"></div>
    <pre>
function myCode() {
  const foo = 'bar';
}
</pre>
  </body>
</html>
`;
