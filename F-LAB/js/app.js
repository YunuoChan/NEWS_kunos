$(function(){ 
var newsButton = $('#goSearchBtn');
var NewList = $('#jokes-list');


   async function makeNews(){
      try{
        var news = await NEWS_ALL.get();
          await NewsList(news.title, news.urlToImage, news.author, news.description, news.url);          
      }
      catch(err){
        alert(err);         
      }
 }

  
function getNews(){
      return NEWS_ALL.get();
    }


function NewsList(title, urlToImage , author, description, url){
        
      var list = `<li>
                  <a href="">
                    <img src="${urlToImage}"></img>
                     </a>
                    <h3>${title}</h3>
                    <h5>${author}</h5>
                    <h5>${description}</h5>
                    <h5>${url}</h5>
                </li>`

      NewList.append(list);
    }

    newsButton.on('click', function(e){
    makeNews();
    });
})