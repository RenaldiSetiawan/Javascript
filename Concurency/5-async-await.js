async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}
 
makeCoffee();

// Handle onRejected using async-await
async function makeMilk() {
    try {
        const milk = await getMilk();
        console.log(milk);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeMilk();