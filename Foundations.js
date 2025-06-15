const option = document.getElementById('Intro');
const marxOption = document.getElementById('Marx');
const placing = document.getElementById('placement');
const pic = document.getElementById('picture');
const link = document.getElementById('link');

info = await fetch('Foundations.JSON')
	.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		}
          		return response.json();
        					})
         .then((data) => {	marxOption.onclick = function marxInfo() {
		 				optionFinal = placing.innerhtml
						optionSelection = info.Marx ;
		 				optionTitle = optionSelection.title ;
						const content = optionSelection.text ;
						const strong = document.createElement("strong") ;
		 				const par = document.createElement("p") ;
            					strong.textContent = info.title  ;
						myInfo.append(content, strong) ;
						myInfo.append('<img ${info.imageUrl} alt=${info.altText}> </img>') ;
						myInfo.append('<a href = ${info.Link} target = "_blank"> Click to read. </a>' );
						optionFinal.innerText = myInfo ;
			         option.onclick = function wording () {
					              placing.append(myInfo) } ; 

				};}) ; 

.catch(error => console.error(
					placement.append(document.createTextNode(`Error: ${error.message}`));
		)) ;
document.addEventListener('DOMContentLoaded', menu);		
