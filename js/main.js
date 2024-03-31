const bookStore = Vue.createApp({
  created() {
    fetch("http://localhost/KaurPatel_EkamOm_Api/public/api/songs")
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
      songDetails: null,
      error: "",
    };
  },
  methods: {
    playGunShot() {
      var audio = new Audio(
        "http://localhost/KaurPatel_EkamOm_Api/public/audios/gunfight-shoot-sound.mp3"
      );
      audio.play();
    },
    getSongDetails(songId) {
      console.log(songId);
      fetch("http://localhost/KaurPatel_EkamOm_Api/public/api/songs/" + songId)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            this.songDetails = data ? data : "Not Available";
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
