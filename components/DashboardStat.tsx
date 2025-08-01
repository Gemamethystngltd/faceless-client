import { cn } from "@/lib/util";
import { ChevronRight } from "lucide-react";

interface DashboardStatProps {
  icon: React.ElementType;
  status: string;
  value: string;
  className?: string;
}
export default function DashboardStat({
  icon: Icon,
  status,
  value,
  className,
}: DashboardStatProps) {
  return (
    <div
      className={cn(
        "px-4 py-7 flex justify-center items-center space-x-3 text-white rounded-3xl mt-5",
        className
      )}
    >
      <span className="bg-white p-2 rounded-full">
        <Icon className="text-[#662D91]" />
      </span>
      <div>
        <p className="font-medium">{status}</p>
        <p className="text-sm">{value}</p>
      </div>
      <ChevronRight className="cursor-pointer" />
    </div>
  );
}
