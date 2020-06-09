function onThemeChanged() {
    const selectTag = document.getElementById("theme");
    const theme = selectTag.options[selectTag.selectedIndex].value;
    const backgroundColor = theme === "vs" ? "white" : "darkgrey";

    selectTag.style.background = backgroundColor;
    document.getElementsByTagName("html").item(0).style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
    monaco.editor.setTheme(theme);
}