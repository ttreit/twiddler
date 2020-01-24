  let msgHistory = {};

  function getTweets() {
    var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    //add time stamp here
    let today = new Date();
    let date = (today.getMonth()+1)+'/'+today.getDate()+'/' + today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes();
    let dateTime = '  --- sent on: ' + date+' at: '+time;
    let linkUser = tweet.user;
    $tweet.html(`@<a href='javascript:getHistory(${linkUser})'>${linkUser}</a>: ${tweet.message} ${dateTime}`);
    $tweet.appendTo('.feed');
    if(!(msgHistory.hasOwnProperty(tweet.user))) {
      msgHistory[tweet.user] = [`${tweet.message} --- sent on: ${date} at: ${time}`];
    } else {
      msgHistory[tweet.user].push(`${tweet.message} --- sent on: ${date} at: ${time}`);
    }
    console.log(msgHistory);
    console.log('user ', linkUser);
    console.log('history ', msgHistory[linkUser]);
   index -= 1;
    }
  }  //end getTweets

  function getHistory(user) {
    console.log(msgHistory);
    let arrayToProcess = msgHistory[user];
    for (i = 0; i < arrayToProcess.length; i++) {
     arrayToProcess[i].appendTo('.history');
    }
  }
