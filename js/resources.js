document.addEventListener("load", getResources);
async function getResources() {
  response = await fetch("data/student-resources.csv");
  const data = await response.text();
  const jsonData = Papa.parse(data).data.slice(1);
  console.log(jsonData);
  var dataContainer = document.getElementById("resources-table");
  var ul = document.createElement("ul");
  dataContainer.appendChild(ul);
  jsonData.forEach((item) => {
    var li = document.createElement("li");
    li.classList.add(item[2]);
    li.classList.add("w3-card-2");
    var link = document.createElement("a");
    link.href = item[3];
    link.innerHTML = item[0];
    var div = document.createElement("div");
    div.innerHTML = item[1];
    link.appendChild(div);
    li.appendChild(link);
    ul.appendChild(li);
  });
}
