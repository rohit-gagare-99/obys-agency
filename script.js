let t1 = gsap.timeline()
t1.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
})
t1.from("#line1-part1 ,.line h2", {
    opacity: 0,
    onStart: function () {
        let h5timer = document.querySelector("#line1-part1 h5")
        let count = 0;
        let interval = setInterval(function () {
            if (count == 100) {
                clearInterval(interval);
            } else {
                count++;
                h5timer.textContent = count;
            }

        }, 30)
    }
})
t1.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay :4,
})
t1.from("#page1",{
    delay :0.5,
    y:1600,
    ease:Power4,
    opacity : 0,
    duration: 0.5,
})
t1.to("#loader", {
   display : 'none',
})