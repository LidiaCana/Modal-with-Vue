Vue.component("modal", {
	props: ["properties"],
	data() {
		return {};
	},
	methods: {
		close() {
			this.$emit("close-modal");
		},
	},
	template: `
		<div class="modal-mask">
		<div class="modal-wrapper">
			<div class="modal-container">
			<h3>{{properties.title}}</h3>
			<div>
				<slot name="body-container"></slot>
			</div>
			<footer>
				<button v-on:click="close">Cerrar</button>
			</footer>
			</div>
		</div>
		</div>
	`,
});

new Vue({
	el: "#app",
	data() {
		return {
			modalProperty: {
				title: "Modal",
				number: 0,
			},
			showModal: false,
		};
	},
	computed: {},
	watch: {
		showModal() {
			console.log(this.showModal);
		},
	},
	methods: {
		toggleShowModal() {
			this.showModal = !this.showModal;
		},
	},
});
