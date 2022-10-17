const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded());

const data = {
  // 'superman': {
  //   'matchmaker': 'batman',
  //   'matchmaking': 'batman',
  //   'mProfiles': [],
  //   'approvedProfiles': [],
  //   'userLiked': [],
  // },
  // 'batman': {
  //   'matchmaker': 'superman',
  //   'matchmaking': 'superman',
  //   'mProfiles': [],
  //   'approvedProfiles': [],
  //   'userLiked': [],
  // },
  // 'wonderwoman': {
  //   'matchmaker': 'catwoman',
  //   'matchmaking': 'catwoman',
  //   'mProfiles': [],
  //   'approvedProfiles': [],
  //   'userLiked': [],
  // },
  // 'catwoman': {
  //   'matchmaker': 'wonderwoman',
  //   'matchmaking': 'wonderwoman',
  //   'mProfiles': [],
  //   'approvedProfiles': [],
  //   'userLiked': [],
  // }
};

// Adds new profile to the data
const initProfile = (username, matchmaker) => {
  if (!(username in data)) {
    data[username] = {
      'matchmaker': matchmaker,
      'matchmaking': matchmaker,
      'mProfiles': [],
      'approvedProfiles': [],
      'userLiked': [],
    }
  }
  if (!(matchmaker in data)) {
    data[matchmaker] = {
      'matchmaker': username,
      'matchmaking': username,
      'mProfiles': [],
      'approvedProfiles': [],
      'userLiked': [],
    }
  }
};

app.post('/matchmaker_profiles', (req, res) => {
  const username = req.body.username;
  const matchmaking = req.body.matchmaking;
  initProfile(username, matchmaking);
  res.send(data[username]['mProfiles']);
});

app.post('/matchmaker_like', (req, res) => {
  const username = req.body.username;
  const matchmaking = data[username]['matchmaking'];
  const likedUsername = req.body.likedUsername;
  const likedUsernameMatchmaker = req.body.likedUsernameMatchmaker;
  initProfile(likedUsername, likedUsernameMatchmaker);
  data[username]['mProfiles'] = data[username]['mProfiles'].filter(mUser => mUser !== likedUsername);
  if (req.body.liked) {
    data[username]['approvedProfiles'].push(likedUsername);
    if (!data[likedUsernameMatchmaker]['approvedProfiles'].includes(matchmaking)) {
      data[likedUsernameMatchmaker]['mProfiles'].push(matchmaking)
    }
  } else {
    data[likedUsernameMatchmaker]['approvedProfiles'] = data[likedUsernameMatchmaker]['approvedProfiles'].filter(approvedUser => approvedUser !== matchmaking)
  }
  res.send(data);
});

app.post('/user_profiles', (req, res) => {
  const username = req.body.username;
  const matchmaker = req.body.matchmaker;
  const userProfiles = []
  for (approvedUser of data[matchmaker]['approvedProfiles']) {
    const approvedUserMatchmaker = data[approvedUser]['matchmaker']
    if (data[approvedUserMatchmaker]['approvedProfiles'].includes(username) && !data[username]['userLiked'].includes(approvedUser)) {
      userProfiles.push(approvedUser);
    }
  }
  res.send(userProfiles)
});

app.post('/user_like', (req, res) => {
  const username = req.body.username;
  const matchmaker = data[username]['matchmaker'];
  const likedUsername = req.body.likedUsername;
  const likedUsernameMatchmaker = data[likedUsername]['matchmaker'];
  if (req.body.liked) {
    data[username]['userLiked'].push(likedUsername)
  } else {
    data[likedUsername]['userLiked'] = data[likedUsername]['userLiked'].filter(likedUser => likedUser !== username)
    data[matchmaker]['approvedProfiles'] = data[matchmaker]['approvedProfiles'].filter(approvedUser => approvedUser !== likedUsername);
    data[likedUsernameMatchmaker]['approvedProfiles'] = data[likedUsernameMatchmaker]['approvedProfiles'].filter(approvedUser => approvedUser !== username);
  }
  res.send(data)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
