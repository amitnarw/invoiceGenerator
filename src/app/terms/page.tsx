const Terms = () => {
  const list = [
    {
      title: "1. Software-as-a-Service",
      content:
        "This agreement provides Customer access to and usage of an Internet based software service as specified on an order and as further outlined at: invoice2.in (Service).",
      type: "text",
    },
    {
      title: "2. Use of Service",
      content: [
        {
          title: "a. Customer Owned Data",
          content:
            "All data and logos uploaded by Customer remains the property of Customer, as between Invoice2 and Customer (Customer Data). Customer grants Invoice2 the right to use, publicly display and distribute the Customer Data for purposes of performing under this agreement.",
        },
        {
          title: "b. Contractor Access and Usage",
          content:
            "Customer may allow its contractors to access the Service in compliance with the terms of this agreement, which access must be for the sole benefit of Customer. Customer is responsible for the compliance with this agreement by its contractors.",
        },
        {
          title: "c. Customer Responsibilities",
          content:
            "Customer (i) must keep its passwords secure and confidential; (ii) is solely responsible for Customer Data and all activity in its account in the Service; (iii) must use commercially reasonable efforts to prevent unauthorized access to its account, and notify Invoice2 promptly of any such unauthorized access; and (iv) may use the Service only in accordance with the Service’s Knowledge Base and applicable law.",
        },
        {
          title: "d. API",
          content: `Invoice2 provides access to its application-programming interface (API) as part of the Service. Subject to the other terms of this agreement, Invoice2 grants Customer a non-exclusive, nontransferable, terminable license to interact with the API only for purposes of the Service as allowed by the API.
          Customer may not use the API in a manner that fails to comply with the API technical documentation or with any part of the API. If any of these occur, Invoice2 can suspend or terminate Customer’s access to the API on a temporary or permanent basis.
          Invoice2 may change or remove existing endpoints or fields in API results upon at least 30 days’ notice to Customer, but Invoice2 will use commercially reasonable efforts to support the previous version of the API for at least 6 months. Invoice2 may add new endpoints or fields in API results without prior notice to Customer.
          The API is provided on an ‘AS IS’ and ‘WHEN AVAILABLE’ basis. Invoice2 has no liability to Customer as a result of any change, temporary unavailability, suspension, or termination of access to the API.`,
        },
        {
          title: "f. 30-Day Trial Version",
          content:
            "If Customer has registered for a trial use of the Service, Customer may access the Service for a 30-day time period (unless extended by Invoice2 in writing). The Service is provided AS IS, with no warranty during this time period. All Customer data will be deleted after the trial period, unless Customer converts its account to a paid Service.",
        },
      ],
      type: "list",
    },
    {
      title: "3. Disclaimer",
      content:
        "INVOICE2 DISCLAIMS ALL WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE AND FITNESS FOR A PARTICULAR PURPOSE. WHILE INVOICE2 TAKES REASONABLE PHYSICAL, TECHNICAL AND ADMINISTRATIVE MEASURES TO SECURE THE SERVICE, INVOICE2 DOES NOT GUARANTEE THAT THE SERVICE CANNOT BE COMPROMISED. CUSTOMER UNDERSTANDS THAT THE SERVICE MAY NOT BE ERROR FREE, AND USE MAY BE INTERRUPTED.",
      type: "text",
    },
    {
      title: "4. Payment",
      content:
        "Customer must pay all fees as specified on the order, but if not specified then within 30 days of receipt of an invoice. Customer is responsible for the payment of all sales, use, withholding, VAT and other similar taxes. This agreement contemplates one or more orders for the Service, which orders are governed by the terms of this agreement.",
      type: "text",
    },
    {
      title: "5. Mutual Confidentiality and Data Protection",
      content: [
        {
          title: "a. Definition of Confidential Information",
          content:
            "Confidential Information means all non-public information disclosed by a party (Discloser) to the other party (Recipient), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure (Confidential Information). Invoice2’s Confidential Information includes without limitation the Service (including without limitation the Service user interface design and layout, and pricing information).",
        },
        {
          title: "b. Protection of Confidential Information",
          content:
            "The Recipient must use the same degree of care that it uses to protect the confidentiality of its own confidential information (but in no event less than reasonable care) not to disclose or use any Confidential Information of the Discloser for any purpose outside the scope of this agreement. The Recipient must make commercially reasonable efforts to limit access to Confidential Information of Discloser to those of its employees and contractors who need such access for purposes consistent with this agreement and who have signed confidentiality agreements with Recipient no less restrictive than the confidentiality terms of this agreement.",
        },
        {
          title: "c. Exclusions",
          content:
            "Confidential Information excludes information that: (i) is or becomes generally known to the public without breach of any obligation owed to Discloser, (ii) was known to the Recipient prior to its disclosure by the Discloser without breach of any obligation owed to the Discloser, (iii) is received from a third party without breach of any obligation owed to Discloser, or (iv) was independently developed by the Recipient without use or access to the Confidential Information. The Recipient may disclose Confidential Information to the extent required by law or court order, but will provide Discloser with advance notice to seek a protective order.",
        },
      ],
      type: "list",
    },
    {
      title: "6. Proprietary Property",
      content: [
        {
          title: "a. Reservation of Rights",
          content:
            "The software, workflow processes, user interface, designs, know-how, and other technologies provided by Invoice2 as part of the Service are the proprietary property of Invoice2 and its licensors, and all right, title and interest in and to such items, including all associated intellectual property rights, remain only with Invoice2. Customer may not remove or modify any proprietary marking or restrictive legends in the Service. Invoice2 reserves all rights unless expressly granted in this agreement.",
        },
        {
          title: "b. Restrictions",
          content:
            "Customer may not (i) sell, resell, rent or lease the Service or use it in a service provider capacity; (ii) use the Service to store or transmit infringing, unsolicited marketing emails, libelous, or otherwise objectionable, unlawful or tortious material, or to store or transmit material in violation of third-party rights; (iii) interfere with or disrupt the integrity or performance of the Service; (iv) attempt to gain unauthorized access to the Service or their related systems or networks; (v) reverse engineer the Service; or (vi) access the Service to build a competitive service or product, or copy any feature, function or graphic for competitive purposes.",
        },
        {
          title: "c. Aggregate Data",
          content:
            "During and after the term of this agreement, Invoice2 may use non-personally identifiable Customer Data within the Service for purposes of enhancing the Service, aggregated statistical analysis, technical support and other business purposes.",
        },
      ],
      type: "list",
    },
    {
      title: "7. Term and Termination",
      content: [
        {
          title: "a. Term",
          content: "This agreement continues until all orders have terminated.",
        },
        {
          title: "b. Mutual Termination for Material Breach",
          content:
            "If either party is in material breach of this agreement, the other party may terminate this agreement at the end of a written 14-day notice/cure period, if the breach has not been cured.",
        },
        {
          title: "c. Suspension for Non-Payment",
          content:
            "Invoice2 may temporarily suspend or terminate, or both, the Service if Customer’s payment on any invoice is more than 15 days past due.",
        },
        {
          title: "d. Maintenance of Customer Data",
          content: `Within 90-days after termination, Customer Data will be available.
            After such 90-day period, Invoice2 has no obligation to maintain the Customer Data and may destroy it.`,
        },
        {
          title: "e. Return Invoice2 Property Upon Termination",
          content:
            "Upon termination of this agreement for any reason, Customer must pay Invoice2 for any unpaid amounts, and destroy or return all property of Invoice2. Upon Invoice2’s request, Customer will confirm in writing its compliance with this destruction or return requirement.",
        },
        {
          title: "f. Suspension for Violations of Law",
          content:
            "Invoice2 may temporarily suspend the Service or remove the applicable Customer Data, or both, if it in good faith believes that, as part of using the Service, Customer has violated a law. Invoice2 will attempt to contact Customer in advance.",
        },
      ],
      type: "list",
    },
    {
      title: "8. Liability Limit",
      content: [
        {
          title: "a. Exclusion of indirect damages",
          content:
            "To the maximum extent allowed by law, Invoice2 is not liable for any indirect, special, incidental or consequential damages arising out of or related to this agreement (including, without limitation, costs of delay; loss of data, records or information; and lost profits), even if it knows of the possibility of such damage or loss.",
        },
        {
          title: "b. Total limit on liability",
          content:
            "To the maximum extent allowed by law, Invoice2’s total liability arising out of or related to this agreement (whether in contract, tort or otherwise) does not exceed the amount paid by Customer within the 6-month period prior to the event that gave rise to the liability.",
        },
      ],
      type: "list",
    },
    {
      title: "9. Indemnity",
      content:
        "If any third-party brings a claim against Invoice2, or requires Invoice2 to respond to a legal process, related to Customer’s acts, omissions, data or information within the Software, Customer must defend, indemnify and hold Invoice2 harmless from and against all damages, losses, and expenses of any kind (including reasonable legal fees and costs) related to such claim or request.",
      type: "text",
    },
    {
      title: "10. Governing Law and Forum",
      content:
        "This agreement is governed by the laws of the State of Texas (without regard to conflicts of law principles) for any dispute between the parties or relating in any way to the subject matter of this agreement. Any suit or legal proceeding must be exclusively brought in the federal or state courts for Travis County, Texas, and Customer submits to this personal jurisdiction and venue. Nothing in this agreement prevents either party from seeking injunctive relief in a court of competent jurisdiction. The prevailing party in any litigation is entitled to recover its attorneys’ fees and costs from the other party.",
      type: "text",
    },
    {
      title: "11. Other Terms",
      content: [
        {
          title: "a. Entire Agreement and Changes",
          content:
            "This agreement and the order constitute the entire agreement between the parties and supersede any prior or contemporaneous negotiations or agreements, whether oral or written, related to this subject matter. Customer is not relying on any representation concerning this subject matter, oral or written, not included in this agreement. No representation, promise or inducement not included in this agreement is binding. No modification of this agreement is effective unless both parties sign it, and no waiver is effective unless the party waiving the right signs a waiver in writing.",
        },
        {
          title: "b. No Assignment",
          content:
            "Neither party may assign or transfer this agreement or an order to a third party, except that this agreement with all orders may be assigned, without the consent of the other party, as part of a merger, or sale of substantially all the assets, of a party.",
        },
        {
          title: "c. Independent Contractors",
          content:
            "The parties are independent contractors with respect to each other.",
        },
        {
          title: "d. Enforceability and Force Majeure",
          content:
            "If any term of this agreement is invalid or unenforceable, the other terms remain in effect. Except for the payment of monies, neither party is liable for events beyond its reasonable control, including, without limitation force majeure events.",
        },
        {
          title: "e. Money Damages Insufficient",
          content:
            "Any breach by a party of this agreement or violation of the other party’s intellectual property rights could cause irreparable injury or harm to the other party. The other party may seek a court order to stop any breach or avoid any future breach.",
        },
        {
          title: "f. No Additional Terms",
          content:
            "Invoice2 rejects additional or conflicting terms of any Customer form-purchasing document.",
        },
        {
          title: "g. Order of Precedence",
          content:
            "If there is an inconsistency between this agreement and an order, the order prevails.",
        },
        {
          title: "h. Survival of Terms",
          content:
            "Any terms that by their nature survive termination of this agreement for a party to assert its rights and receive the protections of this agreement, will survive. The UN Convention on Contracts for the International Sale of Goods does not apply.",
        },
        {
          title: "i. Feedback",
          content:
            "By submitting ideas, suggestions or feedback to Invoice2 regarding the Service, Customer agrees that such items submitted do not contain confidential or proprietary information; and Customer hereby grants Invoice2 an irrevocable, unlimited, royalty-free and fully-paid perpetual license to use such items for any business purpose.",
        },
      ],
      type: "list",
    },
  ];
  return (
    <div className="w-[80vw] m-auto text-sm">
      <h1 className="md:text-6xl text-2xl font-bold my-10">Terms of Service</h1>
      <p className="text-gray-400">Last Updated: September 23, 2024</p>
      <p className="mt-4 text-gray-500">
        Please read this agreement carefully before using this service. By using
        the service or clicking “agree” customer is agreeing to be bound by this
        agreement. If customer is agreeing to this agreement on behalf of or for
        the benefit of its employer, then customer represents and warrants that
        it has the necessary authority to agree to this agreement on its
        employer’s behalf. This agreement is between Invoice2, and the customer
        agreeing to these terms.
      </p>
      <hr className="my-4" />
      <div className="p-5 bg-white rounded-xl mb-10">
        {list.map((item: any, index: number) => (
          <div key={index} className="text-gray-500">
            <h2 className="font-semibold mt-5 mb-1 text-xl text-black">
              {item.title}
            </h2>
            {item.type === "text" ? (
              <p>{item.content}</p>
            ) : (
              item.content.map((item2: any, index2: number) => (
                <div key={index2}>
                  <h4 className="text-md font-semibold text-black mt-3">
                    {item2.title}
                  </h4>
                  <p>{item2.content}</p>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
