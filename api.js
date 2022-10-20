const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const data = {
  batman: {
    matchmaker: '',
    matchmaking: '',
    mProfiles: [],
    approvedProfiles: [],
    userLiked: ['catwoman'],
    chat: {},
  },
  catwoman: {
    matchmaker: '',
    matchmaking: '',
    mProfiles: [],
    approvedProfiles: [],
    userLiked: ['batman'],
    chat: {},
  },
};

// Adds new profile to the data
const initProfile = (username, matchmaker) => {
  if (!(username in data)) {
    data[username] = {
      matchmaker: matchmaker,
      matchmaking: matchmaker,
      mProfiles: [],
      approvedProfiles: [],
      userLiked: [],
      chat: {},
    };
  }
  if (!(matchmaker in data)) {
    data[matchmaker] = {
      matchmaker: username,
      matchmaking: username,
      mProfiles: [],
      approvedProfiles: [],
      userLiked: [],
      chat: {},
    };
  }
};

// Returns a list of matchmaker profiles that {username} needs to see
app.post('/matchmaker_profiles', (req, res) => {
  res.send(data[req.body.username]['mProfiles']);
});

// Likes/dislikes {userB} from {matchmakerA}
app.post('/matchmaker_like', (req, res) => {
  const username = req.body.username;
  const matchmaking = data[username]['matchmaking'];
  const likedUsername = req.body.likedUsername;
  const likedUsernameMatchmaker = req.body.likedUsernameMatchmaker;
  initProfile(likedUsername, likedUsernameMatchmaker);
  // Remove likedUsername from matchmaker's mProfiles
  data[username]['mProfiles'] = data[username]['mProfiles'].filter(
    (mUser) => mUser !== likedUsername
  );
  if (req.body.liked) {
    // Add to approved profiles
    data[username]['approvedProfiles'].push(likedUsername);
    // Add to other matchmaker's mProfiles if it's not in their approvedProfiles
    if (
      !data[likedUsernameMatchmaker]['approvedProfiles'].includes(matchmaking)
    ) {
      data[likedUsernameMatchmaker]['mProfiles'].push(matchmaking);
    }
  } else {
    // Remove disliked user from other matchmaker's approvedProfiles if it exists
    data[likedUsernameMatchmaker]['approvedProfiles'] = data[
      likedUsernameMatchmaker
    ]['approvedProfiles'].filter(
      (approvedUser) => approvedUser !== matchmaking
    );
  }
});

// Returns a list of profiles that {username} needs to see
app.post('/user_profiles', (req, res) => {
  const username = req.body.username;
  const matchmaker = req.body.matchmaker;
  initProfile(username, matchmaker);
  const userProfiles = [];
  // Get every profile from matchmaker's approvedProfiles
  for (let approvedUser of data[matchmaker]['approvedProfiles']) {
    const approvedUserMatchmaker = data[approvedUser]['matchmaker'];
    // Add approved user to list if user exists in their matchmaker's approvedProfiles
    if (
      data[approvedUserMatchmaker]['approvedProfiles'].includes(username) &&
      !data[username]['userLiked'].includes(approvedUser)
    ) {
      userProfiles.push(approvedUser);
    }
  }
  res.send(userProfiles);
});

// Likes/dislikes {userB} from {userA}
app.post('/user_like', (req, res) => {
  const username = req.body.username;
  const matchmaker = data[username]['matchmaker'];
  const likedUsername = req.body.likedUsername;
  const likedUsernameMatchmaker = data[likedUsername]['matchmaker'];
  if (req.body.liked) {
    // Add liked user to user's userLiked
    data[username]['userLiked'].push(likedUsername);
  } else {
    // Remove user from disliked user's userLiked if it exists
    data[likedUsername]['userLiked'] = data[likedUsername]['userLiked'].filter(
      (likedUser) => likedUser !== username
    );
    // Remove selves from each other's matchmakers approvedProfiles
    data[matchmaker]['approvedProfiles'] = data[matchmaker][
      'approvedProfiles'
    ].filter((approvedUser) => approvedUser !== likedUsername);
    data[likedUsernameMatchmaker]['approvedProfiles'] = data[
      likedUsernameMatchmaker
    ]['approvedProfiles'].filter((approvedUser) => approvedUser !== username);
  }
});

// Returns a list of profiles ready for chat for {username}
app.post('/chat_profiles', (req, res) => {
  const username = req.body.username;
  const chatProfiles = [];
  // Get every profile from user's userLiked
  for (let likedUser of data[username]['userLiked']) {
    // Add liked user to list if user exists in their userLiked
    if (data[likedUser]['userLiked'].includes(username)) {
      chatProfiles.push(likedUser);
    }
  }
  res.send(chatProfiles);
});

// Gets all chat messages
app.post('/get_chat', (req, res) => {
  const fromUsername = req.body.fromUsername;
  const toUsername = req.body.toUsername;
  if (!(toUsername in data[fromUsername]['chat'])) {
    data[fromUsername]['chat'][toUsername] = [];
    data[toUsername]['chat'][fromUsername] = [];
  }
  res.send(data[fromUsername]['chat'][toUsername]);
});

// Makes a new chat
app.post('/make_chat', (req, res) => {
  const fromUsername = req.body.fromUsername;
  const toUsername = req.body.toUsername;
  data[fromUsername]['chat'][toUsername] = [
    ...data[fromUsername]['chat'][toUsername],
    { type: 'sent', message: req.body.message },
  ];
  data[toUsername]['chat'][fromUsername] = [
    ...data[toUsername]['chat'][fromUsername],
    { type: 'received', message: req.body.message },
  ];
});

// Returns all data
app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
