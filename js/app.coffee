ws = new WebSocket("ws://localhost:8888/sucheté", "echo-protocol")
ws.onopen = ->
  console.log "connection opened"
ws.onmessage = (message) ->
  console.log "message received:" + message.data

ID = Math.round(Math.random() * 65536)

$input = $("#messenger")
$input.on "keydown", (event) ->
  if event.keyCode is 13
    ws.send JSON.stringify
      id: ID
      msg: @value