"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

export function DatePickerDemo({
  handleDateChange,
  dataKey,
  text
}: {
  handleDateChange: (dataKey: string, date: Date) => void;
  dataKey: string;
  text:string
}) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (date) {
      handleDateChange(dataKey, date);
    }
  }, [date, dataKey]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full rounded-xl h-12 justify-start text-left font-normal hover:bg-gray-50",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, "PPP") : <span>{text}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
