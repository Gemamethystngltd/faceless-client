"use client";

import { AlarmClock, CalendarDays } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface WebinarCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  price: string | number;
  image: string;
  status?: string;
}

export default function WebinarCard({
  title,
  description,
  date,
  time,
  image,
  price,
}: WebinarCardProps) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center bg-white rounded-2xl p-5 mb-5">
      <div className="flex items-center space-x-3">
        <Image
          src={image}
          alt="Placeholder"
          width={132}
          height={132}
          className="rounded-2xl"
        />
        <div className="flex flex-col space-y-5">
          <div>
            <p className="font-medium text-xl">{title}</p>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="flex items-center space-x-2">
              <span>
                <CalendarDays className="w-5 h-5 text-gray-500" />
              </span>
              <span>{date}</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>
                <AlarmClock className="w-5 h-5 text-gray-500" />
              </span>
              <span>{time}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3 justify-center items-end">
        <Button
          variant="outline"
          className="px-10"
          onClick={() => router.push("/dashboard/register")}
        >
          Register
        </Button>
        <p className="mr-4 text-gray-500">{price}</p>
      </div>
    </div>
  );
}
