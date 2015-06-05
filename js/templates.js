export var toolbar = function() { 

		return	`<div class="toolbar">
    	 <a href="#" class="logo">Giphrenology</a>
    	 	<form><input type="search"></form>

    	 	</div>`
}

export var grid_item = (url, title) => `<a href="#">
    	 			<img src="${url}">
    	 			<div>
    	 				<span>${title}</span>

    	 			</div>
    	 		</a>`


  export var details => (url, title) => `<div class="container details-screen">
    	${toolbar()}
    	<div class="toolbar">
    	 <a href="#" class="logo"></a>
    	 	<form><input type="search"></form>
    	 	</div>
    	 	<div class"grid">
    	 		<a href="#">
    	 			<img src="${url}">
    	 			<div>
    	 				<span>"${title}"</span>
    	 				

    	 			</div>
    	 		</a>
    	 		
    	 			</div>
    	 		</a>
    	 	</div>
    </div>`

    export var home = (gifs) => `<div class="container home-screen">
    	<div class="toolbar">
    	 <a href="#" class="logo"></a>
    	 	<form><input type="search"></form>

    	 	</div>
    	 	<div class"grid grid-2-400 grid-4-800">
    	 		${ gifs.map((v) => {
    	 			return
    	 		}) }

    	 		<a href="#">
    	 			<img src="${v.url}">
    	 			<div>
    	 				<span>"${v.title}"</span>
    	 				<span>Price</span>

    	 			
    	 		</a>
    	 	}).join('') }
    //         </div>
    // 	 		<a href="#">
    // 	 			<img src="http://giphy.com/gifs/loop-sun-dgOh3mcjkFv3O">
    // 	 			<div>
    // 	 				<span>Title</span>
    // 	 				<span>Price</span>

    // 	 			</div>
    // 	 		</a>
    // 	 		<a href="#">
    // 	 			<img src="http://giphy.com/gifs/loop-sun-dgOh3mcjkFv3O">
    // 	 			<div>
    // 	 				<span>Title</span>
    // 	 				<span>Price</span>

    // 	 			</div>
    // 	 		</a>
    // 	 		<a href="#">
    // 	 			<img src="http://giphy.com/gifs/loop-sun-dgOh3mcjkFv3O">
    // 	 			<div>
    // 	 				<span>Title</span>
    // 	 				<span>Price</span>

    // 	 			</div>
    // 	 		</a>
    // 	 	</div>
    // </div>`