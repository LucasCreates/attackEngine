
let attack = document.querySelector(".attack");
let health = document.querySelector(".hp");
let enemyHealth = document.querySelector(".ehp");
let slashed = document.querySelector(".slash");
let ezra = document.querySelector(".main-char");
let troll = document.querySelector(".troll");

let playerMaxHealth = 100;
let playerHealth = playerMaxHealth
let enemyMaxHealth = 100;
let battleTurn = true;




function damage(dmg){
	let randomAttackDamage = Math.floor(Math.random() * dmg) + 1
	return randomAttackDamage
}
function changeClass(){
	ezra.classList.remove("attack-animation")

}
// // function attackAnimation(){
	

// //   if (ezra.classList.contains("main-char") || ezra.classList.contains("receive-damage")) {
// //      ezra.classList.remove("main-char");
// //      ezra.classList.add("attack-animation");
// //      return;
// //      }

// //      if (ezra.classList.contains("receive-damage")){
// //      	 ezra.classList.remove("receive-damage");
// //      }
   
  
 

// }

function testAnimation(){
	ezra.addEventListener('animationend', function(e){

	})

}



function mainBattle(){

	attack.addEventListener('click', function(){
		const slashScreen = [
			{background: "blue"},
			{rotate: "145deg"},
			{rotate: "-245deg"},
			{height: "45%"},
			{background: "white"},
			{transform: "translateY(100px)"},	
			{background: "aqua"},	
		];
		const enemyHit = {transform: "translateX(20px)"}

		const attackAnimation = [
			{transform: "translate(10px, -10px)"},
			{transform: "translate(100px, -100px)"},
			{transform: "translate(0px, -0px)"},
		];

		const attackTiming = {
			duration: 300,
			iterations:1,
		}
		const damageTaken = {
		duration: 100,
		iterations:1,
		}
		ezra.animate(attackAnimation, attackTiming);
		slashed.style.display="flex"
		slashed.animate(slashScreen, attackTiming);
		troll.animate(enemyHit, damageTaken)
		attack.style.display="none"

		let randomizeTime = Math.floor(Math.random() * 2000) + 500 //This sets a random time until enemy attacks player. (to make it appear the enemy is thinking of how to attack)

		if (enemyMaxHealth > 0 && battleTurn == true){
			enemyMaxHealth = enemyMaxHealth - damage(20);
			console.log("Enemy health is: " + enemyMaxHealth);
			enemyHealth.innerText = enemyMaxHealth
			battleTurn = false;
			if( enemyMaxHealth <= 0){
				enemyHealth.innerText = 0
				console.log("You defeated the enemy.")
				return;
				}
				// setTimeout(attackAnimation, randomizeTime)
				setTimeout(enemyAttackPlayer, randomizeTime);
				
		}
	}); 


	function enemyAttackPlayer(){
		
		attack.style.display="block"
		if (battleTurn == false){
			if (playerHealth > 0){
				playerHealth = playerHealth - damage(10);
				console.log("The enemy hit you for " + (playerMaxHealth - playerHealth) + " damage.");
				console.log("Player health is: " + playerHealth);
				health.innerText = playerHealth
				battleTurn = true;
			}
		}
			if( playerHealth <= 0){
				health.innerText = 0;
				console.log("You're dead.");
			}

	}
			

}




mainBattle();



// attack.addEventListener('click', function(){

// 	if (playerMaxHealth > 0){
// 		playerMaxHealth = playerMaxHealth - damage(10);
// 		health.innerText = playerMaxHealth
// 		console.log(damage(10))
// 		console.log(damage(40))
// 		if( playerMaxHealth <= 0){
// 			health.innerText = 0
// 			console.log("You're dead.")
// 		}

// 	}
// });













// function attack(){
// 	console.log("Your health is " + health)
// 	let attack = Math.floor(Math.random() * 10) + 1
	
// 	console.log("Player health global variable is " + playerHealth)
// 	console.log("You hit for " + attack + " damage.")
// 	const playerHit = parseInt(playerHealth.innerText) - attack
// 	console.log(playerHit + attack)
// 	health.innerText = playerHit;
	
// }
// console.log(attack())

// function battle(){
// 	playerHealth
// 	if (playerHealth == 100){
// 		console.log("Health is full.")
// 	}
// 	else
// 		console.log("You have taken damage.")
// 	console.log(playerHealth)
// 	return playerHealth
// }
// battle()