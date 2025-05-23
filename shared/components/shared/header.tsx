import React from "react";
import Image from "next/image";
import Link from "next/link";

import {Container} from "./container";
import {Button} from "../ui";
import {User} from "lucide-react";
import {cn} from "@/shared/lib/utils";
import {SearchInput} from "./search-input";
import {CartButton} from "./cart-button";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn("border-b border-gray-100", className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" width={50} height={50} alt="Logo" />
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16} />
                        Войти
                    </Button>

                    <CartButton />
                </div>
            </Container>
        </header>
    );
};
