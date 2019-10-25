import React, { Component } from 'react';
import { Link , Redirect , withRouter } from 'react-router-dom';
import * as THREE from 'three';
import * as GLTFLoader from 'three-gltf-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom'



class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollLeftPosition: 0,
			items: [
				{ id: 1, text: 'Item', active: false },
				{ id: 2, text: 'Item', active: false },
				{ id: 3, text: 'Item', active: true },
				{ id: 4, text: 'Item', active: false },
				{ id: 5, text: 'Item', active: false },
				{ id: 6, text: 'Item', active: false },
				{ id: 7, text: 'Item', active: false },
				{ id: 8, text: 'Item', active: false }
			]
		};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevState.scrollLeftPosition);
		const scrollContainer = ReactDOM.findDOMNode(this.scrollRef);
		if (scrollContainer) {
    	ReactDOM.findDOMNode(this.activeRef).scrollIntoView({behavior: "smooth", block: "center"});
			//scrollContainer.scrollLeft += this.state.scrollLeftPosition;
		}
	}

	centerActiveItem() {
		const scrollContainer = ReactDOM.findDOMNode(this.scrollRef);
		const activeItem = ReactDOM.findDOMNode(this.activeRef);
    
    if(!activeItem) {
    	return;
    }
    
    const scrollRect = scrollContainer.getBoundingClientRect();
		const activeRect = activeItem.getBoundingClientRect();
		const activeWidth = activeRect.width;
		const activeLeft = activeRect.left;
		const activeRight = activeRect.right;
		const scrollWidth = scrollContainer.scrollWidth;
    const scrollLeft = scrollRect.left;

		this.setState((state) => {
			return {
				...state
			};
		});
	}

	toggleItem(currentItem) {
		this.setState((state) => {
			return {
				...state,
				items: state.items.map((item) => {
					item.active = currentItem.id === item.id ? (item.active = !item.active) : false;

					return {
						...item
					};
				})
			};
		}, () => { this.centerActiveItem(); });
	}

	clickHandler(event, currentItem) {
		this.toggleItem(currentItem);
	}

	render() {
		return (
			<div>
				<div className="container" ref={(ref) => (this.scrollRef = ref)}>
					{this.state.items.map((item, i) => (
						<div ref={(ref) => {
							if (item.active) {
								this.activeRef = ref;
							} 
						}} className={`item ${item.active ? 'active' : ''}`} key={i}
						     onClick={(e) => this.clickHandler(e, item)}>
							{item.text}#{item.id}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default TodoApp;

// ReactDOM.render(<TodoApp />, document.querySelector('#app'));
