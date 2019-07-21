   var section = document.querySelector('aside');
    var requestURL = 'https://renaehadfield.github.io/assignments/temples.json';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
      var templesData = request.response;
      showData(templesData);
    }


    function showData(jsonObj) {
      var temples = jsonObj['temples'];

      
      for (var i = 0; i < temples.length; i++) { 
        if (temples[i].name=="Brigham City Utah Temple"||temples[i].name=="Logan Utah Temple"||temples[i].name=="Ogden Utah Temple"||temples[i].name=="Bountiful Utah Temple"){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        myH2.className="purple";
        var myImg = document.createElement('img');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        

       myH2.textContent = temples[i].name;
       if (temples[i].name=="Brigham City Utah Temple"){
        myImg.setAttribute('src','images/brigham.jpg'); 
        myImg.setAttribute('alt','A view of the Brigham City Utah temple');
      }
      else if (temples[i].name=="Logan Utah Temple"){
        myImg.setAttribute('src','images/logan.jpg'); 
        myImg.setAttribute('alt','A view of the Logan Utah Temple.');
      }
      else if (temples[i].name=="Ogden Utah Temple"){
        myImg.setAttribute('src','images/ogden.jpg'); 
        myImg.setAttribute('alt','View of the Ogden Utah Temple');
      }
      else if (temples[i].name=="Bountiful Utah Temple"){
          myImg.setAttribute('src','images/bountiful.jpg'); 
          myImg.setAttribute('alt','View of the Bountiful Utah Temple');
        }
       myPara1.textContent = 'Address:' + temples[i].address;
        myPara2.textContent = 'Telephone:' + temples[i].telephone;
        myPara3.textContent = 'Email:' + temples[i].email;
        myPara4.textContent = 'Services:' + temples[i].services;
        myPara5.textContent = 'History:' + temples[i].history;
        myPara6.textContent = 'Sessions:' + temples[i].session;
        myPara7.textContent = 'Closures:' + temples[i].closure;
        

        myArticle.appendChild(myH2);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        

        section.appendChild(myArticle);
      }
    }
  }