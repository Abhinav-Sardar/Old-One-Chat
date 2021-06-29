
function setAccentColor(){
    if(!localStorage.getItem('color')){
        localStorage.setItem('color' , '#bd14ca') ; 
        return "#bd14ca"
    }
    else {
        return localStorage.getItem('color')
    }
}

export default setAccentColor ; 