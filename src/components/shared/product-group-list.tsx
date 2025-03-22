"use client";

import React from "react";
import {useIntersection} from "react-use";
import {Title} from "./title";
import {cn} from "../../lib/utils";
import {ProductCard} from "./product-card";
import {useCategoryStore} from "@/src/store/category";

interface Props {
    title: string;
    items: any[];
    listClassName?: string;
    categoryId: number;
    className?: string;
}

export const ProductGroupList: React.FC<Props> = ({
    title,
    items,
    listClassName,
    categoryId,
    className,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef<HTMLDivElement>(null);

    const intersection = useIntersection(
        intersectionRef as React.RefObject<HTMLDivElement>,
        {
            threshold: 0.4,
        }
    );

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items
                    .filter((item) => item.items.length > 0)
                    .map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            price={item.items[0].price}
                        />
                    ))}
            </div>
        </div>
    );
};
