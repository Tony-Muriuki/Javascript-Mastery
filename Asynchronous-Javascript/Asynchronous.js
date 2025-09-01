// Ayncronous Javascript
console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the Data");
      resolve({ userEmail: email });
    }, 3000);
  });
}
// Get User Videos
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    console.log(email);
    setTimeout(() => {
      resolve(["video1", "video2", "video3", "video4"]);
    }, 2000);
  });
}

// Getting Video Details
function getVideoDetails(videos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Formula 1 movie with Bradd Pitt");
    }, 2000);
  });
}

// const user = loginUser("kamandetonymuriuki@gmail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     getVideoDetails(videos[0], (videoTitle) => {
//       console.log(videoTitle);
//     });
//   });
// });
// console.log(user);
console.log("End");
