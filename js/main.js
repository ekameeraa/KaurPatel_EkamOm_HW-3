import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    songData: [],
    error: "",
    album: null,
    albumTitle: "",
    ratingsAverage: 0,
  },
  mounted() {
    this.fetchSongs();
  },
  methods: {
    fetchSongs() {
      fetch("http://localhost/Kaur_Ekam_Api/public/song")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch songs");
          }
          return response.json();
        })
        .then((data) => {
          this.songData = data;
        })
        .catch((error) => {
          this.error = "Failed to fetch songs";
          console.error("Error fetching songs:", error);
        });
    },
    getSong(title) {
      fetch(`http://localhost/Kaur_Ekam_Api/public/song/${title}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch song details");
          }
          return response.json();
        })
        .then((data) => {
          this.album = data.album;
          this.albumTitle = data.albumTitle;
          this.ratingsAverage = data.ratingsAverage;
        })
        .catch((error) => {
          this.error = "Failed to fetch song details";
          console.error("Error fetching song details:", error);
        });
    },
  },
});

import { createApp } from "vue";

const app = createApp({
  data() {
    return {
      songData: [],
      albumTitle: "",
      ratingsAverage: "",
      error: null,
    };
  },
  mounted() {
    this.fetchSongs();
  },
  methods: {
    async fetchSongs() {
      try {
        const response = await fetch("http://localhost/sidhu/public/song");
        if (!response.ok) throw new Error("Failed to fetch");
        this.songData = await response.json();
      } catch (err) {
        this.error = err.message;
      }
    },
    async getSong(title) {
      try {
        // Replace 'title' in the URL with how your API uses it (e.g., as a query parameter)
        const response = await fetch(
          `http://localhost/sidhu/public/song/=${title}`
        );
        if (!response.ok) throw new Error("Failed to fetch song details");
        const data = await response.json();
        this.albumTitle = data.album; // Adjust these based on the actual JSON structure
        this.ratingsAverage = data.rating; // Adjust these based on the actual JSON structure
      } catch (err) {
        this.error = err.message;
      }
    },
  },
});

app.mount("#app");
