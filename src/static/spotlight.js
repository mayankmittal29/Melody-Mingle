// Set the release date
const releaseDate = new Date("June 30, 2023 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  // Get the current time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = releaseDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `<b> RELEASE IN ${days}d ${hours}h ${minutes}m ${seconds}s</b>`;
    
  // If the countdown is finished, stop the timer and display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Album is now available!";
  }
}, 1000);

let reviews = {};

function submitReview() {
  let artist_name = document.getElementById("artist_name").value;
  let user_name = document.getElementById("user_name").value;
  let rating = document.querySelector('input[name="rating"]:checked').value;
  let review = document.getElementById("review").value;

  if (artist_name in reviews) {
    reviews[artist_name].push({
      user: user_name,
      rating: rating,
      review: review,
    });
  } else {
    reviews[artist_name] = [
      {
        user: user_name,
        rating: rating,
        review: review,
      },
    ];
  }

  updateReviewsTable();
}

function updateReviewsTable() {
  let tableBody = document.querySelector("#reviews_table tbody");
  tableBody.innerHTML = "";
  for (const [artist_name, artist_reviews] of Object.entries(reviews)) {
    for (const review of artist_reviews) {
      let row = tableBody.insertRow();
      let artistCell = row.insertCell(0);
      let userCell = row.insertCell(1);
      let ratingCell = row.insertCell(2);
      let reviewCell = row.insertCell(3);
      artistCell.innerHTML = artist_name;
      userCell.innerHTML = review["user"];
      ratingCell.innerHTML = review["rating"];
      reviewCell.innerHTML = review["review"];
    }
  }
}

// var i = 0;
// var txt = 'Amritpal Singh Dhillon (born 10 January 1993),</br></br> known professionally as AP Dhillon, is an Indo-Canadian singer,</br></br> rapper and record producer associated with Punjabi music. </br></br>Five of his singles have peaked on the Official Charts Company</br></br> UK Asian and Punjabi charts, while "Majhail" and "Brown Munde" have topped the chart.</br></br> Dhillon, alongside his patners Gurinder Gill, Shinda Kahlon </br></br>and Gminxr works as trio under their labell Run-Up Records'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
