function my_Dictionary () {
    var Animal = {
        Species:"Horse",
        Color:"Sorrel",
        Breed:"Quarter Horse",
        Age:6,
        Sound:"Whinny"
    };
    delete Animal.Breed //This will remove the Breed KVP from the dictionary before it's displayed
    document.getElementById("Dictionary").innerHTML = Animal.Breed
}