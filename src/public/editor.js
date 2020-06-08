require.config({ paths: { 'vs': '../../node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('container'), {
        language: 'typescript'
    });
});