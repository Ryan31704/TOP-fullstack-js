const library = [];

function Book(title, author, pages, read)
{
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return this.title + " by " + this.author + ", " + this.pages + " pages, read: " + this.read;
  }
}

function addBookToLibrary() {
  const titleBox = document.querySelector('#title');
  const authorBox = document.querySelector('#author');
  const pagesBox = document.querySelector('#pages');
  const readBox = document.querySelector('#read');

  let book = new Book(
    titleBox.value,
    authorBox.value,
    pages.value,
    readBox.checked
  );
  library.push(book);
  titleBox.value = '';
  authorBox.value = '';
  pagesBox.value = '';
}
const btn = document.getElementById("submit");

btn.addEventListener("click", function()
{
  addBookToLibrary();
  const container = document.querySelector(".library-container");
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book");
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");
  read.classList.add("is-read");
  const btnRead = document.createElement('input');
  btnRead.type = "checkbox";
  title.textContent = "Title: " + library[library.length - 1].title;
  author.textContent = "Author: " + library[library.length - 1].author;
  pages.textContent = "Pages: " + library[library.length - 1].pages;
  if(library[library.length - 1].read)
  {
    read.textContent = "Completed";
    btnRead.click();
  }
  else
  {
    read.textContent = "Incomplete";
  }
  contentContainer.appendChild(title);
  contentContainer.appendChild(author);
  contentContainer.appendChild(pages);
  contentContainer.appendChild(read);
  contentContainer.appendChild(btnRead);
  btnRead.addEventListener('change', function()
  {
    if(read.innerHTML === "Completed")
      read.innerHTML = "Incomplete";
    else if(read.innerHTML === "Incomplete")
      read.innerHTML = "Completed";
  });

  bookContainer.appendChild(contentContainer);
  container.appendChild(bookContainer);
});
//add book onto page  from library