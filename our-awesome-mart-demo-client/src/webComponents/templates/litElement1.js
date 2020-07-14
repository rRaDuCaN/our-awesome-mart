import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
	static get properties() {
		return {
			message: { type: String },
		};
	}

	constructor() {
		super();
		this.message = 'Loading';
		this.addEventListener('stuff-loaded', (e) => {
			this.message = e.detail;
		});
		// this.loadStuff();
	}
	render() {
		return html`
			<p>${this.message}</p>
			<p>So, it doesn't work, does it?</p>
			<slot name="something"></slot>
		`;
	}
}

window.customElements.define('my-element', MyElement);
