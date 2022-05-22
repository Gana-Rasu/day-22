

                 async  function buttonFunction(){
                  //  couldn't get th right api
                    let response =  await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=88a450d35c3177da96d93735183e5623");
                    let fetched_data = await response.json();
                    console.log(fetched_data);
        
        }

    async function fetching(){
        try{       
          let response = await  fetch(`https://restcountries.com/v3.1/all`);
          let fetched_data = await response.json();
          for(let i=0;i<=fetched_data.length;i++){

            let container = document.createElement("div");
            container.setAttribute("class","container");
            container.innerHTML = `
            <div class="card-group ">
            <div class="card">
            <h5 class="card-title">${fetched_data[i].name.common}</h5>
            <img src="${fetched_data[i].flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
            <h6>Capital : ${fetched_data[i].capital}</h6>
            <h6>Region : ${fetched_data[i].region}</h6>
            </div>
            <div class="card-footer">
              <button onclick="buttonFunction()" class="btn btn-primary">click for weather</button>
           
            </div>
          </div>
          </div>`
           
            document.body.append(container);
        
        }
       
        }
        catch(error){
            console.log("data not found",error);
        }
    
    }
    
    

    fetching();
    
    