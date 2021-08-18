| [Home](./) | [Schedule](./schedule.md) | [Assignments](./assignments.md) |

# Resources

  <p>
   Below You'll find a number of resources for everything covered in this
   course from setting up your development environment to final project
   ideas and building single-page apps in React
  </p>
  <div class="resources">
    <div class="resource-list" id="css-html">
      <p>CSS/HTML Reference</p></div>
    <div class="resource-list" id="JavaScript">
      <p>JavasScript</p></div>
    <div class="resource-list" id="JS-Libraries">
      <p>JS Libraries</p></div>
    <div class="resource-list" id="Wireframing">
     <p>Wireframing</p></div>
    <div class="resource-list" id="Design">
      <p>Design</p></div>
    <div class="resource-list" id="Development-Environment">
      <p>Setting up your Development Environment</p></div>
    <div class="resource-list" id="Node-JS">
      <p>Node JS Resources</p></div>
    <div class="resource-list" id="React">
      <p>Tutorials and Reference for React</p></div>
    <div class="resource-list" id="Project-Ideas">
      <p>Project Ideas</p></div>
    <div class="resource-list" id="Deploy">
      <p>Deploy</p></div>
    <div class="resource-list" id="MongoDB">
      <p>Mongo DB</p></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="js/papaparse.js"></script>
<script>
  getResources();
  async function getResources() {
    //get resources List
  response = await fetch("data/student-resources.csv");
  const data = await response.text();
  const jsonData = Papa.parse(data).data.slice(1);
  console.log(jsonData);
  //for each data item
  jsonData.forEach((item) => {
    //make a div
    var div = document.createElement("div");
    //add a class to that div
    div.classList.add("resource-item");
    var p = document.createElement("p");
    p.innerHTML = item[1];
    var resourceKind = item[2];
    console.log(resourceKind);
    var link = document.createElement("a");
    link.classList.add("resource-link");
    link.href = item[3];
    link.innerHTML = item[0];
    div.appendChild(link);
    div.appendChild(p);
    if(resourceKind=="JavaScript") {
      var anchor = document.getElementById("JavaScript");
      anchor.appendChild(div);
    } else if (resourceKind=="JS-Libraries") {
      var anchor = document.getElementById("JS-Libraries");
      anchor.appendChild(div);
    } else if (resourceKind=="Wireframing") {
      var anchor = document.getElementById("Wireframing");
      anchor.appendChild(div);
    } else if (resourceKind=="Design") {
      var anchor = document.getElementById("Design");
      anchor.appendChild(div);
    } else if (resourceKind=="Development-Environment") {
      var anchor = document.getElementById("Development-Environment");
      anchor.appendChild(div);
    } else if (resourceKind=="Node-JS") {
      var anchor = document.getElementById("Node-JS");
      anchor.appendChild(div);
    } else if (resourceKind=="React") {
      var anchor = document.getElementById("React");
      anchor.appendChild(div);
    } else if (resourceKind=="Project-Ideas") {
      var anchor = document.getElementById("Project-Ideas");
      anchor.appendChild(div);
    } else if (resourceKind=="Deploy") {
      var anchor = document.getElementById("Deploy");
      anchor.appendChild(div);
    } else if (resourceKind=="MongoDB") {
      var anchor = document.getElementById("MongoDB");
      anchor.appendChild(div);
    } else if (resourceKind=="CSS") {
      var anchor = document.getElementById("css-html");
      anchor.appendChild(div);
    } else {
      console.log("error, your resource name could not be found");
    }
  
  });
}
</script>
