import Vue from "../node_modules/vue/dist/vue.js"; // Assuming you have Vue installed via npm/yarn
import { fetchEntries, showDetails } from "./modules.js"; // Importing functions from modules.js

new Vue({
  el: "#app",
  data: {
    loading: false,
    error: "",
    entries: [],
    selectedEntry: null,
  },
  mounted() {
    fetchEntries.call(this); // Calling the function within the context of Vue instance
  },
  methods: {
    showDetails,
  },
});
