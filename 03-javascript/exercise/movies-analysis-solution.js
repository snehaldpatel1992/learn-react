const movies = [
  {
    name: 'The Dark Knight',
    rating: 'PG-13',
    year: 2012,
    bestScene: {
      name: 'fight',
      location: 'sewer',
      sceneLength: 10,
      actors: ['Christian Bale', 'Tom Hardy'],
    }
  },
  {
    name: 'Good Burger',
    rating: 'PG',
    year: 1994,
    bestScene: {
      name: 'jump',
      location: 'giant milkshake',
      sceneLength: 5,
      actors: ['Kenan Thompson', 'Kel Mitchell'],
    }
  },
  {
    name: 'Sharknado 2: The Second One',
    rating: 'TV-14',
    year: 2013
  },
  {
    name: 'The Big Short',
    rating: 'R',
    year: 2015,
    bestScene: {
      name: 'explanation',
      location: 'casino',
      sceneLength: 20,
      actors: ['Christian Bale', 'Steve Carrell']
    }
  },
];




//return the total length of all of the best scenes in the movies
function getBestSceneLength (movies){
  // code here...
  let length = 0
  movies.forEach((movie) => {
    length = length + ( movie.bestScene?.sceneLength || 0 )
  })
  return length;
}

const onlyTheBestScenes = getBestSceneLength(movies);
console.log('The total length of all the best scenes: ', onlyTheBestScenes);


//find and return an array of movie objects that have completely unique actors
//(i.e, if an actor is in more than one movie, that movie is removed)
function getMoviesWithUniqueActors(movies) {
  // code here...

  const actorCountMap = {}

  movies.forEach((movie) => {
    movie.bestScene?.actors?.forEach((name) => {
      if(actorCountMap[name]) {
        actorCountMap[name] = actorCountMap[name] + 1
      } else {
        actorCountMap[name] = 1
      }
    })
  })

  const filtred = movies.filter((movie) => {
    if (!movie.bestScene) {
      return false
    }
    const movieHavingActorsAppearingMoreThanOne = movie.bestScene?.actors.find((name) => {
      return actorCountMap[name] >  1
    })
    return !movieHavingActorsAppearingMoreThanOne
  })

  console.log(filtred)

  return filtred;
}

const actorCountMap = getMoviesWithUniqueActors(movies);
console.log('The movies with unique actors: ', actorCountMap);