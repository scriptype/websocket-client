// Generated by CoffeeScript 1.6.3
var $input, ID, ws;

ws = new WebSocket("ws://localhost:8888/sucheté", "echo-protocol");

ws.onopen = function() {
  return console.log("connection opened");
};

ws.onmessage = function(message) {
  return console.log("message received: " + message.data);
};

ID = Math.round(Math.random() * 65536);

$input = $("#messenger");

$input.on("keydown", function(event) {
  if (event.keyCode === 13) {
    return ws.send(JSON.stringify({
      id: ID,
      msg: this.value
    }));
  }
});

/*
//@ sourceMappingURL=app.map
*/
