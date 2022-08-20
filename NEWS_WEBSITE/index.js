//console.log(" Index Js File")
// API-KEY : dec31c0e39b144e7aa98ed2000950da8
let n1=document.getElementById("n1");


//let source=the-times-of-india;
//let api=dec31c0e39b144e7aa98ed2000950da8;
const xhr= new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=dec31c0e39b144e7aa98ed2000950da8',true);
xhr.getAllResponseHeaders('content-type','application/json');

xhr.onload=function(){


    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {

            let news=`<div class="collapse1">
            <p>
              <button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample${index}" aria-expanded="false" aria-controls="collapseWidthExample${index}">
              <b>Breaking News ${index+1}:</b> ${element["title"]}
              </button>
            </p>
            <div style="min-height: 150px;">
              <div class="collapse collapse-horizontal" id="collapseWidthExample${index}">
                <div class="card card-body" style="width: 900px;">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" > Read more..</a>  </div>
                </div>
              </div>
            </div>`;

            newsHtml += news;
        });

        n1.innerHTML = newsHtml; 
    }
        else{
            console.log("some error occured")
        }
    }

    xhr.send()

