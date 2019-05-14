import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class AdminView extends React.Component {
	render() {
		return (
			<ul className="collection with-header">
				<li className="collection-header">
					<h4>First Names</h4>
				</li>
				<li className="collection-item">
					<div>
						Alvin
						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
				</li>
				<li className="collection-item">
					<div>
						Alvin
						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
				</li>
				<li className="collection-item">
					<div>
						Alvin
						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
				</li>
				<li className="collection-item">
					<div>
						Alvin
						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
				</li>
			</ul>
		);
	}
}
