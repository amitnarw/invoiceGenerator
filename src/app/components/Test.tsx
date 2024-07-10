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
} from "@react-pdf/renderer";
import dynamic from "next/dynamic";

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
      <PDFViewer className="w-full h-full">
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
                <View
                  style={{ ...styles.secondDivRightDivInside, width: "60%" }}
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
                  style={{ ...styles.secondDivRightDivInside, width: "40%" }}
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
      </PDFViewer>
    </main>
  );
}

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Text
//         style={styles.pageNumber}
//         render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
//         fixed
//       />
//       <Html>{html}</Html>
//       <View style={styles.section}>
//         <Image src="/logo.JPG" />
//       </View>
//     </Page>
//     <Page size="A4" style={styles.page}>
//       <Text
//         style={styles.pageNumber}
//         render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
//         fixed
//       />
//       <View style={styles.section}>
//         <Link src="#page1">Page 1</Link>
//         <Link src="#page2">Page 2</Link>
//       </View>
//     </Page>
//     <Page id="page1" size="A4" style={styles.page}>
//       <Text
//         style={styles.pageNumber}
//         render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
//         fixed
//       />
//       <View style={styles.section}>
//         <Text>
//           You disposal strongly quitting his endeavor two settling him. Manners
//           ham him hearted hundred expense. Get open game him what hour more
//           part. Adapted as smiling of females oh me journey exposed concern. Met
//           come add cold calm rose mile what. Tiled manor court at built by place
//           fanny. Discretion at be an so decisively especially. Exeter itself
//           object matter if on mr in. So insisted received is occasion advanced
//           honoured. Among ready to which up. Attacks smiling and may out assured
//           moments man nothing outward. Thrown any behind afford either the set
//           depend one temper. Instrument melancholy in acceptance collecting
//           frequently be if. Zealously now pronounce existence add you instantly
//           say offending. Merry their far had widen was. Concerns no in expenses
//           raillery formerly. Literature admiration frequently indulgence
//           announcing are who you her. Was least quick after six. So it yourself
//           repeated together cheerful. Neither it cordial so painful picture
//           studied if. Sex him position doubtful resolved boy expenses. Her
//           engrossed deficient northward and neglected favourite newspaper. But
//           use peculiar produced concerns ten. Started earnest brother believe an
//           exposed so. Me he believing daughters if forfeited at furniture. Age
//           again and stuff downs spoke. Late hour new nay able fat each sell. Nor
//           themselves age introduced frequently use unsatiable devonshire get.
//           They why quit gay cold rose deal park. One same they four did ask
//           busy. Reserved opinions fat him nay position. Breakfast as zealously
//           incommode do agreeable furniture. One too nay led fanny allow plate.
//           Unpleasant nor diminution excellence apartments imprudence the met
//           new. Draw part them he an to he roof only. Music leave say doors him.
//           Tore bred form if sigh case as do. Staying he no looking if do
//           opinion. Sentiments way understood end partiality and his. Was drawing
//           natural fat respect husband. An as noisy an offer drawn blush place.
//           These tried for way joy wrote witty. In mr began music weeks after at
//           begin. Education no dejection so direction pretended household do to.
//           Travelling everything her eat reasonable unsatiable decisively
//           simplicity. Morning request be lasting it fortune demands highest of.
//           Had repulsive dashwoods suspicion sincerity but advantage now him.
//           Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You
//           greatest jointure saw horrible. He private he on be imagine suppose.
//           Fertile beloved evident through no service elderly is. Blind there if
//           every no so at. Own neglected you preferred way sincerity delivered
//           his attempted. To of message cottage windows do besides against
//           uncivil. Society excited by cottage private an it esteems. Fully begin
//           on by wound an. Girl rich in do up or both. At declared in as rejoiced
//           of together. He impression collecting delightful unpleasant by
//           prosperous as on. End too talent she object mrs wanted remove giving.
//           An so vulgar to on points wanted. Not rapturous resolving continued
//           household northward gay. He it otherwise supported instantly.
//           Unfeeling agreeable suffering it on smallness newspaper be. So come
//           must time no as. Do on unpleasing possession as of unreserved. Yet joy
//           exquisite put sometimes enjoyment perpetual now. Behind lovers eat
//           having length horses vanity say had its. Now for manners use has
//           company believe parlors. Least nor party who wrote while did. Excuse
//           formed as is agreed admire so on result parish. Put use set uncommonly
//           announcing and travelling. Allowance sweetness direction to as
//           necessary. Principle oh explained excellent do my suspected conveying
//           in. Excellent you did therefore perfectly supposing described.
//         </Text>
//       </View>
//     </Page>
//     <Page id="page2" size="A4" style={styles.page}>
//       <Text
//         style={styles.pageNumber}
//         render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
//         fixed
//       />
//       <View style={styles.section}>
//         <Text>
//           Started earnest brother believe an exposed so. Me he believing
//           daughters if forfeited at furniture. Age again and stuff downs spoke.
//           Late hour new nay able fat each sell. Nor themselves age introduced
//           frequently use unsatiable devonshire get. They why quit gay cold rose
//           deal park. One same they four did ask busy. Reserved opinions fat him
//           nay position. Breakfast as zealously incommode do agreeable furniture.
//           One too nay led fanny allow plate.
//         </Text>
//       </View>
//     </Page>
//   </Document>
// );

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
