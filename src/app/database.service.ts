import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;
  getActors() {
    return this.http.get("/actors");
  }
  getMovies() {
    return this.http.get("/movies");
  }
  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }
  createActor(data) {
    return this.http.post("/actors", data, httpOptions);
  }
  createMovie(data) {
    return this.http.post("/movies", data, httpOptions);
  }
  updateActor(id, data) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteMovie(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteByYear(aYear) {
    let url = "/movies/deleteByYear/" + aYear;
    return this.http.delete(url, httpOptions);
  }
  addActorToMovie(actorId, movieId) {
    let url = "/movies/"+movieId+"/actors";
    let data = {id:actorId};    
    return this.http.post(url, data, httpOptions);
  }
  addMovieToActor(actorId, movieId) {
    let url1 = "/actors/"+actorId+"/movies";
    let data1 = {id:movieId};
    return this.http.post(url1, data1, httpOptions);
  }
}