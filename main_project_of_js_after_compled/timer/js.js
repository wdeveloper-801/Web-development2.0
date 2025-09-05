let clock_show = document.querySelector("#display_time")
let start_btn = document.querySelector("#start")
let stop_btn = document.querySelector("#stop")
let reset_btn = document.querySelector("#reset")
let seconds = 0;
let timer;
function update_display() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    clock_show.innerHTML = `${hrs}:${mins}:${secs}`;
}
start_btn.addEventListener("click", function () {
    console.log("start");
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            update_display();
        }, 1000);

    }
    
});
stop_btn.addEventListener("click", function () {
    console.log("stop");
    clearInterval(timer);
    timer = null;
});
reset_btn.addEventListener("click", function () {
    console.log("reset");
    stop();
    seconds = 0;
    update_display();
})
