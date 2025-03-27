# JavaScript Practice Exercises

## Data Analysis Exercise

Given the set of movies below, write functions to analyze the data.

### Movie Data

```javascript
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
```

### Exercise 1: Calculate Best Scene Length

Return the total length of all of the best scenes in the movies.

```javascript
function getBestSceneLength(movies) {
  // code here...
  return 0;
}

const onlyTheBestScenes = getBestSceneLength(movies);
console.log('The total length of all the best scenes: ', onlyTheBestScenes);
```

### Exercise 2: Find Movies with Unique Actors

Find and return an array of movie objects that have completely unique actors (i.e., if an actor is in more than one movie, that movie is removed).

```javascript
function getMoviesWithUniqueActors(movies) {
  // code here...
  return [];
}

const uniqueActors = getMoviesWithUniqueActors(movies);
console.log('The movies with unique actors: ', uniqueActors);
```