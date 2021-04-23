 
const saveMovie = () => {
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;
    let movieType = document.querySelector('input[name="movieType"]:checked').value;
    const obj = { "name": name, "score": score, "type": movieType };
    var data = [];
    getLocalData = localStorage.getItem('data');
    if (getLocalData != null) {
        data = JSON.parse(getLocalData);
    }
    data.push(obj);

    if (name != "" || score != "" || movieType != "") {
        localStorage.setItem('data', JSON.stringify(data))
        document.getElementById("exampleModalButton").click();
    }
 
}



