const bookStore = Vue.createApp({
  created() {
    fetch("http://localhost/Kaur_Ekam_Api/public/song")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.songData = data;
      })
      .catch((error) => {
        console.error(error);
        this.error = "Failed to fetch songs.";
      });
  },
  data() {
    return {
      songData: [],
      releaseDate: "",
      albumName: "",
      error: "",
    };
  },
  methods: {
    getSongDetails(songId) {
      fetch(`https://openlibrary.org/search.json?=${songId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            this.releaseDate = data.release_date
              ? data.release_date
              : "Not Available";
            this.albumName = data.albumName ? data.albumName : "Not Available";
          } else {
            this.error = "No details found for the selected song.";
          }
        })
        .catch((error) => {
          console.error(error);
          this.error = "Failed to fetch song details.";
        });
    },
  },
});

bookStore.mount("#app");
