document.addEventListener('DOMContentLoaded', async () => {
    const bookList = document.getElementById('book-list');
  
    try {
      const response = await fetch('http://localhost:5000/api/books');
      const books = await response.json();
  
      books.forEach((book) => {
        const bookCard = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Author: ${book.author}</p>
                <button class="btn btn-primary" onclick="borrowBook(${book.id})">Borrow</button>
                <button class="btn btn-warning" onclick="addToFavorites(${book.id})">Add to Favorites</button>
              </div>
            </div>
          </div>
        `;
        bookList.innerHTML += bookCard;
      });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  });
  
  async function borrowBook(bookId) {
    // Implement the borrow functionality
  }
  
  async function addToFavorites(bookId) {
    // Implement the add to favorites functionality
  }
  