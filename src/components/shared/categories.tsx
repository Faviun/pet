"use client";

import React from "react";
import {cn} from "../../lib/utils";
import {useCategoryStore} from "@/src/store/category";

interface Props {
    className?: string;
}

const cats = [
    {id: 1, name: "Шериф"},
    {id: 2, name: "Мафия"},
    {id: 3, name: "Полиция"},
    {id: 4, name: "Детектив"},
    {id: 5, name: "Комедия"},
    {id: 6, name: "Драма"},
    {id: 7, name: "Фэнтези"},
    {id: 8, name: "Ужасы"},
];

export const Categories: React.FC<Props> = ({className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}
        >
            {cats.map(({name, id}, index) => (
                <a
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId === id &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    href={`/#${name}`}
                    key={index}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
