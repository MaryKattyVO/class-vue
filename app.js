const app = Vue.createApp({
	// template: `
	// 	<h1>Hola Mundo</h1>
	// 	<p>{{ {a:1, b:1} }}</p>
	// `

	data() {
		return {
			quote: 'Hola Batman',
			author: 'Bruce'
		}
	},
	methods: {
		changeQuote() {
			console.log('Hola Mundo');
			this.author='Makymoko'

			this.capitalize()
		},
		capitalize() {
			this.quote = this.quote.toUpperCase()
		}
	}
})

app.mount('#myApp')