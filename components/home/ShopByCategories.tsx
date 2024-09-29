import React from "react";
import CategoryCard from "../shared/CategoryCard";
import { motion } from "framer-motion";
import AnimatedDivForLanding from "../shared/AnimatedDivForLanding";

const ShopByCategories = () => {
  return (
    <AnimatedDivForLanding>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold tracking-wide">Shop by Categories</h1>
        <span className="bg-secondary w-10 h-[6px]"></span>
      </div>

      <div className="grid grid-cols-1 place-items-center mt-10 gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          href={"/categories/toys"}
          color={"bg-lime-100"}
          title={"Toys"}
          image={"/images/categories/toys-category.jpg"}
        />

        <CategoryCard
          href={"/categories/accessories"}
          color={"bg-amber-100"}
          title={"Accessories"}
          image={"/images/categories/accessories-category.jpg"}
        />

        <CategoryCard
          href={"/categories/clothing"}
          color={"bg-orange-100"}
          title={"Clothing"}
          image={"/images/categories/clothing-category.jpg"}
        />

        <CategoryCard
          href={"/categories/handbags"}
          color={"bg-yellow-100"}
          title={"Handbags"}
          image={"/images/categories/handbags-category.jpg"}
        />

        <CategoryCard
          href={"/categories/wallets"}
          color={"bg-orange-100"}
          title={"Wallets"}
          image={"/images/categories/wallets-category.jpg"}
        />

        <CategoryCard
          href={"/categories/office"}
          color={"bg-blue-100"}
          title={"Office"}
          image={"/images/categories/office-category.jpg"}
        />
      </div>
    </AnimatedDivForLanding>
  );
};

export default ShopByCategories;
