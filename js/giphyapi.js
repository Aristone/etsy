var $ = require('jquery')
	api_key = "dc6zaTOxFJmzC"


	search = (q,key) => `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC${q}&api_key$={key}`


	export var getTranding = () => {
		return $.getJSON(trending(apikey))
	}

	


