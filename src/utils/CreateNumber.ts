export const CreateNumber = () => {
    const number = new Set<number>();

    while (number.size < 6) {
        const randomNuber = Math.floor(Math.random() * 45) + 1;
        number.add(randomNuber);
    }

    return Array.from(number).sort((a, b) => a - b);
};
