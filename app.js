const express = require('express');
const app = express();

const ax_request= require('axios');
let TMDB_api_key='6f587a758e64d464e12950da51b10fd6';
// [START gae_node_request_example]
//const express = require('express');
var cross_domain = require('cors');
//const path_handler=require("path")
//const app = express();



app.use(cross_domain());
app.get('/', (req, res) => {
    res.send("welcometo the homeXD");
});

app.get('/multi_search', (req, res) => {
    //var temp_data;
    var result_data=[];
    ax_request.get("https://api.themoviedb.org/3/search/multi?api_key="+TMDB_api_key+"&language=en-US&query="+req.query.query_holder)
    .then(response=>{
      // temp_data=response
      var i;
      var count=0;
      for(i=0;i<response.data["results"].length;i++){
        console.log(response.data["results"][i]["poster_path"])
        if (((response.data["results"][i]["media_type"]=="tv") || (response.data["results"][i]["media_type"]=="movie") )&& (response.data["results"][i]["poster_path"] !=null) &&( (response.data["results"][i]["backdrop_path"] !=null)) ){
          result_data.push(response.data["results"][i]);
          count++;
    
        }
        if(count==20){
          break
        }
        
        
      }
      response.data["results"]=result_data;
      //console.log(req.query.query_holder)
      //console.log(response["data"])
      res.json(response["data"])
    })
    // var i;
    
  
  });
  
  
  app.get('/trending_movie', (req, res) => {
    
    ax_request.get("https://api.themoviedb.org/3/trending/movie/day?api_key="+TMDB_api_key)
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/top_rated_movie', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/current_playing_movie', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/popular_movie', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/popular?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/recommend_movie', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/"+req.query.query_holder+"/recommendations?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/similar_movie', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/"+req.query.query_holder+"/similar?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
      //console.log(response["data"])
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/movie_video', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/"+req.query.query_holder+"/videos?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
      console.log(response["data"])
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/movie_details', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/"+req.query.query_holder+"?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
      //console.log(response["data"])
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/movie_reviews', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/"+req.query.query_holder+"/reviews?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
      //console.log(response["data"])
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/movie_credits', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/movie/"+req.query.query_holder+"/credits?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  
  app.get('/trending_tv', (req, res) => {
    
    ax_request.get("https://api.themoviedb.org/3/trending/tv/day?api_key="+TMDB_api_key)
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/top_rated_tv', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/top_rated?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  // app.get('/current_playing_tv', (req, res) => {
   
  //   ax_request.get("https://api.themoviedb.org/3/tv/now_playing?api_key="+TMDB_api_key+"&language=en-US&page=1")
  //   .then(response=>{
  
  //     res.json(response["data"])
  //   })
   
    
  
  // });
  
  
  app.get('/popular_tv', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/popular?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/recommend_tv', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/"+req.query.query_holder+"/recommendations?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/similar_tv', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/"+req.query.query_holder+"/similar?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/tv_video', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/"+req.query.query_holder+"/videos?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
      console.log(response["data"])
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/tv_details', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/"+req.query.query_holder+"?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
      //console.log(response["data"])
      res.json(response["data"])
    })
   
    
  
  });
  
  
  app.get('/tv_reviews', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/"+req.query.query_holder+"/reviews?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/tv_credits', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/tv/"+req.query.query_holder+"/credits?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/cast_details', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/person/"+req.query.query_holder+"?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });
  
  app.get('/external_ids', (req, res) => {
   
    ax_request.get("https://api.themoviedb.org/3/person/"+req.query.query_holder+"/external_ids?api_key="+TMDB_api_key+"&language=en-US&page=1")
    .then(response=>{
  
      res.json(response["data"])
    })
   
    
  
  });











const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});