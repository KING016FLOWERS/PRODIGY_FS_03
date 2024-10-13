import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div>
              <h3 className="text-base font-bold">{keyItem}</h3>
              <div className="grid gap-2 mt-2">
                {keyItem === 'brand'
                  ? // Display unique brands only for the 'brand' category
                    [...new Set(Object.values(filterOptions[keyItem]).flat())].map((option) => (
                      <Label key={option.id} className="flex font-medium items-center gap-2">
                        <Checkbox
                          checked={
                            filters &&
                            Object.keys(filters).length > 0 &&
                            filters[keyItem] &&
                            filters[keyItem].indexOf(option.id) > -1
                          }
                          onCheckedChange={() => handleFilter(keyItem, option.id)}
                        />
                        {option.label}
                      </Label>
                    ))
                  : // Display regular filter options for other categories
                    filterOptions[keyItem].map((option) => (
                      <Label key={option.id} className="flex font-medium items-center gap-2">
                        <Checkbox
                          checked={
                            filters &&
                            Object.keys(filters).length > 0 &&
                            filters[keyItem] &&
                            filters[keyItem].indexOf(option.id) > -1
                          }
                          onCheckedChange={() => handleFilter(keyItem, option.id)}
                        />
                        {option.label}
                      </Label>
                    ))}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
