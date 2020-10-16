// const fruitsJson = localStorage.getItem('fruits');
// const fruits = fruitsJson ? JSON.parse(fruitsJson) : [];

export const FruitApi = {

    async getFruits() {
        const res = await fetch('/api/fruits', {
            method: 'GET',
        });
        const fruits = await res.json();
        return fruits;
    },

    async addFruit(fruit) {
        const res = await fetch('/api/fruit', {
            method: 'POST',
            body: JSON.stringify(fruit),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const newFruit = await res.json();
        return newFruit;
    }
};
