import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DashboardCard({
  title,
  total,
  icon,
  color = "bg-blue-600",
  link = "#",
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Background Circle */}
      <div
        className={`absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 ${color}`}
      ></div>

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            {total}
          </h2>

          <Link
            href={link}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View Details
            <ArrowRight size={16} />
          </Link>

        </div>

        <div
          className={`${color} h-16 w-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}