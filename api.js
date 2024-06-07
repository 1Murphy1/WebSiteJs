async function makeApiRequest() {
    try {
        const response = await fetch("https://catfact.ninja/fact")
        const data = await response.json();
        return data.fact
    } catch (error) {
        throw new Error('Ошибка при получении данных: ' + error);
    }
}