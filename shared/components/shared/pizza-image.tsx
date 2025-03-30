import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
    imageUrl: string;
    size: number;
    className?: string;
}

export const PizzaImage: React.FC<Props> = ({imageUrl, size, className}) => {
    const sizes = {
        20: 500,
        30: 600,
        40: 700,
    } as const;

    return (
        <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
            <Image
                src={imageUrl}
                alt="Product image"
                width={sizes[size as 20 | 30 | 40] || 300}
                height={sizes[size as 20 | 30 | 40] || 300}
                className="relative left-2 top-2 transition-all z-10 duration-300"
                priority
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
        </div>
    );
};
