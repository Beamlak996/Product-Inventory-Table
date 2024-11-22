import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { ProductTable } from "../product/product-table";
import { products } from "../product/product-data";
import { columns } from "../product/columns";

export const AppTable = () => {
  return (
    <Card className="mt-12 flex flex-col shadow-none border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className="text-sm text-slate-600" >34 products</p>
          </div>
          <Button>Add Products</Button>
        </div>
      </CardHeader>

      <CardContent>
        <ProductTable data={products} columns={columns}  />
      </CardContent>
    </Card>
  );
};
