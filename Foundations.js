const option = document.getElementById('Intro');
const marxOption = document.getElementById('Marx');
const placing = document.getElementById('placement');


document.addEventListener('DOMContentLoaded', 
	info = fetch('Foundations.JSON')
	.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		}
          		return response.json();
        					})
         .then((data) => {	marxOption.onclick = function marxInfo() {
		 				var optionFinal = placing.innerhtml
						var optionSelection = info.Marx ;
		 				var optionTitle = optionSelection.title ;
						var content = optionSelection.text ;
						var strong = document.createElement("strong") ;
		 				var par = document.createElement("p") ;
            					strong.textContent = info.title  ;
		 				par.textContent = content ;
						myInfo.append(strong, par) ;
						myInfo.append('<img ${info.imageUrl} alt=${info.altText}> </img>') ;
						myInfo.append('<a href = ${info.Link} target = "_blank"> Click to read. </a>');
						optionFinal.innerText = myInfo ;
			         option.onclick = function wording () {
					              placing.append(myInfo)} ; 

				};}) 

	.catch((error) => console.error(
					placement.append(document.createTextNode('Error: ${error.message}'));)););		
