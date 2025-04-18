"use client";

import React from "react";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/shared/components/ui/sheet";
import Link from "next/link";
import {Button} from "../ui";
import {ArrowRight} from "lucide-react";
import {CartDrawerItem} from "./cart-drawer-item";
import {getCartItemDetails} from "@/shared/lib";

interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => {
    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                    <SheetHeader>
                        <SheetTitle>
                            in cart <span className="font-bold">3 items</span>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="-mx-6 mt-5 overflow-auto flex-1">
                        <div className="mb-2">
                            <CartDrawerItem
                                id={1}
                                imageUrl={"/images/cake.jpg"}
                                details={getCartItemDetails(2, 30, [{name: "Ягоды"}, {name: "Орехи"}])}
                                name={"Маргарита"}
                                price={255}
                                quantity={1}
                            />
                        </div>
                        <div className="mb-2">
                            <CartDrawerItem
                                id={1}
                                imageUrl={"/images/cake.jpg"}
                                details={getCartItemDetails(2, 30, [{name: "Ягоды"}, {name: "Орехи"}])}
                                name={"Маргарита"}
                                price={255}
                                quantity={1}
                            />
                        </div>
                        <div className="mb-2">
                            <CartDrawerItem
                                id={1}
                                imageUrl={"/images/cake.jpg"}
                                details={getCartItemDetails(2, 30, [{name: "Ягоды"}, {name: "Орехи"}])}
                                name={"Маргарита"}
                                price={255}
                                quantity={1}
                            />
                        </div>
                    </div>

                    <SheetFooter className="-mx-6 bg-white p-8">
                        <div className="w-full">
                            <div className="flex mb-4">
                                <span className="flex flex-1 text-lg text-neutral-500">
                                    Total
                                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                                </span>

                                <span className="text-bold text-lg">500 p</span>
                            </div>

                            <Link href="/cart">
                                <Button type="submit" className="w-full h-12 text-base">
                                    Оформить заказ
                                    <ArrowRight className="w-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};
