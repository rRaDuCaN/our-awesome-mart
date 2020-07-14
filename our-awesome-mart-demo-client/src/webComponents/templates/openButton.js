import { LitElement, html, css } from 'lit-element';
import menu from '../../imgs/Home/Header/Navbar/menu-blue-turquoise.5081c3d70d941ebd1407970efed32a3175b328ca.svg';
import { writeIsClosed } from '../../apolloClient/apolloClient';

class ButtonOpen extends LitElement {
	constructor() {
		super();
		this._isClosed = false;
		this.addEventListener('click', this._onClick.bind(this));
	}

	static get styles() {
		return css`
			.btn {
				width: 2.5rem;
				height: 2.5rem;
			}

			:host {
				flex-basis: auto;
				height: 80%;
			}

			.SVGMenuBackground {
				background-color: transparent;
				outline: none;
				border-width: 0rem;
			}
		`;
	}

	_onClick() {
		writeIsClosed(this._isClosed);
	}

	render() {
		return html`
			<button type="button" aria-label="Menu" class="btn SVGMenuBackground">
				<img src=${menu} alt="menu" />
			</button>
		`;
	}
}

window.customElements.define('button-open', ButtonOpen);
