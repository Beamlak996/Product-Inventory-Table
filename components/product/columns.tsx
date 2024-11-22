import { ReactNode } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IconType } from "react-icons";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
    header: "Sku",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
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
    header: "Quantity In Stock",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
];