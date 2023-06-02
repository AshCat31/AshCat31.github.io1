var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: document.getElementById('canvas'),
  model: graph,
  width: '100%',
  height: '100%',
  gridSize: 10
});

paper.on('blank:pointerdblclick', function(event, x, y) {
  createNode(x, y);
});

function createNode(x, y) {
  var rect = new joint.shapes.standard.Rectangle();
  rect.position(x, y);
  rect.resize(100, 40);
  rect.attr({
    body: {
      fill: 'lightblue',
      stroke: 'black'
    },
    label: {
      text: 'Node',
      fill: 'black'
    }
  });
  graph.addCell(rect);
}
