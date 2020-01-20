let btn = document.querySelector(".btn-news");
let news = document.querySelector(".news");
let url = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=3c32ed34081b4c2d9691a080e367a394'

btn.addEventListener('click', async () => {

    fetch(url).then((xuxu) => xuxu.json()).then((gatinho) => mostrarNaTela(gatinho.articles));
    // let listaNoticias = (await fetch(url)).json();
    // mostrarNaTela(await listaNoticias.article);

});

let mostrarNaTela = (listaNoticias) => {
    listaNoticias.forEach(noticia => {
        let data = new Date(noticia.publishedAt);
        let dataCompleta = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
        let card = `
            <div class="card" style="width: 18rem;">
                <img src="${noticia.urlToImage}" class="card-img-top" alt="News Imagem">
                <div class="card-body">
                    <h5 class="card-title">${noticia.title}</h5>
                    <h6 class="text-right text-secondary">${noticia.source.name}</h6>
                    <p class="card-text">${noticia.description}</p>
                    <a href=${noticia.url}" class="btn btn-primary">Ver Notícia</a>
                    <p class="text-center text-secondary m-3">Publicado em: ${dataCompleta}</p>
                </div>
            </div>
        `;
        news.innerHTML += card;
    });
}