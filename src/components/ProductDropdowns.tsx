"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons"; // Importing ChevronDownIcon
import { productCategories } from "@/constant";
import Link from "next/link";

export default function ProductDropdowns() {
    // State to track the open dropdown
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    return (
        <div className="flex flex-wrap gap-4 py-5 justify-center">
            {productCategories.map((category) =>
                category.items.length > 0 ? (
                <DropdownMenu
                    key={category.category}
                    onOpenChange={(isOpen) =>
                    setOpenDropdown(isOpen ? category.category : null)
                    }
                >
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                        {category.category}
                        <span
                        className={`transition-transform duration-300 ${
                            openDropdown === category.category ? "rotate-180" : ""
                        }`}
                        >
                        <ChevronDownIcon />
                        </span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                    {category.items.map((item) =>
                        item.title ? (
                        <DropdownMenuItem key={item.title} asChild>
                            <Link href={item.href}>{item.title}</Link>
                        </DropdownMenuItem>
                        ) : null
                    )}
                    </DropdownMenuContent>
                </DropdownMenu>
                ) : (
                <Button key={category.category} variant="ghost">
                    {category.category}
                </Button>
                )
            )}
        </div>
    );
}
