"use client";

import Categories from "@/components/Categories";

const MostPurchased = () => {
  return (
    <div className="w-full px-4 lg:px-20 ">
      <h3 className="text-lg capitalize  mt-14 mb-4 font-bold">
        Most purchased
      </h3>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <Categories img="man.jpg" url="/men" text="men" />
        <Categories img="woman.jpg" url="women" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
        <Categories img="woman.jpg" url="womenn" text="women" />
      </div>
      <p className="mt-4 text-[#029094] font-bold flex">View more</p>
    </div>
  );
};

export default MostPurchased;
