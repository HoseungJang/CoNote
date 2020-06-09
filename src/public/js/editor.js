let editor;

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
    //const socket = io.on("/");

    editor = monaco.editor.create(document.getElementById('container'), {
        language: "javascript",
    });

    /*editor.onDidChangeModelContent(e => {
        socket.emit("changeContent", e.change);
    });

    socket.on("changeContent", (change) => {
        editor.getModel().applyEdits(change);
    });*/
});