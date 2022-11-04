let lista = [
  ["02/12", "sexta", "brazil", "cameron", "16:00"],
  ["10/12", "quinta", "brazil", "cameron", "15:00"],
  ["22/12", "sabado", "brazil", "cameron", "10:00"],
];

function createGame(player1, hora, player2) {
  return `
        <li>
            <img src="./Assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
            <strong>${hora}</strong>
            <img src="./Assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>
    `;
}

let delay = -0.3;
function createCard(data, dia, time1, time2, hora) {
  delay += 0.3;
  game = createGame(time1, hora, time2);
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${data} <span>${dia}</span></h2>
    
        <ul>
            ${game}
        </ul>
    </div>
    `;
}

for (let x = 0; x < lista.length; x++) {
  document.querySelector("#cards").innerHTML += createCard(
    lista[x][0],
    lista[x][1],
    lista[x][2],
    lista[x][3],
    lista[x][4]
  );
}
