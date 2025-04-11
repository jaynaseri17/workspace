import React, { useRef, useState } from "react";
import "./../styles/TextEditor.css";
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaAlignJustify,
    FaListUl,
    FaListOl,
    FaLink,
    FaUnlink,
    FaImage,
    FaUpload
} from "react-icons/fa";

const TextEditor = () => {
    const editorRef = useRef(null);
    const [fontFamily, setFontFamily] = useState("Arial");
    const [fontSize, setFontSize] = useState("16");

    const execCmd = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    const handleFontChange = (event) => {
        setFontFamily(event.target.value);
        execCmd("fontName", event.target.value);
    };

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
        execCmd("fontSize", event.target.value);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                execCmd("insertImage", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return ( <
        div className = "editor-container" >
        <
        div className = "toolbar" >
        <
        select value = { fontFamily }
        onChange = { handleFontChange }
        className = "dropdown" > {
            [
                "Arial", "Times New Roman", "Courier New", "Verdana", "Georgia",
                "Tahoma", "Trebuchet MS", "Comic Sans MS", "Impact", "Palatino Linotype",
                "Lucida Sans Unicode", "Garamond", "Bookman Old Style", "Century Gothic",
                "Franklin Gothic Medium", "Brush Script MT", "Copperplate", "Futura",
                "Gill Sans", "Helvetica", "Monaco", "Rockwell", "Perpetua", "Segoe UI"
            ].map(font => ( <
                option key = { font }
                value = { font } > { font } < /option>
            ))
        } <
        /select>

        <
        select value = { fontSize }
        onChange = { handleFontSizeChange }
        className = "dropdown" > {
            [12, 14, 16, 18, 20, 22, 24, 28, 32].map(size => ( <
                option key = { size }
                value = { size } > { size } < /option>
            ))
        } <
        /select>

        <
        div className = "button-group" >
        <
        button onClick = {
            () => execCmd("bold") } > < FaBold / > < /button> <
        button onClick = {
            () => execCmd("italic") } > < FaItalic / > < /button> <
        button onClick = {
            () => execCmd("underline") } > < FaUnderline / > < /button> <
        button onClick = {
            () => execCmd("strikeThrough") } > < FaStrikethrough / > < /button> <
        button onClick = {
            () => execCmd("justifyLeft") } > < FaAlignLeft / > < /button> <
        button onClick = {
            () => execCmd("justifyCenter") } > < FaAlignCenter / > < /button> <
        button onClick = {
            () => execCmd("justifyRight") } > < FaAlignRight / > < /button> <
        button onClick = {
            () => execCmd("justifyFull") } > < FaAlignJustify / > < /button> <
        button onClick = {
            () => execCmd("insertUnorderedList") } > < FaListUl / > < /button> <
        button onClick = {
            () => execCmd("insertOrderedList") } > < FaListOl / > < /button> <
        button onClick = {
            () => execCmd("createLink", prompt("Enter URL:", "http://")) } > < FaLink / > < /button> <
        button onClick = {
            () => execCmd("unlink") } > < FaUnlink / > < /button> <
        button onClick = {
            () => execCmd("insertImage", prompt("Enter image URL:", "http://")) } > < FaImage / > < /button>

        <
        input type = "file"
        id = "uploadImage"
        className = "hidden"
        onChange = { handleImageUpload }
        /> <
        button onClick = {
            () => document.getElementById("uploadImage").click() } > < FaUpload / > < /button> <
        /div> <
        /div>

        <
        div className = "editor"
        ref = { editorRef }
        contentEditable = "true" > < /div> <
        /div>
    );
};

export default TextEditor;