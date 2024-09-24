document.getElementById("firstHeading");
firstHeading.innerText = "NEWS";
document.getElementById("secondHeading");
secondHeading.innerText = "PAPER";


var fetch = fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4b47c536e7194da6ba402c0f0fb0d92c")
.then((res) => res.json())
.then((res) => {
    twoImageFromApi1.src = res.articles[0].urlToImage; 
    twoImageFromApi2.src = res.articles[2].urlToImage; 
    bigImage.src = res.articles[6].urlToImage; 
    
    newsHeading.innerHTML = res.articles.map((item) => {
        document.getElementById("tableHeading").innerHTML = `<th>Author<th/><th>Title<th/><th>Description<th/>` 
        document.getElementById("tableData").innerHTML += `<tr><td>${item.author}<td/> <td>${item.title}<td/><td>${item.description}<td/><tr>` 
    console.log(res);
});   
});


