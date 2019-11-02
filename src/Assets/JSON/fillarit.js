let data
fetch(`https://api.citybik.es/v2/networks/citybikes-helsinki`)
  .then(resp => {
    return resp.json();
  })
  .then(json => {
    data = json.network.stations
    data.forEach(element => {
      let row = table.insertRow(-1);
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell1.innerHTML = element.name
      cell2.innerHTML = element.free_bikes


    });
  })
  .catch(err => {
    alert("something went terribly wrong")
    console.log(err)
  })
