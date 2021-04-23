$(document).ready(function () {
    changeList()
}); 

const getMovies = (dto) => {
    $("#movieListBody").html("")
    for (let i = 0; i < dto.length; i++) {
        $("#movieListBody").append(`
        <div class="row my-3 movieCard bg-light border">
                <div class="col-4 align-self-center">${dto[i].name}<a onclick="deleteConfirm('${dto[i].name}','${i}')" > <i class="far fa-trash-alt text-danger displayNone"></i> </a></div>
                <div class="col-4 align-self-center"><i class="fas fa-star text-warning"></i><b>${dto[i].score}</b> </div>
                <div class="col-4 align-self-center">
                
                   <div>Puan Ver</div>
                   <div><i class="fas fa-sort-up text-success"></i><i class="fas fa-sort-down arrowUpDown text-danger"></i></div> 
                
                </div>

            </div>
    ` );

    }

}

const deleteConfirm = (name, index) => {

    document.getElementById("movieName").innerHTML = name + " Silmek istediğinize emin misiniz?"
    let aa = document.getElementById("delete");
    aa.onclick = function () { deleteMovie(index) }; 
    document.getElementById("exampleModalButton").click();

}



const deleteMovie = (index) => { 

    var data = [];
    let getLocalData = localStorage.getItem('data');
    if (getLocalData != null) {
        data = JSON.parse(getLocalData);
    }
    data.splice(index, 1);

    localStorage.setItem('data', JSON.stringify(data))
    document.getElementById("exampleModalButton").click();
    getMovies()
}

const changeList = () => {
    var data = [];
    let allCheck = document.getElementById("all").checked;
    let movieCheck = document.getElementById("movie").checked;
    let serieCheck = document.getElementById("series").checked; 
    let getLocalData = localStorage.getItem('data');
    if (getLocalData != null) {
        data = JSON.parse(getLocalData);
    }
    let serires = data.filter(p => p.type == "series")
    let all = data;
    let movies = data.filter(p => p.type == "movie")


    if (allCheck) {
        getMovies(all)
    }
    else if (movieCheck && !serieCheck && !allCheck) {
        return getMovies(movies)
    }
    else if (!movieCheck && serieCheck && !allCheck) {
        return getMovies(serires)
    }
    else {
        return getMovies(all)
    }

}
