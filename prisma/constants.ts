export const categories = [
    {name: 'Пиццф'},
    {name: 'Суши'},
    {name: 'Бургеры'},
    {name: 'Паста'},
    {name: 'Салаты'},
]

export const ingridients = [
    {name: 'Помидоры', price: 10, imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg'},
    {name: 'Огурцы', price: 10, imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg'},
    {name: 'Сыр', price: 10, imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg'},
].map((ingridient, index) => ({id: index + 1, ...ingridient}))

export const products = [
    {name: 'Маргарита1', imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg', categoryId: 2},
    {name: 'Пепперони1', imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg', categoryId: 3},
    {name: 'Четыре сыра1', imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/15/12/tomatoes-1621813_960_720.jpg', categoryId: 4},
]