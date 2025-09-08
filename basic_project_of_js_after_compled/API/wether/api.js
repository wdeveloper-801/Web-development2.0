let weather = async () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", async () => {
        let name_of_city = document.querySelector("#enter").value;
        if (!name_of_city) {
            alert("Please enter a city name");
            return;
        }
        try {
            let URL = await fetch(`https://api.weatherapi.com/v1/current.json?key=97cfdd31dcf6408f99b142509250309&q=${name_of_city}&aqi=yes`)
            if (!URL.ok) {
                throw new Error("City not found")
            }
            let data = await URL.json();
            console.log(data);
            document.querySelector("#city").innerText = `city : ${data.location.name}`
            document.querySelector("#country").innerText = `country : ${data.location.country}`
            document.querySelector("#date").innerText = `time : ${data.location.localtime}`
            document.querySelector("#temp").innerText = `temp : ${data.current.temp_c}`
        } catch (err) {
            console.log(`try another city err`);
            alert("City not found. Please try again.");
        }
    })
}
weather();