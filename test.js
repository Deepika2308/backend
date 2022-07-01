// import bcrypt from 'bcrypt';

// async function generatePassword(password){
//     const saltValue = await bcrypt.genSalt(5);
//     const hashedPass = await bcrypt.hash(password,saltValue);
//     console.log(`Hashed password ${hashedPass}`);
// }

// generatePassword("Password@123");

// import {Card,Button} from 'react-bootstrap';
// import moviesList from "./MoviesList/moviePosters.js"
// import {useHistory} from "react-router-dom";


// async function fetchMovies(){

//   let mvs = await fetch("http://127.0.0.1:3001/getMovies");
//   let res = await mvs.json();
//   return res;
// }


// function MovieCard({startNum,endNum}){

//   let moviesList1 = fetchMovies(startNum,endNum);

//   console.log(moviesList1.slice(startNum,endNum));

//  let slicedList = moviesList.slice(startNum,endNum);

// let history = useHistory();

// let movieDetails = slicedList.map((obj,index) => {
//     return <Card key={index}>
//     <Card.Img variant="top" src={obj.src} alt={obj.name} className="card-img"/>
//     <Card.Body className="d-flex">
//       <Card.Title>{obj.name}</Card.Title>
//       <Card.Text>{obj.language} | {obj.censor}</Card.Text>
//       <Button variant="warning" className="book-button" onClick={() => history.push(`/book/${index}`)}>Book</Button>
//     </Card.Body>
//   </Card> 
// })
// return movieDetails;
// }

// export default MovieCard;


// const current = new Date();
//   const getDay = current.getDay()+3;
//   const date = current.getDate();
//   const month = current.getMonth();
//   let day="";
// switch(getDay){
//     case 0 :
//         day= "Sunday";
//        break;
//     case 1 :
//         day= "Monday";
//        break;
//     case 2 :
//         day= "Tuesday";
//        break;
//    case 3 :
//         day= "Wednesday";
//        break;
//     case 4 :
//         day= "Thursday";
//        break;
//     case 5 :
//         day= "Friday";
//        break;
//     case 6 :
//         day= "Saturday";
//        break;
// }

//   console.log(getDay);
//   console.log(date);
//   console.log(month);


// var date = new Date();
// var today = date.toISOString().split('T')[0]
// console.log(today);
// var lastDay = date. setDate(date. getDate() + 7);
// lastDay = date.toISOString().split('T')[0]
// console.log(lastDay);


