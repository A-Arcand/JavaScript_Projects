// concat() method
function full_Sentence() {
    var part_1 = "I love "
    var part_2 = "the color "
    var part_3 = "purple. "
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// slice() method
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// toString() method
function string_Method(){
    var x =394;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

// to.Precision() method
function precision_Method() {
    var x =12579.730923475;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}