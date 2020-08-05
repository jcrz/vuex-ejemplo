import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		movies: [
			{ id: 1, title: "The Hangover", genre: "Comedy" },
			{ id: 2, title: "I Love You Man", genre: "Comedy" },
			{ id: 3, title: "The Hangover II", genre: "Comedy" },
      { id: 4, title: "Toy Story I", genre: "Family" },
      { id: 5, title: "Toy Story II", genre: "Family" },
      { id: 6, title: "Toy Story III", genre: "Family" },
		],
	},
});

new Vue({
  store,
  router,
	render: (h) => h(App),
}).$mount("#app");
