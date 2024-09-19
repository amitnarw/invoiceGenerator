import Image from "next/image";
import React from "react";

const HowTo = () => {
  const data = [
    {
      title: "Upload Your Logo",
      description:
        "Incorporate your logo to enhance the professionalism of your invoice.",
    },
    {
      title: "Enter Company Information",
      description:
        "Complete your company details, including address information.",
    },
    {
      title: "Input Client Information",
      description:
        "Provide your client's name, address, and other essential details.",
    },
    {
      title: "Specify Invoice Numbers and Dates",
      description:
        "Indicate the invoice date, due date, terms, and include a unique invoice number.",
    },
    {
      title: "Select Currency, Language, and Date Format",
      description:
        "Determine the currency, language, and date format for the items on your invoice.",
    },
    {
      title: "List Billed Items",
      description:
        "Detail the services or products, along with their quantities and unit prices.",
    },
    {
      title: "Add Taxes, Shipping, and Discounts",
      description: "Outline any relevant taxes, shipping fees, and discounts.",
    },
    {
      title: "Provide Payment Terms and Notes",
      description:
        "Specify payment terms and any additional notes for your client.",
    },
    {
      title: "Create Invoice",
      description:
        "Review all information and click to instantly generate your invoice.",
    },
    {
      title: "Save Invoice",
      description:
        "Store your entire invoice for access and editing anytime, anywhere.",
    },
    {
      title: "Save for Later Use",
      description:
        "Save individual items for future use, so you won't need to rewrite them.",
    },
  ];

  return (
    <div className="w-[80vw] my-20 m-auto flex flex-col lg:flex-row gap-14 lg:gap-6 justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">
          How to make an invoice using our invoice generator for free
        </h1>
        <ul className="flex flex-col gap-3">
          {data.map((item, index) => {
            return (
              <li key={index} className="flex flex-row items-start gap-2">
                <span className="min-w-5 min-h-5 text-center text-sm bg-[#a29bfe] rounded-full text-white mt-0.5 shadow-lg">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-black">{item.title}</h3>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">
        <Image
          src={"/screenshot.jpg"}
          alt="how to image"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HowTo;
