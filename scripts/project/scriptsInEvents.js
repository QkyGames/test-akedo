var imported = document.createElement('script');

function createAkedoScript()
{
    imported.src = "https://d1gexlcc9fpq0t.cloudfront.net/sdk/akedo_sdk_js.js";
    document.head.appendChild(imported);
	
	imported.onload = function() {
		  initAkedo();
		};
}
createAkedoScript();

function createDiv(){
	var div = document.createElement("div")
	div.setAttribute("id", "akedo-loader")

	div.style.id = "akedo-loader";
	div.style.position = "fixed";
	div.style.width = "100%";
	div.style.height = "100%";
	div.style.background = "black";
	div.style.display = "flex";
	

	var elem = document.createElement("img");
	elem.setAttribute("src", "https://d1gexlcc9fpq0t.cloudfront.net/sdk/logo.png");
	elem.setAttribute("width", "150pt");
	elem.style.margin = "auto";
	
	div.appendChild(elem);
	
	document.body.insertBefore(div, document.body.firstChild);

}
createDiv();


function initAkedo()
{
   akedo_init("com.gemu.pixel.dash", function(res) {
	if (res) {
	document.getElementById("akedo-loader").style.display =
	"none";
	}
	});
}


function akedo_load_game_state(callback){
	//console.log(callback);
	
}

function akedo_save_game_state(state, callback){

}

function akedo_report_score(leaderboardId, score, callback){

}

function akedo_purchase(productId, callback){

}




const scriptsInEvents = {

	async Esplashqky_Event5_Act1(runtime, localVars)
	{
		test()
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

