// ===============================================================================
// LOAD DATA
// linking rout to a series of "data" sources.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/survey", function(req, res) {
      var newUser = req.body;
      for (var i = 0; i< newUser.scores.length; i++)
      {
        newUser.scores[i] = parseInt(newUser.scores[i]);
      }

      friendData.push(newUser);    

      var newUserScore = newUser.scores;

      var diffSumArr = [];

      for (var i = 0; i < friendData.length - 1; i++)
      {
        var diffSum = 0;
        var previousUserScore = friendData[i].scores;
        console.log(previousUserScore);

        for (var j = 0; j < previousUserScore.length; j++)
        {
          var diff = previousUserScore[j] - newUserScore[j];
          if (diff < 0)
          {
            diff = 0 - diff;
          }
          diffSum += diff;
        }
        diffSumArr.push(diffSum);
      }

      var lowDiff = diffSumArr[0];
      var lowDiffIndex;
      for (var i = 1; i < diffSumArr.length; i++)
      {
        if (diffSumArr[i] < lowDiff)
        {
          lowDiff = diffSumArr[i];
          lowDiffIndex = i;
        }
      }

      res.json({matchedUser: friendData[lowDiffIndex]});
  });

};
