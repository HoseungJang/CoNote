let editor;
let isChangedBySocket = false;

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
    const socket = io("/");

    editor = monaco.editor.create(document.getElementById('container'), {
        language: "javascript",
    });

    editor.onDidChangeModelContent(e => {
        if (isChangedBySocket) {
            isChangedBySocket = false;
        } else {
            socket.emit("changeContent", e);
        }
    });

    socket.on("changeContent", (e) => {
        const selection = editor.getSelection();

        isChangedBySocket = true;
        editor.getModel().applyEdits(e.changes);
        editor.setSelection(selection);
    });
});