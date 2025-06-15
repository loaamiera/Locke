option = document.getElementById('Marx');
placing = document.getElementById('placement');
information = function () {
			await fetch('https://loaamiera.github.io/Locke/Foundations.JSON')
			.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		}
          		return response.json();
        					})
        		.then((data) => {
				for (const info of data.Foundation) {
          				optionMarx = info[1]
			                option.onclick = function wording () {
					              const pMarx = document.createElement("p");
						      const strongMarx = document.createElement("strong");
            					      strongMarx.textContent = ${optionMarx.title};
						      const imageMarx = '<img src="${optionMarx.imageUrl}" alt="${optionMarx.altText}">' ;
						      const textMarx = ${optionMarx.text} ;
					              const linkMarx = '<a href = "${optionMarx.Link}" target = "_blank">Click to read</a></p>'  ;
					              option.appendChild('placing') ;
			        					}}})
			        .catch(error => console.error('Error loading the data:', error)) 
					} ;
		
