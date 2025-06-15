const option = document.getElementById('Intro');
const marxOption = document.getElementById('Marx');
const placing = document.getElementById('placement');
const myInfo = '' ;


document.addEventListener('DOMContentLoaded', () =>
	{info = fetch('Foundations.JSON')
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
		 				var par = document.createElement("p") ;
		 				par.textContent = optionSelection.text ;
						var link = document.createElement("a") ;
						link.href = optionSelection.Link ;
						link.target = "_blank" ;
						link.textContent = 'Click to read' ;
						pic.alt = optionSelection.altText ;
						var pic = document.createElement("img") ;
						pic.src = optionSelection.imageUrl ;
						pic.alt = optionSelection.altText ;
						myInfo.append(strong, par, pic, link) ;
						placing.innerText = myInfo ;

				};}) 

	.catch((error) => {
				const mistake = document.createTextNode(`Error: ${error.message}`);
      				placing.appendChild(mistake);
      				console.error(error);
    });
});
