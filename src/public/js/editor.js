require.config({ paths: { 'vs': '/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('container'), {
        language: 'javascript'
    });
});