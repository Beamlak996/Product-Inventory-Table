import { IoClose } from "react-icons/io5";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const FilterArea = () => {
  return (
    <div className="flex gap-3">
      {/* status */}
      <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
        <span className="text-gray-600">Status</span>
        <Separator orientation="vertical" />
        <div className="flex gap-2 items-center">
          <Badge variant="secondary">item 1</Badge>
          <Badge variant="secondary">item 1</Badge>
        </div>
      </div>

      {/* Category */}
      <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
        <span className="text-gray-600">Category</span>
        <Separator orientation="vertical" />
        <div className="flex gap-2 items-center">
          <Badge variant="secondary">item 2</Badge>
          <Badge variant="secondary">item 2</Badge>
        </div>
      </div>
      <Button variant="ghost" className="p-1 px-2">
        <span>Reset</span>
        <IoClose />
      </Button>
    </div>
  );
};
