// weatherapi
// https://api.weatherapi.com/v1/current.json?key=97cfdd31dcf6408f99b142509250309&q=London&aqi=yes


let weather = async () => {
    let btn = document.querySelector("#btn")
    btn.addEventListener("click", async () => {
        let name_of_city = document.querySelector("#enter").value;
        if (!name_of_city) {
            alert("Please enter a city name!");
            return;
        }
        try {
            let done = await fetch(`https://api.weatherapi.com/v1/current.json?key=97cfdd31dcf6408f99b142509250309&q=${name_of_city}&aqi=yes`);
            if (!done.ok) {
                throw new Error("City not found!");
            }
            let done2 = await done.json();
            console.log(done2);
            document.querySelector("#city").innerText = `city : ${done2.location.name}`
            document.querySelector("#date").innerText = `date : ${done2.location.localtime}`
            document.querySelector("#temp").innerText = `temp : ${done2.current.temp_c}`
        } catch (error) {
            console.error(error);
            alert("Could not fetch weather. Try another city.");
        }
    })
}
weather();