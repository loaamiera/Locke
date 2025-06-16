const marxOption = document.getElementById('Marx');
const philosophyOption = document.getElementById("Who") ;
const quotesOption = document.getElementById("Quotes") ;
const hegelOption = document.getElementById("Hegel") ;
const exampleOption = document.getElementById("Popular") ;
const schopenhauerOption = document.getElementById("Schopenhauer") ;
const haterOption = document.getElementById("Unlikeable") ;
const oppositesOption = document.getElementById("Opposites") ;
const politicsOption = document.getElementById("Politics") ;
const videoOption = document.getElementById("Videos") ;
const engelsOption = document.getElementById("Engels") ;
const coverageOption = document.getElementById("Coverage") ;
const baudrillardOption = document.getElementById("Baudrillard") ;
const elaborationOption = document.getElementById("Elaboration") ;
const foundationOption = document.getElementById("Foundation") ;
const revolutionOption = document.getElementById("Revolution") ;
const crisisOption = document.getElementById("Crisis") ;
const upsetOption = document.getElementById("Upset") ;
const placing = document.getElementById('placement');
const myInfo = document.createElement('div') ;


document.addEventListener('DOMContentLoaded',
	info = fetch('Foundations.JSON')
	.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		} 
          		return response.json() ;})
         .then((data) => {	
		 		marxOption.onClick = function marxInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Marx ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
			  philosophyOption.onClick = function philInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Who ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	quotesOption.onClick = function quoteInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Quotes ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	hegelOption.onClick = function hegelInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.hegel ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	exampleOption.onClick = function exampleInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Popular ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	schopenhauerOption.onClick = function schopenhauerInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Schopenhauer ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	haterOption.onClick = function haterInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Unlikeable ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	oppositesOption.onClick = function oppositesInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Opposites ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};	
		 	politicsOption.onClick = function politicsInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Politics ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	videoOption.onClick = function videoInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Videos ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to watch' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	engelsOption.onClick = function engelsInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Engels ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	coverageOption.onClick = function coverageInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Coverage ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	baudrillardOption.onClick = function baudrillardInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Baudrillard ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	elaborationOption.onClick = function elaborationInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Elaboration ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	foundationOption.onClick = function foundationInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Foundation ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	revolutionOption.onClick = function revolutionInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Revolution ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	crisisOption.onClick = function crisisInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Crisis ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
		 	upsetOption.onClick = function crisisInfo () {
		 				var optionFinal = placing.innerHTML
						var optionSelection = info.Crisis ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				var par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.createAttribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
						myInfo.append(strong, par, pic, link) ;
						placing  = myInfo ;

				};
	 }) 

	.catch((error) => {
				const mistake = document.createTextNode(`Error: ${error.message}`);
      				placing.innerHTML = mistake ;
      				console.error(error);
    })
);
