
const error = document.getElementsByClassName("error")[0];
const fiveLetterWords = [
    "apple", "baker", "candy", "drown", "eager",
    "frost", "grape", "happy", "igloo", "jolly",
    "knots", "liver", "mango", "noble", "ocean",
    "piano", "quilt", "rover", "sunny", "table",
    "unity", "vivid", "witty", "xenon", "yacht",
    "zebra", "blaze", "charm", "daisy", "flame",
    "globe", "hazel", "index", "juicy", "knife",
    "lunar", "melon", "nymph", "oasis", "peach",
    "quest", "rider", "snake", "trout", "under",
    "viper", "waltz", "xerox", "young", "zealot",
    "blink", "cloud", "dwarf", "flour", "grain",
    "hatch", "ivory", "jewel", "knock", "latch",
    "maple", "needy", "opera", "peony", "quail",
    "rapid", "sheep", "tramp", "urban", "vegan",
    "whale", "xylophone", "yellow", "zeppelin",
    "brisk", "crane", "demon", "elbow", "fable",
    "giant", "hoist", "insect", "joker", "knack",
    "lemon", "mirth", "novel", "onion", "peach",
    "quiet", "sable", "trick", "umbra", "velvet",
    "wagon", "zesty" , "nepal" , "punit"
  ];

word = fiveLetterWords[Math.floor(Math.random()*99)];
let number = Math.floor([Math.random()*99]);
// let word = fiveLetterWords[number] ; 
// let word = "apple";
// console.log(word) ;

let p = 1 ;
const input1 = document.getElementById("input-word");
const submit = ()=>{
        
        let copy =  word.toUpperCase()  ; 
        let input = (input1.value.trim()).toUpperCase();
        
        if(input.length != 5){
            error.style.display = "block";
        }
        else{
        error.style.display = "none";
        let list =  [5];
        for(var i = 0; i < 5 ;i++){
            if(copy[i] == input[i]){
                list[i] = "gr";
            }
            else{
                list[i] = "g" ;
            }
        }
        let copy1  = "";
        for(var j = 0 ;j < 5 ;j++){

            if(list[j] =="gr"){
                copy1+= "1";
            }
            else{
                copy1 += copy[j];
            }
        }
        copy = copy1;
        // console.log(copy1);
        for(var i = 0 ;i < 5 ;i ++){
            if(list[i] != "gr"){
                // console.log(i);
                for(var j = 0 ; j < 5 ;j++){
                    if(input[i] == copy[j] && list[j] != "gr"){
                        list[i] = "o" ;
                    }

                }
                for(var j = 0 ;j < 5 ;j++){
                    
                    if(list[j] =="o"){
                        copy1+= "1";
                    }
                    else{
                        copy1 += copy[j];
                    }
                }
            }
        }

        let t ="box" + p;
    // console.log(t) ;


    const boxes = document.getElementsByClassName(t);
    // console.log(boxes);
       let found = false;
       for(var i = 0 ; i < 5 ; i++){
           if(list[i] == "g"){
               boxes[i].style.backgroundColor = "grey";
            boxes[i].innerHTML = input[i];
            found  = true;
        }
        else if(list[i] == "o"){
            boxes[i].style.backgroundColor = "orange";
            found = true;
            boxes[i].innerHTML = input[i];
        }
        else{
            boxes[i].style.backgroundColor = "green";
            boxes[i].innerHTML = input[i];
        }
    }
    p++;
    if(!found){
        Win();
    }
    if(p == 6 && found){
        gameOver();
       }
       
    }
    // console.log(input);
    // console.log(copy);
    
    

}
const gameOver = ()=>{
    document.getElementsByClassName("lose")[0].style.display = "flex" ;
}
const Win = () =>{
    document.getElementsByClassName("win")[0].style.display = "flex" ;
}


