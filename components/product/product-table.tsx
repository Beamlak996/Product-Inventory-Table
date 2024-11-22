import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FilterArea } from "./filter-area";
import { StatusDropDown } from "../dropdown/status-drop-down";
import { CategoryDropDown } from "../dropdown/category-drop-down";
import { Button } from "../ui/button";
import { PaginationSelection } from "./pagination-selection";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface PaginationType {
  pageIndex: number;
  pageSize: number;
}

export function ProductTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: 8,
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col gap-4 mb-8 mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Input
            placeholder="Search by name..."
            className="max-w-sm h-10 border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-4">
            <StatusDropDown />
            <CategoryDropDown />
          </div>
        </div>
        <FilterArea />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border">
        <Table className="w-full">
          <TableHeader className="sticky top-0 bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="p-4 text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-100"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results found. Try adjusting your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-5">
        <PaginationSelection
          pagination={pagination}
          setPagination={setPagination}
        />

        <div className="flex gap-6 items-center">
          <span className="text-sm text-gray-500">
            Page {pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <div className="flex items-center justify-end space-x-2 py-4">
            {/* First Page Button */}
            <Button
              variant="outline"
              className="size-9 w-12"
              size="sm"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <BiFirstPage />
            </Button>

            {/* Previous Page Button */}
            <Button
              variant="outline"
              className="size-9 w-12"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <GrFormPrevious />
            </Button>

            {/* Next Page Button */}
            <Button
              className="size-9 w-12"
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <GrFormNext />
            </Button>

            {/* Last Page Button */}
            <Button
              className="size-9 w-12"
              variant="outline"
              size="sm"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <BiLastPage />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
