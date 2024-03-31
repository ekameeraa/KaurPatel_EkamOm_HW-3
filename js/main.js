const bookStore = Vue.createApp({
  created() {
    this.displaySpinner();

    fetch("http://localhost/KaurPatel_EkamOm_Api/public/api/songs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          this.songData = data;
          this.removeSpinner();
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
        this.error = "Failed to fetch songs.";
        setTimeout(() => this.removeSpinner(), 2500);
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
    displaySpinner() {
      const spinnerHTML = `
        <div class="custom-spinner" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
           <svg xmlns="http://www.w3.org/2500/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="281px" height="281px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
//       <g transform="translate(50 50) scale(0.73) translate(-50 -50)">
//         <g>
//           <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" calcMode="spline" dur="4s" values="0 50 50;90 50 50;180 50 50;270 50 50;360 50 50" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"></animateTransform>
//           <g>
//             <animateTransform attributeName="transform" type="scale" dur="1s" repeatCount="indefinite" calcMode="spline" values="1;1;0.5" keyTimes="0;0.5;1" keySplines="1 0 0 1;1 0 0 1"></animateTransform>
//             <g transform="translate(25 25)">
//               <rect x="-25" y="-25" width="52" height="52" fill="#e15b64">
//                 <animate attributeName="fill" dur="4s" repeatCount="indefinite" calcMode="spline" values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"></animate>
//               </rect>
//             </g>
//             <g transform="translate(25 75)">
//               <rect x="-25" y="-25" width="52" height="50" fill="#e15b64">
//                 <animateTransform attributeName="transform" type="scale" dur="1s" repeatCount="indefinite" calcMode="spline" values="0;1;1" keyTimes="0;0.5;1" keySplines="1 0 0 1;1 0 0 1"></animateTransform>
//                 <animate attributeName="fill" dur="4s" repeatCount="indefinite" calcMode="spline" values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"></animate>
//               </rect>
//             </g>
//             <g transform="translate(75 25)">
//               <rect x="-25" y="-25" width="50" height="52" fill="#e15b64">
//                 <animateTransform attributeName="transform" type="scale" dur="1s" repeatCount="indefinite" calcMode="spline" values="0;1;1" keyTimes="0;0.5;1" keySplines="1 0 0 1;1 0 0 1"></animateTransform>
//                 <animate attributeName="fill" dur="4s" repeatCount="indefinite" calcMode="spline" values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"></animate>
//               </rect>
//             </g>
//             <g transform="translate(75 75)">
//               <rect x="-25" y="-25" width="50" height="50" fill="#e15b64">
//                 <animateTransform attributeName="transform" type="scale" dur="1s" repeatCount="indefinite" calcMode="spline" values="0;1;1" keyTimes="0;0.5;1" keySplines="1 0 0 1;1 0 0 1"></animateTransform>
//                 <animate attributeName="fill" dur="4s" repeatCount="indefinite" calcMode="spline" values="#e15b64;#f47e60;#f8b26a;#abbd81;#e15b64" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"></animate>
//               </rect>
//             </g>
//           </g>
//         </g>
//       </g>
//     </svg>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", spinnerHTML);
    },
    removeSpinner() {
      const spinnerElement = document.querySelector(".custom-spinner");
      if (spinnerElement) {
        spinnerElement.remove();
      }
    },
    getSongDetails(songId) {
      this.displaySpinner();
      fetch(`http://localhost/KaurPatel_EkamOm_Api/public/api/songs/${songId}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            if (data) {
              this.songDetails = data;
            } else {
              this.error = "No details found for the selected song.";
            }
            this.removeSpinner();
          }, 2500);
        })
        .catch((error) => {
          console.error(error);
          this.error = "Failed to fetch song details.";
          setTimeout(() => this.removeSpinner(), 2500);
        });
    },
  },
});

bookStore.mount("#app");
