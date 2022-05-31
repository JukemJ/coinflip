document.querySelector('#clickMe').addEventListener('click', makeReq)

const coin = document.getElementById("coin");
coin.style.animation = "none";

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/flip`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}