

async function fetchCategories() {
    try {
        const url = "https://opentdb.com/api_category.php";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        const categoryNames = data.trivia_categories.map(category => category.name);
        console.log(categoryNames);

        return categoryNames;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }
}
fetchCategories()