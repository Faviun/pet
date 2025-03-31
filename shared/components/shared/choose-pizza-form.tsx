"use client";

import React from "react";
import {cn} from "@/shared/lib/utils";
import {Ingredient, ProductItem} from "@prisma/client";
import {Button} from "../ui";
import {Title} from "./title";
import Image from "next/image";
import {GroupVariants} from "./group-variants";
import {PizzaSize, PizzaType, pizzaTypes} from "@/shared/constants/pizza";
import {IngredientItem} from "./ingredient-item";
import {getProductDetails} from "@/shared/lib";
import {useProductOption} from "@/shared/hooks";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    onClickAddCart?: VoidFunction;
    className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({name, items, imageUrl, ingredients, onClickAddCart, className}) => {
    const {size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient} = useProductOption(items);

    const {totalPrice, textDetails} = getProductDetails(type, size, items, ingredients, selectedIngredients);

    const handleClickAdd = () => {
        onClickAddCart?.();
        console.log({size, type, ingredients: selectedIngredients});
    };

    return (
        <div className={cn("flex flex-1", className)}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <Image src={imageUrl} alt={name} className="transition-all z-10 duration-300" fill />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetails}</p>

                <div className="flex flex-col gap-1 mt-3">
                    <GroupVariants
                        items={availableSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>

                <div className="bg-gray-50 mt-3 p-5 rounded-md h-[290px] overflow-auto scrollbar">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={() => addIngredient(ingredient.id)}
                                active={selectedIngredients.has(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5" onClick={handleClickAdd}>
                    Добавить в корзину {totalPrice} Р
                </Button>
            </div>
        </div>
    );
};
