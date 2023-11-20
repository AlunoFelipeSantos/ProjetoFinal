//deve haver este mesmo botão no formulário na chamada do botão para cadastrar
const button = document.getElementById('btn-cadastrar');
button.addEventListener('click', async _ => {
    console.log('Evento cadastrar')
    //cadastrar();
    
        const response = await fetch('http://localhost:8080/cadastrar', {
        method: 'post',
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        
        //dados devem ser as mesmos que estão no formulário
        body: JSON.stringify({
            "nome":document.getElementById('nome').value,
            "descr":document.getElementById('descr').value,
            "local":document.getElementById('local').value,
            "dh":document.getElementById('dh').value,
            "gene":document.getElementById('gene').value
        })
       
        });

        console.log('Cadastrado!', response);
        alert('Cadastro: ' + response.statusText);

});

