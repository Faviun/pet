import Image from "next/image";
import {cn} from "@/shared/lib/utils";

interface Props {
    src: string;
    className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({src, className}) => {
    return <Image className={cn("w-[60px] h-[60px]", className)} src={src} alt="Cart item" width={60} height={60} />;
};
