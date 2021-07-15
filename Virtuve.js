class Virtuve {
    constructor(owner) {
        this.owner = owner;
        this.ingredientsList = [];
    }
    intro() {
        console.log(`Sveiki atvyke i ${this.owner} virtuve!`);
        console.log('');
    };

    nupirkta(item, quantity) {
        this.ingredientsList.push({ item, quantity, usable: true })
    };

    turimiProduktai() {
        console.log('=====Siuo metu Saldytuve=====');
        for (let i = 0; i < this.ingredientsList.length; i++) {
            const item = this.ingredientsList[i];
            console.log(`${i + 1}) ${item.item[0].toUpperCase() + item.item.slice(1)}: ${item.quantity}`);
        }
        console.log('===============^==============');
        console.log('');
    };

    sunaudota(name, quantity) {
        for (const ingredient of this.ingredientsList) {

            if (ingredient.item === name) {
                ingredient.quantity -= quantity;
            }
        }
    };

    sugedesProduktas(itemName) {
        let updatedProductList = [];
        for (let product of this.ingredientsList) {
            if (product.item !== itemName) {
                updatedProductList.push(product)
            }
        }
        this.ingredientsList = updatedProductList;
    };

}
module.exports = Virtuve;