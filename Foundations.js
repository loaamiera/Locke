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
const myInfo = '' ;


document.addEventListener('DOMContentLoaded',
	info = fetch('Foundations.JSON')
	.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		} 
          		return response.json() ;})
         .then((data) => {	
		 		marxOption.onclick = function marxInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Marx ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
			  philosophyOption.onclick = function philInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Who ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	quotesOption.onclick = function quoteInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Quotes ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	hegelOption.onclick = function hegelInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.hegel ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	exampleOption.onclick = function exampleInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Popular ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	schopenhauerOption.onclick = function schopenhauerInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Schopenhauer ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	haterOption.onclick = function haterInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Unlikeable ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	oppositesOption.onclick = function oppositesInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Opposites ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};	
		 	politicsOption.onclick = function politicsInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Politics ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	videoOption.onclick = function videoInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Videos ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	engelsOption.onclick = function engelsInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Engels ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	coverageOption.onclick = function coverageInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Coverage ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	baudrillardOption.onclick = function baudrillardInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Baudrillard ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	elaborationOption.onclick = function elaborationInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Elaboration ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	foundationOption.onclick = function foundationInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Foundation ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	revolutionOption.onclick = function revolutionInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Revolution ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	crisisOption.onclick = function crisisInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Crisis ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
		 	upsetOption.onclick = function crisisInfo () {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Crisis ;
						var strong = document.createElement("strong") ;
						strong.textContent = optionSelection.title ;
		 				par = optionSelection.text ;
						var link = document.createElement("a") ;
				  		var href = link.createAttribute('href') ;
						href.value = optionSelection.Link ;
				  		var target = link.Attribute('target') ;
						target.value = "_blank" ;
						link.textContent = 'Click to read' ;
				  		var pic = document.createElement("img") ;
				  		var alt = pic.createElement('alt') ;
						alt.value = optionSelection.altText ;
						var src = pic.createAttribute("src") ;
						src.value = optionSelection.imageUrl ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};
	 }) 

	.catch((error) => {
				const mistake = document.createTextNode(`Error: ${error.message}`);
      				placing.appendChild(mistake);
      				console.error(error);
    })
);
