$(document).ready(function() {
var width = $('body').width(),
    height = ($('#site').height() < $('body').height()) ? $('body').height() : $('#site').height();

var n = 50, // number of nodes
    m = 50, // number of links
    charge = -1000;

var nodes;
var force;
var svgNodes;
var svgNodesDirection;

var svg = d3.select(".animation-container").append("svg")
    .attr("width", width)
    .attr("height", height);

create();

function create () {
  svg.selectAll(".link, .node").remove();
  randomGraph(n, m, charge);
}

function randomGraph (n, m, charge) { //creates a random graph on n nodes and m links
  nodes = d3.range(n).map(Object),
      list  = randomChoose(unorderedPairs(d3.range(n)), m),
      links = list.map(function (a) { return {source: a[0], target: a[1]} });

  force = d3.layout.force()
      .size([width, height])
      .nodes(nodes)
      // .links(links)
      .charge(charge)
      .on("tick", tick)
      .start();

  var svgLinks = svg.selectAll(".link").data(links)
    .enter().append("line")
      .attr("class", "link");

  svgNodes = svg.selectAll(".node").data(nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 3)
      .style("fill", "white");

  svgNodes.transition().duration(800)
      .attr("r", function (d) { return 3 + 3 * d.weight })
      .style("fill", function (d) { return '#D3DBE3' });

  svgLinks.transition().duration(800)
      .style("stroke-width", 3);

  function tick () {
    svgNodes
        .transition()
        .attr("cx", function(d) { return d.x })
        .attr("cy", function(d) { return d.y })
        .style("fill", function (d) { return '#D3DBE3' })
        .duration(5000).ease("ease");

    svgLinks
        .attr("x1", function(d) { return d.source.x })
        .attr("y1", function(d) { return d.source.y })
        .attr("x2", function(d) { return d.target.x })
        .attr("y2", function(d) { return d.target.y });
  }

  function modifiedTick () {
    var k = 0;
    while ((force.alpha() > 1e-2) && (k < 10)) {
        force.tick(),
        k = k + 1;
    }
  }

  animateNodes();
}

function animateNodes() {
  svgNodes
    .transition()
    .attr("cx", function(d) { return d.x += (Math.random() - .5) * 100 })
    .attr("cy", function(d) { return d.y += (Math.random() - .5) * 100 })
    .style("fill", function (d) { return '#D3DBE3' })
    .duration(2000)
    .ease("ease")
    .delay(2000);
  // setTimeout(animateNodes, 2000);
}

function randomChoose (s, k) { // returns a random k element subset of s
  var a = [], i = -1, j;
  while (++i < k) {
    j = Math.floor(Math.random() * s.length);
    a.push(s.splice(j, 1)[0]);
  };
  return a;
}

function unorderedPairs (s) { // returns the list of all unordered pairs from s
  var i = -1, a = [], j;
  while (++i < s.length) {
    j = i;
    while (++j < s.length) a.push([s[i],s[j]])
  };
  return a;
}

});
