
const containerBtn = document.getElementById('botoes');

filmes.forEach(genero =>{
    const botao = document.createElement('button');

    botao.textContent= genero[0];
    botao.addEventListener('click',()=>{
        mostrarFilmes(genero);
    })

    containerBtn.appendChild(botao)

})


function mostrarFilmes(genero){
    const filmesContainer =document.getElementById('filmes')
    filmesContainer.innerHTML='';

    genero.slice(1).forEach(filme =>{
        const filmeDiv = document.createElement('div');
        filmeDiv.innerHTML = `
                <img src="${filme.imagem}" alt="">
                <h3>${filme.titulo}</h3>
                 <p>${filme.descrição}</p>`;
        filmeDiv.classList.add('card')
        filmesContainer.appendChild(filmeDiv)
    })
}