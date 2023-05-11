var imported = document.createElement('script');

function createAkedoScript()
{
    imported.src = 'https://d1gexlcc9fpq0t.cloudfront.net/sdk/akedo_sdk_js.js';
    document.head.appendChild(imported);
}

createAkedoScript()


var div = document.createElement("div");

div.id= "akedo-loader";
//style.position: fixed;
div.style.width = "100%";
div.style.height = "100%";

div.style.background = "black";
div.style.display = "flex";


var elem = document.createElement("img");
elem.setAttribute("src", "https://d1gexlcc9fpq0t.cloudfront.net/sdk/logo.png");
elem.setAttribute("width", "150pt");

div.appendChild(elem);

document.body.appendChild(div);


function akedo_load_game_state(){
	//console.log(callback);
	console.log("asdasdasda");
}

function test()
{
	console.log("asdasdasdasdasdasdasdasdasdas")
}




const scriptsInEvents = {

	async Esplashqky_Event5_Act1(runtime, localVars)
	{
		test()
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

