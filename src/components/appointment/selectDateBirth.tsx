import React from "react";

// Add a prop for the callback function
export default function SselectDateBirth({
  onDateChange,
}: {
  onDateChange: (type: any, value: any) => void;
}) {
  const date = new Date();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 200 },
    (_, i) => date.getFullYear() - i
  ).sort((a, b) => b - a);

  // Function to call onDateChange with the new date value
  const handleChange = (e: any, type: any) => {
    onDateChange(type, e.target.value); // Call the passed-in callback function
  };

  return (
    <div className="h-full">
      <div className="flex h-full gap-2">
        {/* Add onChange handlers to each select */}
        <select
          onChange={(e) => handleChange(e, "day")}
          required
          className="w-1/3 h-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option disabled>Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => handleChange(e, "month")}
          required
          className="w-1/3 h-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option disabled>Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => handleChange(e, "year")}
          required
          className="w-1/3 h-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option disabled>Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
