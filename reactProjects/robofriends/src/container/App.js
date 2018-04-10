import React,{ Component } from 'react';
import CardList from '../components/CardList/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox/SearchBox';


class AppComponent extends Component{
	constructor(){
		super()
		this.state = {
			robots:robots,
			searchfield:''
		}
	}
	onSearchChange =(event) =>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className = 'tc'>
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
			);
	}
	
}

export default AppComponent;