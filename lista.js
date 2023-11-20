fetch('http://localhost:8080/listar', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  })

    .then(function (response) {
      return response.json();
    })
    .then(function (eventos) {
      let placeholder = document.querySelector("#data-output");
      let out = "";
      
      for (let evento of eventos) {
      //for (const key in eventos) {
        out += `
             <tr>
                <td>${evento.id} </td>
                <td>${evento.nome}</td>
                <td>${evento.descr}</td>
                <td>${evento.local} </td>
                <td>${evento.dh}</td>
                <td>${evento.gene}</td>
             </tr>
          `;
      }

      for (const key in eventos) {
        console.log(eventos[key]);
      }

      placeholder.innerHTML = out;
    });