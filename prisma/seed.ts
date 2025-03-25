import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingridients, products } from "./constants";

async function up() {
    await prisma.user.createMany({
        data: [
            {fullName: 'user',
                email: 'user@test.ru',
                password: hashSync('123456', 10),
                role     : 'USER',
                verified: new Date(),
            },
            {fullName: 'admin',
                email: 'admin@test.ru',
                password: hashSync('123456', 10),
                role     : 'ADMIN',
                verified: new Date(),
            },
        ]
    })

    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingridient.createMany({
        data: ingridients
    })

    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Маргарита',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg',
            categoryId: 1,
            ingridients: {
                connect: [
                    {id: 1},
                    {id: 3},
                ]
            }
        }
    })

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Пепперони',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg',
            categoryId: 1,
            ingridients: {
                connect: [
                    {id: 2},
                    {id: 3},
                ]
            }
        }
    })

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Четыре сыра',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg',
            categoryId: 1,
            ingridients: {
                connect: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                ]
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            {productId: pizza1.id, price: 100, pizzaType: 2, size: 10},
            {productId: pizza1.id, price: 50, pizzaType: 1, size: 20},
            {productId: pizza1.id, price: 150, pizzaType: 3, size: 30},
            {productId: pizza2.id, price: 100, pizzaType: 2, size: 10},
            {productId: pizza2.id, price: 150, pizzaType: 1, size: 20},
            {productId: pizza2.id, price: 200, pizzaType: 3, size: 30},
            {productId: pizza3.id, price: 200, pizzaType: 2, size: 10},
            {productId: pizza3.id, price: 250, pizzaType: 1, size: 20},
        ]
    })
    
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingridient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    
}

async function main() {
    try {
        await down();
        await up();
    } catch (error) {
        console.error(error);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});