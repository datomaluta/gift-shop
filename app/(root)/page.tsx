"use client";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import PersonalizedGifts from "@/components/home/PersonalizedGifts";
import ShopByCategories from "@/components/home/ShopByCategories";
import ShopByOccasion from "@/components/home/ShopByOccasion";
import Testimonials from "@/components/home/Testimonials";

function Page() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <ShopByCategories />
      <ShopByOccasion />
      <PersonalizedGifts />
      <Testimonials />
    </>
  );
}

export default Page;
