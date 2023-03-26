// pages/AddProduct.tsx
import React from "react";
import ReusableForm from "components/reusableForm";

const ItemSubmit: React.FC = () => {
  const productFields = [
    {
      label: "Product Name",
      name: "productName",
      type: "text",
      placeholder: "Enter product name",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter description",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "Enter price",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "Enter price",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "Enter price",
    },
  ];

  const handleProductSubmit = (data: Record<string, string>) => {
    // Add your code here to submit the product data to the database
    console.log(data);
  };

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h1 className="mb-4 text-2xl">Add item</h1>
      <ReusableForm fields={productFields} onSubmit={handleProductSubmit} />
    </div>
  );
};

export default ItemSubmit;
