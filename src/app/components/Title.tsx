import { CarType } from "@/app/utils/types";
import mile from "@/app/assets/icons/mile.svg";
import gas from "@/app/assets/icons/gas.svg";
import year from "@/app/assets/icons/year.svg";
import transmission from "@/app/assets/icons/transmission.svg";
import Image from "next/image";

type Props = {
  car: CarType;
};

const Title = ({ car }: Props) => {
  const arr = [
    { icon: mile, name: car.mileage },
    { icon: gas, name: car.fuelType },
    { icon: year, name: car.year },
    { icon: transmission, name: car.transmission },
  ];
  return (
    <div className="mt-10 ">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl md:text-4xl">
          {car.make} {car.model}
        </h1>

        <div className="font-semibold text-3xl md:text-4xl">
          $ {car.price.toLocaleString()}
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        {arr.map((item, key) => (
          <div
            key={key}
            className="py-1 px-3 max-md:px-1 rounded-full bg-blue-500/30 flex gap-1 items-center md:mb-5"
          >
            <Image alt="icon" src={item.icon} width={15} height={15} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
