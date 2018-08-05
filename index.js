const app = "I don't do much.";

const token = '6f77db25444789b028b1495b6a564d41b69d6e75'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))