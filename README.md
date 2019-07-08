# InCrowd

Incrowd a compatibility-based "MusicFriendFinder" application. This full-stack site will take in users' ratings for each music genre playlist , then compare their answers with those from other users. The app will then display the name and favourite youtube song video of the user with the best overall music taste match.

Heroku Deployed Link: https://incrowd.herokuapp.com/

<br>



## Get Started
Please enter the following command in your terminal:
```
$ npm i
```

<br>
<br>


## Demo

 ![](app/public/images/demo.gif)

<br>
<br>



## Code Snippets
This app takes in the user's favourite song's youtube link. In order to get the embedded code, I validated the link and converted the link to embedded code, which was then used as source of iframe. 

<br>

#### Youtube Link Validation: 

```JAVASCRIPT

    var url = $("#songLink").val().trim();
    var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    var songValidate = (url.match(p)) ? RegExp.$1 : false;
    console.log(songValidate);
    }
```

#### Embedded Code for Iframe

```JAVASCRIPT

    var link = data.matchedUser.songLink;
    var linkId = link.split("=");
    console.log(linkId[1]);
    
    var youtubeLink = "https://www.youtube-nocookie.com/embed/" + linkId[1];
    document.getElementById("youtubeIframe").setAttribute("src", youtubeLink);
```

<br>
<br>

## Technology Used

* HTML & CSS3
* Jquery
* Node.js
* Google Font
* Express NPM
* Path NPM
* Bootstrap
* Ulkit

<br>

## Author
Chloe Zhou