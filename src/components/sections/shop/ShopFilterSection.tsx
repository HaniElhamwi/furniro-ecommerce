import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

function ShopFilterSection() {
  return (
    <section className="bg-[#d0b49f] px-4 py-[31px] flex flex-col md:flex-row gap-8 justify-around items-center">
      {/* LHS */}
      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <img
            src="/images/filter_icon.png"
            alt="رمز التصفية"
            className="block"
          />
          <p>تصفية</p>
        </div>

        <div className="hover:cursor-pointer">
          <img src="/images/grid_icon.png" alt="رمز الشبكة" className="block" />
        </div>
        <div className="hover:cursor-pointer">
          <img
            src="/images/list_icon.png"
            alt="رمز القائمة"
            className="block"
          />
        </div>
        <div className="hidden md:block">
          <Separator
            orientation="vertical"
            className="h-[37px] border border-customGray2"
          />
        </div>
        <p className="text-normal">عرض 1 - 16 من 32 نتيجة</p>
      </div>
      {/* RHS */}
      <div className="flex gap-8">
        <div className="flex gap-[17px] items-center">
          <p className="text-[20px]">عرض</p>
          <Input
            type="number"
            className="bg-white w-[65px] h-[55px]"
            placeholder="0"
          />
        </div>
        <div className="flex gap-[17px] items-center">
          <p className="text-[20px]">ترتيب حسب</p>
          <Select>
            <SelectTrigger className="w-[180px] h-[55px]">
              <SelectValue placeholder="اختر فلترًا" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>التصفية</SelectLabel>
                <SelectItem value="default">افتراضي</SelectItem>
                <SelectItem value="type">النوع</SelectItem>
                <SelectItem value="price">السعر</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default ShopFilterSection;
