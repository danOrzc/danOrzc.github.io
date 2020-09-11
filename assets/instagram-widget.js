const Http = new XMLHttpRequest();

const instagram_api='https://graph.facebook.com/v8.0/instagram_oembed?url=';
const post='https://www.instagram.com/p/B2pb2aGB-Fe/';
const access_token='&access_token=2540447509591358|0a0bc3788c017c79f41cd99dbecb9adb';
const url=instagram_api + post + access_token;

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}