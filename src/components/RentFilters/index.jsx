import { Input, Select, SelectItem, Slider } from "@nextui-org/react";

const CITIES = [
  { key: "teh", label: "تهران" },
  { key: "shir", label: "شیراز" },
  { key: "esph", label: "اصفهان" },
];

const RentFilters = () => {
  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-3">
        <Input
          type="number"
          label="حداقل قیمت پیش‌پرداخت"
          endContent={<span className="text-xs font-black">﷼</span>}
        />
        <Input
          type="number"
          label="حداکثر قیمت پیش‌پرداخت"
          endContent={<span className="text-xs font-black">﷼</span>}
        />
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-3">
        <Input
          type="number"
          label="حداقل قیمت اجاره"
          endContent={<span className="text-xs font-black">﷼</span>}
        />
        <Input
          type="number"
          label="حداکثر قیمت اجاره"
          endContent={<span className="text-xs font-black">﷼</span>}
        />
      </div>

      <div className="mb-2">
        <Select
          className="w-full"
          label="شهر را انتخاب کنید"
          classNames={{ base: "max-w-full" }}
        >
          {CITIES.map((city) => (
            <SelectItem key={city.key}>{city.label}</SelectItem>
          ))}
        </Select>
      </div>

      <div>
        <Slider
          label="متراژ"
          step={10}
          size="md"
          color="foreground"
          minValue={20}
          maxValue={1000}
          className="max-w-md"
          defaultValue={[0, 500]}
          classNames={{ value: "ltr" }}
          formatOptions={{
            style: "decimal",
          }}
        />
      </div>
    </>
  );
};

export default RentFilters;
