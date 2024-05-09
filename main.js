$(document).ready(function() {
    $('header button').click(function(){ 
        $('form').slideDown() //expandir formulário
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp() //fechar formulário
    })

    $('form').on('submit', function(e){ // p prevenir o comportamento padrão do formulário que é atualizar a pag quando eele é submetido
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem) //criando elemento no jquery. o appendto insere o elemento no li (linha 13)
        $(
            `<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" "target="blank" title="ver imagem em tamanho real">
                ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul') // adicionando
        $(novoItem).fadeIn(1000) // efeito de fade
        $('#endereco-imagem-nova').val('')
    })
})
 // console.log(document.querySelector('header button'))
    //console.log($('#botao-cancelar'))
 // para chamar o jquery e verificar se foi importado // 
//document.querySelector('header button').addEventListener('click', function(){
    //esse conteúdo aqui dentro é o call back p o clique do botão




