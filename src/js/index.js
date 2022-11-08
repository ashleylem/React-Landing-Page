//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {Navbar, Jumbotron, Card, CardCreator} from "./component/home.jsx";

let card1 = (CardCreator(
	"Golden Retriever", 
	"Golden Retrievers are kind, trusting, and gentle. Goldens are outgoing, trustworthy, and eager-to-please family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes.  ",
	"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
	"https://www.rover.com/blog/breeds/golden-retriever/",
	"Find Out More!",
))
let card2 = (CardCreator(
	"Bernese Mountain Dog", 
	"Big, powerful, and built for hard work, the Bernese Mountain Dog is also strikingly beautiful and blessed with a sweet, affectionate nature. Berners are generally placid but are always up for a romp with the owner, whom they live to please. Berners get along with the entire family and are particularly gentle with children, but they will often become more attached to one lucky human. Berners are imposing but not threatening, and they maintain an aloof dignity with strangers.",
	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F05%2F27%2Fbernese-mountain-dog-sitting-puppy-204356895-2000.jpg",
	"https://www.akc.org/dog-breeds/bernese-mountain-dog/",
	"Find Out More!",
))

let card3 = (CardCreator(
	"Siberian Husky", 
	"Having a Husky means checking your locks to make sure they can’t escape. Their desire to explore and roam the outside world can be a challenge to keep in a box, and they’ll discover all sorts of ways to break out of your house or yard. (Is the trash can far enough way from the fence?) You’ll just have to give in and hit the trails with them. This delightfully smart dog loves adventure, and they prefer to have them with you.",
	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F14%2Fsiberian-husky-puppy-grass-146571433-2000.jpg",
	"https://be.chewy.com/dog-breed/husky/",
	"Find Out More!",
))
let card4 = (CardCreator(
	"Yorkie", 
	"Yorkies are one of the smallest dog breeds, measuring just 7-10” tall with adults weighing no more than seven pounds. They’re known for appearing confident thanks to their high head carriage and compact, well-proportioned body shape. Yorkies are low-slung with a straight back, and have a small head, carried high, with v-shaped ears that stand up tall. ",
	"https://www.rover.com/blog/wp-content/uploads/2021/06/aurora.the_.amazing.yorkie-1024x1019.jpg",
	"https://www.rover.com/blog/breeds/yorkshire-terrier/",
	"Find Out More!",
))

const theCards= React.createElement('div', {class:  "card-group w-75 px-0 mt-3 container-fluid mb-4 gy-3 "}, [card1, card2, card3, card4]);

//render your react application
ReactDOM.render(<Navbar/>, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron/>, document.querySelector("#jumbotron"))
ReactDOM.render(theCards, document.querySelector("#cards"))

