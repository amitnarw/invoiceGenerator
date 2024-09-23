const Privacy = () => {
  const list = [
    {
      title: "Collection",
      content: `We may also collect, from you, personal information about your contacts such as name and email address where we can send receipts of your purchases. When you provide us with personal information about your contacts we will only use this information for the specific reason for which it is provided. If you believe that one of your contacts has provided us with your personal information and you would like to request that it be removed from our database, please contact us at the contact information below.
        As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) addresses, browser type, Internet service provider (ISP), referring/exit pages, the files viewed on our site (e.g., HTML pages, graphics, etc.), operating system, date/time stamp, and/or clickstream data to analyze trends in the aggregate and administer the site.
        Invoice2 and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service.`,
      type: "text",
    },
    {
      title: "Security",
      content: `The security of your personal information is important to us. We follow generally accepted standards to protect the personal information submitted to us, both during transmission and once it is received. Invoice2 ensures that all customer billing and payment information, files and data remain private and confidential. Due to the sensitive nature of billing and payments we take this very seriously and make it our primary concern for all customers. We restrict access to personal information to Invoice2 employees, contractors and agents who need to know that information in order to operate, develop, or improve our service. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations.
      If you have any questions about the security of your personal information, you can contact us at the contact information below. We may retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes and enforce our agreements.`,
      type: "text",
    },
    {
      title: "Access",
      content: `Upon request Invoice2 will provide you with information about whether we hold any of your personal information. You may access, correct, or request deletion of your personal information by logging into your account or by contacting us at the contact information below. We will respond to your request within a reasonable timeframe. In certain circumstances we may be required by law to retain your personal information, or may need to retain your personal information in order to continue providing a service.
        Invoice2 acknowledges that you have the right to access your personal information. Invoice2 has no direct relationship with the individuals whose personal data it processes. An individual who seeks access, or who seeks to correct, amend, or delete inaccurate data should direct their query to the Invoice2’s Client (the data controller). If requested to remove data we will respond within a reasonable timeframe. In certain circumstances we may be required by law to retain your personal information, or may need to retain your personal information in order to continue providing a service.`,
      type: "text",
    },
    {
      title: "Choice",
      content: `We partner with a third party to manage our advertising on other sites. Our third party partner may use cookies or similar technologies in order to provide you advertising based upon your browsing activities and interests. If you wish to opt out of interest-based advertising click here (or if located in the European Union click here). Please note you will continue to receive generic ads.
      You may sign-up to receive email or newsletter or other communications from us. If you would like to discontinue receiving this information, you may update your email preferences by using the “Unsubscribe” link found in emails we send to you or by contacting us at the contact information below.`,
      type: "text",
    },
    {
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy to reflect changes to our information practices. If we make any material changes we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this website prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.",
      type: "text",
    },
    {
      title: "Privacy Questions / Feedback",
      content:
        "If you have questions or concerns about Invoice2’s Privacy Policy please contact us at privacy@invoice-generator.com.",
      type: "text",
    },
  ];
  return (
    <div className="w-[80vw] m-auto text-sm">
      <h1 className="md:text-6xl text-2xl font-bold my-10">Privacy Policy</h1>
      <p className="text-gray-400">Last Updated: September 23, 2024</p>
      <p className="mt-4 text-gray-500">
        This Privacy Policy applies to the websites: invoice-generator.com (the
        “Sites”) owned and operated by Invoice-Generator.com (collectively,
        “Invoice2”, “we”, “us”, or “our”). This Privacy Policy describes how
        Invoice2 collects, uses, shares and secures the personal information you
        provide, as well as the human resources data transferred to us for
        processing on behalf of our customers. It also describes your choices
        regarding use, access and correction of your personal information.
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

export default Privacy;
