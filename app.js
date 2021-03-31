// 1a
const mulan = {
    title: `Mulan`,
    main: `Fa Mula`,
    // 1b
    quote: function(){
        return `Dishonor! Dishonor on your whole family`;
    },
    // 1c
    storyline:  function(){
        return `The movie ${this.title} is about ${this.main}.`
    }
}
// console.log(mulan);

// 2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,

    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    },
    storyline:  function(){
        return `The movie ${this.title} is about ${this.main}.`
    }
}
console.log(tangled);
console.log(tangled.quote());

// 3a
function DisneyMovie(title, main){
    this.title = title;
    this.main = main;
}
// 3b
DisneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}.`;
}
// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
console.log(mulan1.storyline());
// 3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1);

// 4a
class DM {
    constructor(title, main){
       this.title = title;
       this.main = main;
    }
    // 4b
    storyline(){
        return `The movie ${this.title} is about ${this.main}.`;
    }
    // 4e
    static loveDisneyMovies(){
        return  `I Love Disney Movies!`;
    }
}
// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2.storyline());
// 4d
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2.storyline());
// 4f
console.log(DM.loveDisneyMovies());

// 5a
class DMCast extends DM{
    // 5b
    constructor(title, main, cast){
        // 5c
        super(title, main);
        this.cast = cast;
    }
    static create(title, main, cast){
       return new DMCast(title,main,cast);
    }
}
// console.log(DMCast.create());
// 5d
const mulan3 = new DMCast(`Mulan`, `Fa Mulan`,
{
    mulan: `Ming-Na Wen`, 
    mushu: `Eddie Murphy`, 
    shang: `BD Wong`, 
    theEmperor: `Pat Morita`
})
console.log(mulan3);
console.log(DMCast.loveDisneyMovies());
console.log("=====");
// 5e
const rapunzel3 = new DMCast(`Tangled`, `Rapunzel`,{
    rapunzel: `Mandy Moore`, 
    flynnRider: `Zachary Levi`, 
    motherGothel: `Donna Murphy`
})
console.log(rapunzel3);
console.log("======");
// 6a
const moana = DMCast.create(
    `Moana`, 
    `Moana of Motunui`, 
    {
    moana: `Auli'i Cravalho`, 
    maui: `Dwayne Johnson`, 
    grammaTala: `Rachel House`, 
    chiefTui: `Temuera Morrison`
});
console.log(moana);