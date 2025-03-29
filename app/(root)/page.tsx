import {prisma} from "@/prisma/prisma-client";
import {Container, Filters, Title, TopBar} from "@/src/components/shared";
import {ProductGroupList} from "@/src/components/shared/product-group-list";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingredients: true,
                    items: true,
                },
            },
        },
    });

    console.log(categories);

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar categories={categories.filter((category) => category.products.length > 0)} />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map((category) => (
                                <ProductGroupList
                                    key={category.id}
                                    title={category.name}
                                    categoryId={category.id}
                                    items={category.products}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
