import { Input } from "../ui/input"

import { FilterArea } from "./filter-area"
import { StatusDropDown } from "../dropdown/status-drop-down"
import { CategoryDropDown } from "../dropdown/category-drop-down"

export const ProductTable = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 mb-8 mt-6" >
                <div className="flex items-center justify-between" >
                    <Input placeholder="Search by name..." className="max-w-sm h-10" />
                    <div className="flex items-center gap-4" >
                        <StatusDropDown />
                        <CategoryDropDown />
                    </div>
                </div>
                <FilterArea />
            </div>
        </div>
    )
}