let input = document.querySelector('#input');
let btn = document.querySelector('button');
let consultas = document.querySelector('#consultas')
let temaMudar = document.querySelector('.theme');
let modal = document.querySelector('dialog');

let btnFechar = document.querySelector('#btn-close')
btnFechar.onclick = () => {
  modal.close();
}

btn.addEventListener('click', () => {
  let sigla = input.value;
  let url = `http://servicodados.ibge.gov.br/api/v1/paises/${sigla}`

  fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    
    if(sigla == "") {
      modal.showModal();
      
    } else {
        const li1 = document.createElement('li');
        li1.className = "l1-margintop";
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const li5 = document.createElement('li');
        const li6 = document.createElement('li');
  
        li1.textContent = `- O país com a sigla "${sigla}": ${data[0]['nome']['abreviado']}` 
        li2.textContent = `- Área (km²): ${data[0]['area']['total']}`
        li3.textContent = `- Capital: ${data[0]['governo']['capital']['nome']}`
        li4.textContent = `- Moeda: ${data[0]['unidades-monetarias'][0]['nome']}`
        li5.textContent = `- Língua: ${data[0]['linguas'][0]['nome']}`
        li6.textContent = `- Localização: ${data[0]['localizacao']['regiao']['nome']}`
  
        consultas.appendChild(li1);
        consultas.appendChild(li2);
        consultas.appendChild(li3);
        consultas.appendChild(li4);
        consultas.appendChild(li5);
        consultas.appendChild(li6);
      }
  })

  input.value = "";
})

let temaSelecionado = document.querySelector('img');

temaMudar.addEventListener('click', () => {
  if(temaSelecionado.getAttribute('tema') == 'dark') {
    temaMudar.setAttribute('src', './images/lua.png');
    temaMudar.setAttribute('tema', 'light');
  } else {
    temaMudar.setAttribute('src', './images/sol.png');
    temaMudar.setAttribute('tema', 'dark');
  }

  if(temaSelecionado.getAttribute('tema') == 'dark') {
    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    body.style.backgroundColor = 'rgb(46, 46, 46)';
    container.style.backgroundColor = 'rgba(128, 128, 128, 0.363)';
  } else {
    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    body.style.backgroundColor = 'rgb(224, 224, 224)';
    container.style.backgroundColor = 'rgba(173, 173, 173, 0.363)';
    
  }

})