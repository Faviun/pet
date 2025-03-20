"use client";

import React from "react";
import {FilterChecboxProps, FilterCheckbox} from "./filter-checkbox";
import {Input} from "../ui";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaulItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onchange?: (value: string) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaulItems,
    limit = 5,
    searchInputPlaceholder = "Поиск...",
    onchange,
    defaultValue,
    className,
}) => {
    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            <div className="mb-5">
                <Input
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border-none"
                />
            </div>
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {items.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        onCheckedChange={() => console.log("checked")}
                        checked={false}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}
            </div>
        </div>
    );
};
