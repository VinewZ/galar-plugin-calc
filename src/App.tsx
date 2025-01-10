import { useEffect, useState } from "react";
import { Separator } from "./components/ui/separator";
import { useListenToEvent } from "./hooks/useListenEvent";
import { evaluate } from "mathjs";

export function App() {
  const [ipValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  // Remove the ":calc" prefix from the input if it exists
  const expression = ipValue.startsWith(":calc") ? ipValue.replace(":calc", "").trim() : ipValue;

  useListenToEvent("input:change", (detail) => {
    setInputValue(detail.message);
  });

  useEffect(() => {
    if (!expression) {
      setResult(null);
      return;
    }

    try {
      const calcResult = evaluate(expression);
      setResult(calcResult.toString());
    } catch (error) {
      console.error(error);
    }
  }, [expression]);

  useEffect(() => {
  }, [ipValue]);

  return (
    <div className="relative h-full">
      <div className="flex w-full h-[270px]">
        <div className="grid place-content-center w-1/2 text-4xl p-4">
          <p className="break-all">{expression || "Expression"}</p>
        </div>
        <Separator orientation="vertical" />
        <div className="grid place-content-center w-1/2 text-4xl p-4">
          <p className="break-all">{result || "Result"}</p>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 bg-[#1e2022] h-14 px-2 flex items-center">
        <Separator className="absolute top-0 left-0 right-0 h-px bg-white/20" />
        <div className="flex gap-4 items-center">
          Evaluate Math Expressions and convert metric units
        </div>
      </footer>
    </div>
  );
}
