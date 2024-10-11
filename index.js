const search = async() =>{
    if(inputValue.value)
    {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
        result.json().then((response)=>{
            console.log(response);

            const time = new Date()
            const date = time.getDate()
            const month = time.getMonth()
            const year = time.getFullYear()
            const day = time.getDay() 

           const obj = {1: 'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday',7:'Sunday'}

           //timezone
           timezone= (response.timezone)/3600
           const a=timezone%10
           console.log(a);

           



            output.innerHTML =`<div id='Main' class="row d-flex justify-content-center">
                    
                    <div class="col-md-6">
                        <div class="mb-3 mt-5">
                            <div class="card bg-transparent border-0"  style="width: 100%;">
                                <div class="card-body ">
                                  <div class="d-flex justify-content-between">
                                      <div class="d-flex">
                                          <h1 class="card-title text-center">${Math.floor(response.main.temp - 273.15)}°C</h1>
                                          <h6 class="mt-4"> • ${response.weather[0].main}</h6>
                                      </div>
                                      <h1>${response.name}</h1>
                                  </div>
                                  <h6>Feels like ${Math.floor(response.main.feels_like - 273.15)}°C</h6>
                                  <div class="d-flex justify-content-between">
                                      <h6 class="mt-5">${date} - ${month+1} - ${year}</h6>
                                      <h6 class="mt-5">${obj[day]}, ${timezone>0?'UTC +' + timezone:'UTC'+timezone} </h6>
                                  </div>
                                  <h6>lon : ${response.coord.lon} , lat : ${response.coord.lat}</h6>
                                  
                                </div>
                              </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="ms-3 mb-3 mt-5">
                            <div class="card bg-transparent border-0"  style="width: 100%;">
                                <div class="card-body">
                                  <h1 class="mb-3"><span class="text-primary">Weather</span> Details</h1>
                                  <h6 class="text-primary">Country - <span class="text-dark">${response.sys.country}</span></h6>
                                  <h6 class="text-primary">Humidity - <span class="text-dark">${response.main.humidity} %</span></h6>
                                  <h6 class="text-primary">Wind     - <span class="text-dark">${response.wind.speed} Km/hr</span></h6>
                                  <h6 class="text-primary">Pressure - <span class="text-dark">${response.main.pressure}</span></h6>
                                  


                                  
                                </div>
                              </div>
                        </div>
                    </div>
                    `
                    
            
        })
    }
    else
    {
        alert("enter the correct details")
    }
}