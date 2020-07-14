import { LitElement, html, css } from 'lit-element';
import {writeIsClosed} from '../../apolloClient/apolloClient';
import remove from '../../imgs/Home/Header/Navbar/remove-white.124cb20181e249f5932de870a2d671ca76801665.svg';

class ButtonClose extends LitElement {
	static get styles() {
		return css`
			.btn {
				width: 2.5rem;
				height: 2.5rem;
			}

			.btnItemFlexTransparent {
				background-color: transparent;
				border-width: 0rem;
			}
		`;
	}
	
	constructor() {
        super();
        this._isClosed = true;
        this.addEventListener('click', this._onClick.bind(this)); 
    }
    
    _onClick() {
        writeIsClosed(this._isClosed);
    }

	render() {
		return html`
			<button type="button" aria-label="close button" class="btn btnItemFlexTransparent">
				<img src=${remove} alt="x" />
			</button>
		`;
	}
}

customElements.define('button-close', ButtonClose);