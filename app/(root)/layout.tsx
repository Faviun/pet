import type {Metadata} from "next";
import {Header} from "@/src/components/shared";

export const metadata: Metadata = {
    title: "Домашняя выпечка",
    description: "Самая свежая выпечка в мире",
    //Придумать норм название
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />
            {children}
            {modal}
        </main>
    );
}
