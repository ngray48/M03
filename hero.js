class SuperHuman {
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
}

// Define SuperHero and SuperVillain classes here
class SuperHero extends SuperHuman {

	constructor(name, alias, powerLevel){
		super(name, powerLevel),
		this.alias = alias;
	}
	//battle method--takes in SuperVillain
	battle(SuperHero, SuperVillain){
		if (SuperHero >= SuperVillain){
			return true;
		} else {
			return false;
		}
		
	}
}

class SuperVillain extends SuperHuman {
	constructor(name, alias, powerLevel){
		super(name, powerLevel),
		this.alias = alias;
	};
	
	//getEvilChuckle method
	 getEvilChuckle() {
		return "Ha ha ha!";
	}
}

const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
};

const villains = {
	"The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperVillain("Thankos", "Thankos", 9)
};

registerHandlers();

function registerHandlers() {
	// Detect selection of hero and villain
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);

	selectionChanged();
}

function selectionChanged() {
	const selectedHeroValue = document.querySelector("#heroSelect").value;
	const selectedVillainValue = document.querySelector("#villainSelect").value;
	
	// Get hero and villain selected
	const selectedHero = heroes[selectedHeroValue];
	const selectedVillain = villains[selectedVillainValue];

	// Your code goes here
	const selectedHeroPowerLevel = selectedHero.powerLevel.value;
	const selectedVillainPowerLevel = selectedVillain.powerLevel.value;
	
	let winnerBoolean = selectedHero.battle(selectedHeroPowerLevel,selectedVillainPowerLevel);
	
	if (winnerBoolean == true){
		document.getElementById('winner')==("Winner: "+ selectedHero.alias);
        	} else {
            	document.getElementById('winner')==("Winner: "+ selectedVillain.alias);
			}
}
