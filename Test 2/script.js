document.addEventListener("DOMContentLoaded", () => {
    const booksContainer = document.getElementById("books-container");
    const addBookBtn = document.getElementById("add-book-btn");

    // Handling Book Addition using prompt()
    addBookBtn.addEventListener("click", () => {
        const title = prompt("Enter book title:");
        if (!title) return;

        const author = prompt("Enter author name:");
        if (!author) return;

        const description = prompt("Enter a short description:");
        if (!description) return;

        // Creating Book Card
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        // Title (📖 Icon, Bold, Blue, and Largest)
        const titleElement = document.createElement("p");
        titleElement.classList.add("title");
        titleElement.innerHTML = `<strong>📖 Title: <span class="title-value">${title}</span></strong>`;

        // Author (Bold and Medium-Sized)
        const authorElement = document.createElement("p");
        authorElement.classList.add("author");
        authorElement.innerHTML = `<strong>Author:</strong> ${author}`;

        // Description (Smallest)
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("description");
        descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

        // Appending Elements to Book Card
        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(descriptionElement);

        // Appending Book Card to Container
        booksContainer.appendChild(bookCard);
    });
});
