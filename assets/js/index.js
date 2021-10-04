function search(){
    input_data = document.getElementById("search")
    input_data = input_data.value
    console.log(input_data)
}
let input_data = document.getElementById('search');
if(document.getElementById('search').checked){
input_data=document.getElementById('search').value
}
// var x = document.getElementById("mySearch");
var defaultVal = input_data.defaultValue;
var currentVal = input_data.value;
{
    /* <div class="book_block">
<figure>
    <img src="https://books.google.com/books/content?id=8C7KygAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" alt="">
</figure>
<section>
    <h3 class="title">Theory and Problems of Linear Algebra</h3>
    <span class="author_name">R. D. Sharma</span>
    <span class="publishing_date">2010-12-01</span>
    <p>The book exhaustively covers the subject matter and its applications in various fields. To understand the subject matter covered in the book, reader must be aware of some basic concepts of abstract algebra.</p>
</section>
</div> */

// accessInfo: {country: 'IN', viewability: 'NO_PAGES', embeddable: false, publicDomain: false, textToSpeechPermission: 'ALLOWED', …}
// etag: "PP6fcOVKqmM"
// id: "8C7KygAACAAJ"
// kind: "books#volume"
// saleInfo: {country: 'IN', saleability: 'NOT_FOR_SALE', isEbook: false}
// searchInfo: {textSnippet: 'The book exhaustively covers the subject matter an…aware of some basic concepts of abstract algebra.'}
// selfLink: "https://www.googleapis.com/books/v1/volumes/8C7KygAACAAJ"
// volumeInfo: {title: 'Theory and Problems of Linear Algebra', authors: Array(1), publishedDate: '2010-12-01', description: 'Theory and Problems of Linear Algebra has been des…exhaustively covers the subject matter and its ap', industryIdentifiers: Array(2), …}

    var data=''
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText)
            
            data = JSON.parse(this.responseText)
            // console.log(this.responseText)
            let container = document.getElementsByClassName("container")
            console.log(container)
            container = container[0]
            console.log(container)
            for(let i=0;i<data.items.length;i++){
            let book_title = data.items[i].volumeInfo.title
            let publishedDate = data.items[i].volumeInfo.publishedDate
            let author_name = data.items[i].volumeInfo.authors.length?data.items[i].volumeInfo.authors[0]:'Author Not Found'
            let image_link = data.items[i].volumeInfo.imageLinks?data.items[i].volumeInfo.imageLinks.smallThumbnail.replace('http','https'):"https://www.brickmarketing.com/wp-content/uploads/2015/05/3-reasons-why-404-errors-are-bad-for-your-seo-250x250.jpg"
            let text_description = data.items[i].searchInfo?data.items[i].searchInfo.textSnippet:"Data Not found"
            let ele = document.createElement('div')
            let html = `<div class="book_block">
            <figure>
                <img width="128px" src="${image_link}" alt="">
            </figure>
            <section>
                <h3 class="title">${book_title}</h3>
                <span class="author_name">${author_name}</span>
                <span class="publishing_date">${publishedDate}</span>
                <p>${text_description}</p>
            </section>
            </div>`
            ele.innerHTML = html
            container.appendChild(ele)
            // console.log(book_title,author_name,image_link,text_description);
        }
       }
    };
    let d = "Javascript"
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${input_data}&maxResults=20`, true);
    // xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=Rd SHarma&maxResults=20", true);
    // xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${d}&maxResults=20`, true);
    xhttp.send();
}

