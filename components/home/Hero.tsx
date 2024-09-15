import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-14 lg:gap-10 items-start lg:pt-32 pt-12 flex-col lg:flex-row">
      <div className="lg:w-[40%] w-full text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl tracking-normal leading-[50px] lg:leading-[70px] text-primary font-bold">
          The Best Way to Make Someone Happy...
        </h1>
        <p className="tracking-wide text-sm leading-[30px] mt-7 lg:mt-10">
          We know that finding the perfect gift is not an easy task. But, with
          Regalo, you can find the best gift ideas for your loved ones.
        </p>
        <button className="bg-primary text-white px-4 py-2 rounded mt-10">
          Choose Your Box
        </button>
      </div>

      <div className="lg:w-[60%] w-full">
        <Image
          src={"/images/hero-shop.webp"}
          alt="hero"
          width={1440}
          height={960}
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
