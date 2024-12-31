import ProductCard from "@/components/cards/ProductCard";
import { PRODUCTS } from "@/lib/constants";

function ShopProductSection() {
  return (
    <section className="container mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-[32px] gap-y-[48px] mt-[46px]">
        {PRODUCTS.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ShopProductSection;
