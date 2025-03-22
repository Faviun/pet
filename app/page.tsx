import {Container, Filters, Title, TopBar} from "@/src/components/shared";
import {ProductGroupList} from "@/src/components/shared/product-group-list";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductGroupList
                                categoryId={1}
                                title="Шериф"
                                items={[
                                    {
                                        id: 1,
                                        name: "товар 1",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 500}],
                                    },
                                    {
                                        id: 2,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                ]}
                            />
                            <ProductGroupList
                                categoryId={2}
                                title="не Шериф"
                                items={[
                                    {
                                        id: 1,
                                        name: "товар 1",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 500}],
                                    },
                                    {
                                        id: 2,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                    {
                                        id: 3,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                    {
                                        id: 4,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                ]}
                            />
                            <ProductGroupList
                                categoryId={3}
                                title="не Шериф 2"
                                items={[
                                    {
                                        id: 1,
                                        name: "товар 1",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 500}],
                                    },
                                    {
                                        id: 2,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                    {
                                        id: 3,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                    {
                                        id: 4,
                                        name: "товар 2",
                                        imageUrl:
                                            "https://hi-tech.md/images/thumbnails/230/230/detailed/365/Холодильник_Gorenje_RK14EPS4_1.jpg",
                                        items: [{price: 600}],
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
