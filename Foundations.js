var option = document.getElementById('Marx');
var placing = document.getElementById('placement');
async function menu() {
			await fetch('Foundations.JSON')
			.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		}
          		return response.json();
        					})
        		.then((data) => {
				for (const info of data.Foundation) {
          				optionMarx = '${info.Marx}';
			                option.onclick = function wording () {
					              const pMarx = document.createElement("p");
						      const strongMarx = document.createElement("strong");
            					      strongMarx.textContent = '${optionMarx.title}';
						      const imageMarx = '<img src="${optionMarx.imageUrl}" alt="${optionMarx.altText}">' ;
						      const textMarx = '${optionMarx.text}' ;
					              const linkMarx = '<a href = "${optionMarx.Link}" target = "_blank">Click to read</a></p>'  ;
					              placing.appendChild(pMarx, strongMarx, imageMarx, linknMarx) ;
			        					}}})
			        .catch(error => console.error(
					placement.appendChild(document.createTextNode(`Error: ${error.message}`));) 
					} ;
document.addEventListener('DOMContentLoaded', menu);

		
