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
      fetch("http://localhost/sidhu/public/song")
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
      fetch(`http://localhost/sidhu/public/song/${title}`)
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
