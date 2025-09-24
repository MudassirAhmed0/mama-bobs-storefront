import { GetProductByHandleQuery } from "@/types/shopify-graphql";
import React from "react";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

type ProductOptionsProps = {
  options: NonNullable<GetProductByHandleQuery["product"]>["options"];
  selectedOptions?: Record<string, string>;
  setSelectedOptions?: (options: Record<string, string>) => void;
  isGlass?: boolean;
};

const ProductOptions = ({
  options,
  selectedOptions = {},
  setSelectedOptions,
  isGlass = false,
}: ProductOptionsProps) => {
  const handleOptionChange = (optionName: string, value: string) => {
    const updatedOptions = {
      ...selectedOptions,
      [optionName]: value,
    };
    setSelectedOptions?.(updatedOptions);
  };

  const renderOptionUI = (
    option: NonNullable<GetProductByHandleQuery["product"]>["options"][0],
    isGlass: boolean
  ) => {
    switch (option.name.toLowerCase()) {
      case "color":
        return (
          <div className="flex items-center gap-2">
            {option?.optionValues?.map((value) => (
              <Button
                key={value}
                className={cn(
                  "p-0 transition-all duration-300 ease-in-out hover:scale-[1.05]",
                  selectedOptions[option.name] === value &&
                    (value.toLowerCase() === "black"
                      ? "border-2 border-green-400"
                      : "border-2 border-black")
                )}
                onClick={() => handleOptionChange(option.name, value)}
                style={{
                  boxShadow: "0 2px 15px 0 rgba(0,0,0,0.2)",
                  backgroundColor: value,
                  width: "24px",
                  height: "24px",
                  borderRadius: "100%",
                }}
              />
            ))}
          </div>
        );

      case "size":
        return (
          <div className="flex flex-wrap gap-2">
            {option?.optionValues?.map((value) => (
              <Button
                key={value}
                size="sm"
                variant={
                  selectedOptions[option.name] === value ? "default" : "outline"
                }
                className={cn(
                  "transition-all duration-300 ease-in-out hover:scale-[1.05]",
                  {
                    "ring-1 ring-black": selectedOptions[option.name] === value,
                  }
                )}
                onClick={() => handleOptionChange(option.name, value)}
              >
                {value}
              </Button>
            ))}
          </div>
        );

      default:
        return (
          <div className="flex flex-wrap gap-2">
            {option?.optionValues?.map((value) => (
              <Button
                key={value}
                variant={
                  selectedOptions[option.name] === value
                    ? "default"
                    : isGlass
                    ? "ghost"
                    : "outline"
                }
                className={cn("transition-all duration-300 ease-in-out", {
                  "ring-1 ring-black": selectedOptions[option.name] === value,
                })}
                onClick={() => handleOptionChange(option.name, value)}
              >
                {value}
              </Button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col w-full gap-4">
      {options?.map((option) => (
        <div key={option.name} className="flex w-full flex-col gap-2">
          <label className="text-sm font-medium font-bold capitalize">
            <strong> {option.name}</strong>
          </label>
          {renderOptionUI(option, isGlass)}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
