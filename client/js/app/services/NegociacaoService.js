class NegociacaoService
{
    obterNegociacoesDaSemana(callback)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () =>
        {
            if (xhr.readyState == 4)
            {
                if (xhr.status == 200)
                {
                    callback(null,JSON.parse(xhr.responseText).map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                }
                else 
                {
                    console.error(xhr.responseText);
                    callback("Nã foi possível obter as negociações",null);
                }
            }
        }
        xhr.send();
    }

    obterNegociacoesDaSemanaRetrasada(callback)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/retrasada');
        xhr.onreadystatechange = () =>
        {
            if (xhr.readyState == 4)
            {
                if (xhr.status == 200)
                {
                    callback(null,JSON.parse(xhr.responseText).map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                }
                else 
                {
                    console.error(xhr.responseText);
                    callback("Nã foi possível obter as negociações",null);
                }
            }
        }
        xhr.send();
    }
}