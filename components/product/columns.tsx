import { ReactNode } from "react";
import { ColumnDef, Column } from "@tanstack/react-table";
import { IconType } from "react-icons";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ProductDropDown } from "./product-drop-down";

export type Product = {
  id: string;
  name: string;
  supplier: string;
  sku: string;
  category:
    | "Electronics"
    | "Furniture"
    | "Clothing"
    | "Books"
    | "Toys"
    | "Beauty"
    | "Sports"
    | "Home Decor"
    | "Home Appliances"
    | "Others";
  status: "Published" | "Inactive" | "Draft";
  quantityInStock: number;
  price: number;
  icon: IconType;
};

type SortableHeaderProps = {
  column: Column<Product, unknown>; // Specify the type of data
  label: string;
};

const SortableHeader: React.FC<SortableHeaderProps> = ({ column, label }) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted === "asc"
      ? IoMdArrowUp
      : isSorted === "desc"
      ? IoMdArrowDown
      : ArrowUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="" asChild>
        <div
          className={`flex items-start py-[14px] select-none cursor-pointer  p-2 gap-1 ${
            isSorted && "text-primary"
          }`}
          aria-label={`Sort by ${label}`}
        >
          {label}
          <SortingIcon className=" h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom">
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <IoMdArrowUp className="mr-2 h-4 w-4" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <IoMdArrowDown className="mr-2 h-4 w-4" />
          Desc
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <SortableHeader column={column} label="Name" />,
    cell: ({ row }) => {
      const Icon = row.original.icon;
      const name = row.original.name;

      return (
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-sm bg-primary/10">
            <Icon className="text-lg text-primary" />
          </div>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => <SortableHeader column={column} label="SKU" />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <SortableHeader column={column} label="Price" />,
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <SortableHeader column={column} label="Category" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader column={column} label="Status" />,
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;
      let icon: ReactNode;

      switch (status) {
        case "Published":
          colorClass = "text-green-600 bg-green-100";
          icon = <FaCheck className="text-[12px]" />;
          break;
        case "Inactive":
          colorClass = "text-red-600 bg-red-100";
          icon = <FaInbox className="text-[12px]" />;
          break;
        case "Draft":
          colorClass = "text-gray-600 bg-gray-100";
          icon = <IoClose className="text-[12px]" />;
          break;
        default:
          break;
      }

      return (
        <span
          className={`px-3 py-[2px] rounded-full font-medium ${colorClass} flex gap-1 items-center w-fit`}
        >
          {icon}
          <span className="text-[13px]">{status}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "quantityInStock",
    header: ({ column }) => (
      <SortableHeader column={column} label="Quantity In Stock" />
    ),
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => <SortableHeader column={column} label="supplier" />,
  },
  {
    id: "actions",
    cell: ({ row }) => <ProductDropDown row={row} />,
  },
];
