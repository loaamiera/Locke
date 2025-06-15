const option = document.getElementById('Marx');
const placing = document.getElementById('placement');
const pic = document.getElementById('picture');
const link = document.getElementById('link');
menu = fetch('Foundations.JSON')
	.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		}
          		return response.json();
        					})
         .then((data) => {
				for (const info of data.Foundation) {
          				optionMarx = '${info.Marx}';
					const content = optionMarx.text ;
					const strongMarx = document.createElement("strong") ;
            				strongMarx.textContent = '${optionMarx.title}'  ;
					const myInfo = new DocumentFragment();
					myInfo.append(content, strongMarx) ;
					myInfo.append('<img "${optionMarx.imageUrl}" alt="${optionMarx.altText}"> </img>') ;
					myInfo.append('<a href = "${optionMarx.Link}" target = "_blank"> Click to read. </a>' );
			                option.onclick = function wording () {
					              placing.append(myInfo) } ; 

				};})
		.catch(error => console.error(
					placement.append(document.createTextNode(`Error: ${error.message}`));) ;
document.addEventListener('DOMContentLoaded', menu);

		
