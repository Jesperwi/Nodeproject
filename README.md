<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>documentation</title>
</head>
<body>
<header>
  <h1>This is a document</h1>
  <p>Create an API with Node.js</p>
</header>

<div><ul>
  <li>Make an API</li>
  <li>get Retrieves a resourse </li>
  <li>post: Creates a resourse </li>
  <li>request /topMovies/:title</li>
  <li>request = body parcer</li>
  <li>With GET request</li>
</div></ul>

<table>
  <td>Movies</td>
  <td>Title Silence of lambs, The lord of the rings, Logan</td>
  <td>description</td>
  <td>genreid 1 2 3</td>
  <td>genreid 1 3 3</td>
  <td>imagepath</td>
  <td>featured</td>
<tr>
  <td>Get list of movies</td>
  <td>/movies</td>
  <td>get</td>
  <td>/movies</td>
  <td>While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.</td>
  <td>With Json</td>
</tr>
  <td>movie/:Title</td>
  <td>GET</td>
  <td>/movie/Logan</td>
  <td>Json</td>
  <td>"Title": "Logan",
      "Description": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety." </td>
<tr>
  <td>Directors/:Name</td>
  <td>GET</td>
  <td>movies/Directors/Peter%20Jackson</td>
  <td>Json</td>
  <td>"Name: Peter Jackson. Bio: He is most well-known for his film adaptation of J.R.R. Tolkien's Lord of the Rings trilogy, which has won numerous awards.</td>
</tr>   
<tr>
  <td>User register</td>
  <td>/users</td>
  <td>Post</td>
  <td>Json</td>
  <td>bakbkwea</td>
  <td>fwfw</td>
</tr>
<tr>
  <td>Update users</td>
  <td>users/:Username</td>
  <td>Put</td>
  <td>Json</td>
  <td></td>
  <td></td>
</tr>


<tr>
  <td>Movie favorite</td>
  <td>/users/:Username/Movies/:MovieID</td>
  <td>Post</td>
  <td>/users/olivia/movies/Logan ID</td>
  <td>JSON</td>
  
  <td>{
      "FavoriteMovies": [],
      "_id": "5fa92f978c625f34040d0ec8",
      "Username": "Olivia",
      "Password": "olivi123",
      "Email": "oliv@gmail.com",
      "Birthday": "1996-01-01T00:00:00.000Z",
      "__v": 0
  }</td>
</tr>
<tr>
  <td>Remove Movie</td>
  <td>/users/:Username/Movies/:MovieID</td>
  <td>Delete</td>
  <td>/users/Olivia/movies/Logan ID</td>
  <td>Json</td>
  <td>{
      "FavoriteMovies": [],
      "_id": "5fa92f978c625f34040d0ec8",
      "Username": "Olivia",
      "Password": "olivi123",
      "Email": "oliv@gmail.com",
      "Birthday": "1996-01-01T00:00:00.000Z",
      "__v": 0
  }</td>
</tr>
<tr>
  <td>Remove user</td>
  <td>/users/:Username</td>
  <td>Delete</td>
  <td>None</td>
  <td>/users/makeabake</td>
</tr> -->
</table>

<script src="movie_api/index.js"></script>
</body>
</html>
