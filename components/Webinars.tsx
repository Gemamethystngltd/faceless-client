import { AlarmClock, CalendarDays } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Webinars({ length }: { length: number }) {
  return (
    <div className="bg-[#F1F1F1] p-5 rounded-t-3xl">
      {Array.from({ length }, (_, index) => (
        <div
          className="flex justify-between items-center bg-white rounded-2xl p-5 mb-5"
          key={index}
        >
          <div className="flex items-center space-x-3">
            <Image
              src="/imgs/worker.jpg"
              alt="Placeholder"
              width={132}
              height={132}
              className="rounded-2xl"
            />
            <div className="flex flex-col space-y-5">
              <div>
                <p className="font-medium text-xl">
                  Professional Oil&Gas conference
                </p>
                <p className="text-gray-600">
                  The Annual Oil & Gas Leadership Conference brings together...
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="flex items-center space-x-2">
                  <span>
                    <CalendarDays className="w-5 h-5 text-gray-500" />
                  </span>
                  <span>Oct 4,2025</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>
                    <AlarmClock className="w-5 h-5 text-gray-500" />
                  </span>
                  <span>12:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-end">
            <Button variant="outline" className="px-10">
              Register
            </Button>
            <p className="mr-4 text-gray-500">Free</p>
          </div>
        </div>
      ))}
    </div>
  );
}
