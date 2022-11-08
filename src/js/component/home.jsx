import React from "react";
import PropType from "prop-types";

//include images into your bundle


//create your first component
export const Navbar=()=>{
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
		<div className="container-fluid w-75">
		  <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav pt-2">
			  <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
			  <a className="nav-link text-light" href="#">About</a>
			  <a className="nav-link text-light" href="#">Services</a>
			  <a className="nav-link text-light ">Contact</a>
			</div>
		  </div>
		</div>
	  </nav>);
};

export const Jumbotron =()=>{
	return(
		<div className= "container-fluid bg-secondary bg-opacity-25 mt-3 rounded w-75">
			<div className= "col-12 ">
				<h1>Dogs: man's best friend</h1>
				<p>Dogs can have many positive effects on the lives of their owners. They influence social, emotional, and cognitive development in children, promote an active lifestyle, provide companionship, and have even been able to detect oncoming epileptic seizures or the presence of certain cancers. Dogs can also help to relieve stress and anxiety in people.</p>
				<a href="https://www.petfinder.com/" target="_blank" className="btn btn-primary mb-5">Rescue Dogs!</a>
			</div>
		</div>
	)
}
 export const Card = (props)=>{
	return (
		<div className="card mx-2 border">
  				<img src={props.imageUrl} className="card-img-top img-fluid " alt="..." />
  					<div className="card-body">
    				<h5 className="card-title">{props.title}</h5>
    				<p className="card-text">{props.description}</p>
					</div>
					<div className="card-footer">
    				<a href={props.buttonUrl}  target="_blank" className="btn ms-5 btn-primary">{props.buttonLabel}</a>
  					</div>
			
		</div>
	)
 }

Card.PropType={
	title: PropType.string,
	description: PropType.string,
	imageUrl: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
}


export const CardCreator=(title, description, image, buttonUrl, buttonLabel)=> {
	return (<Card title= {title} description= {description} imageUrl= {image} buttonUrl= {buttonUrl} buttonLabel= {buttonLabel}
		/>)
	}
