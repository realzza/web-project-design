## Welcome to Web Project Design and Development

Fall 2021, ISS 241 / VMS 257 / ISS/CMAC 741

| [Home](./) | [Schedule](./schedule.md) | [Assignments](./assignments.md) |

# Resources

  <p>
   Below You'll find a number of resources for everything covered in this
   course from setting up your development environment to final project
   ideas and building single-page apps in React
  </p>
  <p>
    The links below are color-coded by subject:
    <span class="JavaScript">JavaScript</span>,
    <span class="JS-Libraries">JavaScript Libraries</span>,
    <span class="Wireframing">Wireframing Tools</span>,
    <span class="Design">Design</span>,
    <span class="Development-Environment">Setting up a Development Environment</span>, 
    <span class="Node-JS">Node.JS and Related Tools</span>,
    <span class="React">Learning React</span>,
    <span class="Project-Ideas">ideas for final projects</span>,
    <span class="Deploy">Tips and Tools for Deploying</span>,
    <span class="MongoDB">Mongo DB</span>, and info on
    <span class="CSS">CSS</span> and <span class="HTML">HTML</span>.
  </p>

<div id="resources-table"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="js/papaparse.js"></script>
<script>
  getResources();
  async function getResources() {
  response = await fetch("data/student-resources.csv");
  const data = await response.text();
  const jsonData = Papa.parse(data).data.slice(1);
  console.log(jsonData);
  var dataContainer = document.getElementById("resources-table");
  var ul = document.createElement("ul");
  ul.classlist.add('resources-list');
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
</script>
