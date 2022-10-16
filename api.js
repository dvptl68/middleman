const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded());

const data = {};

// Adds new profile to the data
const initProfile = (username, matchmaker) => {
  if (!(username in data)) {
    data[username] = {
      "matchmaker": matchmaker,
      "matchmaking": matchmaker,
      "mProfiles": [],
      "approvedProfiles": [],
      "userLiked": [],
    }
  }
  if (!(matchmaker in data)) {
    data[matchmaker] = {
      "matchmaker": username,
      "matchmaking": username,
      "mProfiles": [],
      "approvedProfiles": [],
      "userLiked": [],
    }
  }
};

app.post('/matchmaker_profiles', (req, res) => {
  const username = req.body.username;
  const matchmaker = req.body.matchmaker;
  initProfile(username, matchmaker);
  res.send(data[username]["mProfiles"]);
});

app.post('/matchmaker_like', (req, res) => {
  const username = req.body.username;
  const likedUsername = req.body.likedUsername;
  const likedUsernameMatchmaker = req.body.likedUsernameMatchmaker;
  const liked = req.body.liked;
  initProfile(likedUsername, likedUsernameMatchmaker);
  data[username]["mProfiles"] = data[username]["mProfiles"].filter(mUsername => mUsername !== likedUsername);
  if (liked) {
    data[username]["approvedProfiles"].push(likedUsername);
    if (!data[data[likedUsername]["matchmaker"]]["approvedProfiles"].includes(data[username]["matchmaking"])) {
      console.log("adding to other matchmaker's mProfiles")
      data[data[likedUsername]["matchmaker"]]["mProfiles"].push(data[username]["matchmaking"])
    }
  }
  res.send(data);
});

app.listen(port, () => console.log(`Listening at port ${port}`));
