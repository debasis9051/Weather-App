    let latitude , longitude;
    let place=document.querySelector('.timezone')
    let temperature=document.querySelector('.number')
    let degree=document.querySelector('.degree')
    let description=document.querySelector('.description')
    let icon = document.querySelector('.icon')



    if (navigator.geolocation)
     {
            navigator.geolocation.getCurrentPosition((position)=>{
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log(latitude)
                const key ="6077b74f9d0c6631e66c10c0d2f529d2"
                const unit="metric"
                let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${key}`
                fetch(api)
                .then(response => {
                    return response.json()
                }).then((response) => {
                    console.log(response)
                    place.innerHTML=response.name
                    temperature.innerHTML=response.main.temp;
                    description.innerHTML = response.weather[0].description;
                    icon.src="http://openweathermap.org/img/wn/10d@4x.png"
                })
                
                })
    } 
    document.querySelector('.searchBtn').addEventListener('click',()=>{
        let city = document.querySelector('.search-text').value;
        console.log(city)
        const key ="6077b74f9d0c6631e66c10c0d2f529d2"
        const unit="metric"
        let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`
        fetch(api)
        .then(response => {
            return response.json()
        }).then((response) => {
            console.log(response)
            place.innerHTML=response.name
            temperature.innerHTML=response.main.temp;
            description.innerHTML = response.weather[0].description;
            icon.src="http://openweathermap.org/img/wn/10d@4x.png"
        })

    })
    
