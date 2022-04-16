const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

//event listener
btn.addEventListener('click', function(e){
    e.preventDefault();

    //basic valoidation & create element

    if(title.value=='' || author.value=='' || year.value=='' ){
        alert("Please input value")
    }else{
        const newRow= document.createElement('tr');

        //new title entry
        const newTitle= document.createElement('td');
        newTitle.innerText = title.value;
        newRow.appendChild(newTitle);

        //new author entry
        const newAuthor= document.createElement('td');
        newAuthor.innerText = author.value;
        newRow.appendChild(newAuthor);

        //new year entry
        const newYear= document.createElement('td');
        newYear.innerText = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
})