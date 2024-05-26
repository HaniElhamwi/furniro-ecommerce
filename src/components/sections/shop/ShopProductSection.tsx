import ProductCard from "@/components/cards/ProductCard";
import React from "react";

function ShopProductSection() {
  const data = [
    {
      id: "10",
      imageUrl: "/images/p_1.png",
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "2.500.000",
      otherPrice: "3.500.000",
      type: "DISCOUNTED",
      typeValue: "-30%",
    },
    {
      id: "20",
      imageUrl: "/images/p_2.png",
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "2.500.000",
      otherPrice: "3.500.000",
      type: "DISCOUNTED",
      typeValue: "-30%",
    },
    {
      id: "30",
      imageUrl: "/images/p_3.png",
      title: "Lolito",
      description: "Luxury big sofa",
      price: "7.000.000",
      otherPrice: "14.000.000",
      type: "DISCOUNTED",
      typeValue: "-50%",
    },
    {
      id: "40",
      imageUrl: "/images/p_4.png",
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "500.000",
      otherPrice: "",
      type: "NEW",
      typeValue: "New",
    },
    {
      id: "50",
      imageUrl: "/images/p_5.png",
      title: "Grifo",
      description: "Night lamp",
      price: "1.500.000",
      otherPrice: "",
      type: "NORMAL",
      typeValue: "",
    },

    {
      id: "60",
      imageUrl: "/images/p_6.png",
      title: "Muggo",
      description: "Small mug",
      price: "150.000",
      otherPrice: "",
      type: "NEW",
      typeValue: "New",
    },
    {
      id: "70",
      imageUrl: "/images/p_7.png",
      title: "Pingky",
      description: "Cute bed set",
      price: "7.000.000",
      otherPrice: "14.000.000",
      type: "DISCOUNTED",
      typeValue: "-50%",
    },

    {
      id: "80",
      imageUrl: "/images/p_8.png",
      title: "Potty",
      description: "Minimalist flower pot",
      price: "500.000",
      otherPrice: "",
      type: "NEW",
      typeValue: "New",
    },
    {
      id: "90",
      imageUrl: "/images/p_1.png",
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "2.500.000",
      otherPrice: "3.500.000",
      type: "DISCOUNTED",
      typeValue: "-30%",
    },
    {
      id: "100",
      imageUrl: "/images/p_2.png",
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "2.500.000",
      otherPrice: "3.500.000",
      type: "DISCOUNTED",
      typeValue: "-30%",
    },
    {
      id: "110",
      imageUrl: "/images/p_3.png",
      title: "Lolito",
      description: "Luxury big sofa",
      price: "7.000.000",
      otherPrice: "14.000.000",
      type: "DISCOUNTED",
      typeValue: "-50%",
    },
    {
      id: "120",
      imageUrl: "/images/p_4.png",
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "500.000",
      otherPrice: "",
      type: "NEW",
      typeValue: "New",
    },
    {
      id: "130",
      imageUrl: "/images/p_5.png",
      title: "Grifo",
      description: "Night lamp",
      price: "1.500.000",
      otherPrice: "",
      type: "NORMAL",
      typeValue: "",
    },

    {
      id: "140",
      imageUrl: "/images/p_6.png",
      title: "Muggo",
      description: "Small mug",
      price: "150.000",
      otherPrice: "",
      type: "NEW",
      typeValue: "New",
    },
    {
      id: "150",
      imageUrl: "/images/p_7.png",
      title: "Pingky",
      description: "Cute bed set",
      price: "7.000.000",
      otherPrice: "14.000.000",
      type: "DISCOUNTED",
      typeValue: "-50%",
    },

    {
      id: "160",
      imageUrl: "/images/p_8.png",
      title: "Potty",
      description: "Minimalist flower pot",
      price: "500.000",
      otherPrice: "",
      type: "NEW",
      typeValue: "New",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt-[46px]">
        {data.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ShopProductSection;
