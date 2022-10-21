enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type movie = {
    name : string,
    releaseDate : number,
    genre : GENERO,
    score? : number
}

function dataMovie (name: string, data:number, genre:GENERO, score?:number) : movie {
    return {name, releaseDate:data, genre, score}
}