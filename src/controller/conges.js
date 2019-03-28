function saveConges(){
    var datedebut = document.getElementById("datedebut").value;
    var datefin = document.getElementById("datefin").value;
    var demandeConges = document.getElementById("demandeConges").value;
    var data = JSON.stringify({
        "datefin":demandeConges,
        "datedebut": datedebut,
        "demandeConges": datefin,
       
      });
      console.log(data);
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "http://localhost:8080/conges/saveConges");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.setRequestHeader("Postman-Token", "e1d52e45-23f8-4fb1-9c26-92d0f2df1e62");
      
      
     xhr.send(data);
}