document.querySelector("#words").addEventListener("keypress", debouncing)
async function translating(){
    const translate=document.querySelector("#words").value 
    const inlanguage=document.querySelector("#inlanguage").value
    const otlanguage=document.querySelector("#otlanguage").value 
    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: translate,
		source: inlanguage,
		target: otlanguage,
		format: "text"
	}),
	headers: { "Content-Type": "application/json" }
});

const data = await res.json()
console.log(data.translatedText)
function changer(){
document.querySelector(".output").innerText=data.translatedText
}
changer()
}

var id
function debouncing(){
    if(id!=undefined){
        clearTimeout(id)
    }
   id = setTimeout(function(){
       translating()
   },1000)
}
document.querySelector("#translate").addEventListener("click", translating)
