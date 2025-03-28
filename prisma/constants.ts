export const categories = [
    {name: 'Пиццы'},
    {name: 'Суши'},
    {name: 'Бургеры'},
    {name: 'Паста'},
    {name: 'Салаты'},
]

export const ingredients = [
    {name: 'Помидоры', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Огурцы', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Сыр', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Хлеб', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Мясо', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Рыба', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Халва', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Картошка', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Макарошка', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Чай', price: 10, imageUrl: '/images/cake.jpg'},
    {name: 'Арбузы', price: 10, imageUrl: '/images/cake.jpg'},

].map((ingredient, index) => ({id: index + 1, ...ingredient}))

export const products = [
    {name: 'Маргарита1', imageUrl: '/images/cake.jpg', categoryId: 2},
    {name: 'Пепперони1', imageUrl: '/images/cake.jpg', categoryId: 3},
    {name: 'Четыре сыра1', imageUrl: '/images/cake.jpg', categoryId: 4},
]