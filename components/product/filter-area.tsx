import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function FilterArea({
  selectedStatuses,
  setSelectedStatuses,
  selectedCategories,
  setSelectedCategories,
}: {
  selectedStatuses: string[];
  setSelectedStatuses: Dispatch<SetStateAction<string[]>>;
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <div className="flex gap-3 poppins ">
      {/* status */}
      {selectedStatuses.length > 0 && (
        <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
          <span className="text-gray-600">Status</span>
          <Separator orientation="vertical" />
          <div className="flex gap-2 items-center">
            {selectedStatuses.length < 3 ? (
              <>
                {selectedStatuses.map((status, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {status}
                  </Badge>
                ))}
              </>
            ) : (
              <>
                <Badge variant={"secondary"}>3 Selected</Badge>
              </>
            )}
          </div>
        </div>
      )}

      {/* category */}
      {selectedCategories.length > 0 && (
        <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
          <span className="text-gray-600">category</span>
          <Separator orientation="vertical" />
          <div className="flex gap-2 items-center">
            {selectedCategories.length < 3 ? (
              <>
                {selectedCategories.map((category, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {category}
                  </Badge>
                ))}
              </>
            ) : (
              <>
                <Badge variant={"secondary"}>3 Selected</Badge>
              </>
            )}
          </div>
        </div>
      )}

      {(selectedCategories.length > 0 || selectedStatuses.length > 0) && (
        <Button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedStatuses([]);
          }}
          variant={"ghost"}
          className="p-1 px-2"
        >
          <span>Reset</span>
          <IoClose />
        </Button>
      )}
    </div>
  );
}