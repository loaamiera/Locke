			    // This event listener waits for the DOM (Document Object Model) to fully load before executing the contained code.
			fetch('Foundations.JSON')
			.then((response) => {    
          		if (!response.ok) {
            		throw new Error(`HTTP error, status = ${response.status}`);
          		}
          		return response.json();
        					})
        		.then((data) => {
				for (const info of data.Foundation) {
					option = document.getElementById('Marx');
					placing = document.getElementById('placement');
          				optionMarx = info[1]
			                option.onclick = function wording () {
					              placing.innerHtml =
			                    <h2>${optionMarx.title}</h2> 
			                    <img src="${optionMarx.imageUrl}" alt="${optionMarx.altText}" style="width:100%;max-width:300px;">
			               <!-- Displays an image with a source and alternative text from the item, with a set style -->
			               <!-- Displays the altitude of the item -->
			                    <p>${optionMarx.text}  <a href = "${optionMarx.Link}" target = "_blank">Read More</a></p>
			               <!-- Displays text and a 'Read More' link that opens in a new tab -->
			                ;
			                // Appends the newly created section to the 'content' div.
			                intro.appendChild('placing'); } ;
			            });
			        })
			        .catch(error => console.error('Error loading the data:', error)); 
			        // Catches and logs any errors in the fetch operation.
		
				});
