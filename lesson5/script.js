function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function enterFuntion(evt) {
        if (evt.keyCode == 13) {
            var val = input.value;
            if (val != "") {
                socket.emit("send message", val);
            }
        }
    function deleteFunction(evt) {
                socket.emit("delete message", val);
        }




    }
    button.onclick = handleSubmit;
    window.onkeydown = enterFuntion;
    del.onclick = deleteFunction;
    



    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function delTags() {
      document.getElementById("sumbit").innerHTML = "";
      document.getElementById("delete").innerHTML = "";

    }

    socket.on('display message', handleMessage);
    socket.on('delete tags', delTags);
} // main closing bracket

window.onload = main;