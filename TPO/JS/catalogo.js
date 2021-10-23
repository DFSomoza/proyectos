var cad=`
    <table>
        <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Cuotas</th>
            <th>Valor</th>
            <th>Medios de Pago</th>
        </tr>
`
console.log(cad)
for(let i=0; i < data.length;i++){
      
    cad=cad +`
        <tr>
            <td>${data[i].codigo}</td>
            <td>${data[i].nombre}</td>
            <td>${data[i].descripcion} </td>
            <td><img src="${data[i].imagen}" alt="${data[i].nombre}" width="100" height="80"></td>
            <td>${data[i].importe} </td>
            <td>${data[i].cuotas} </td>
            <td>${data[i].precio} </td>
            <td><img src="${data[i].tarjetas}" alt="Tarjetas" style="width:100%"></td>
        </tr>
        `
}
console.log(cad)
    cad = cad +  `</table>`
    console.log(cad)
document.getElementById("idtabla").innerHTML=cad