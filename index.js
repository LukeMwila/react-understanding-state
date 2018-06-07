import React, { Component } from 'react'

class MyComponent extends Component{	
    state = {
		superHero: ''
	}
	
	/** Update the state */
	updateFavouriteSuperHero(e){
        e.preventDefault()
		this.setState({ superHero: e.target.value })
	}

	render(){
        return(
			<div>
				My favorite super hero is {this.state.superHero}<br />
				<input onChange={(e) => this.updateFavouriteSuperHero(e)} placeholder='Type favorite superhero' />
			</div>
		)
	}
}