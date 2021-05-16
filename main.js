
function getParagraph1() {
    var paragraph1_array = [];


    for (var j = 1; j < 4; j++) {
        paragraph1_array.push(document.getElementById("input" + j).value);
        console.log(paragraph1_array);
    }
    document.getElementById("Paragraph1").innerHTML = paragraph1_array.join(".");



}

function getParagraph2() {
    var paragraph2_array = [];


    for (var i = 4; i < 7; i++) {
        paragraph2_array.push(document.getElementById("input" + i).value);
        console.log(paragraph2_array);
    }
    document.getElementById("Paragraph2").innerHTML = paragraph2_array.join(".");



}