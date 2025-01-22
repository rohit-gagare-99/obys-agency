// loader 

function locoScroll(){


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
function loadingAnimation(){
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
    // opacity: 0,
    duration: 4,
    delay :0,
})
t1.to("#loader", {
    opacity: 0,
  
})
t1.from("#page1",{
    delay :0.1,
    y:1600,
    ease:Power4,
    opacity : 0,
    duration: 0.5,
})
t1.from("#nav",{
    y:-100,
    opacity : 0,
    // duration: 0.5,
})
t1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    stagger : 0.2,
    opacity : 1,
    y:130,
})
t1.to("#loader", {
   display : 'none',
})
// t1.from(".hero h1",{
//     opacity : 1,
//     y:100,
// })
 } 
var video = document.querySelector(".video-container");
var inVideo = document.querySelector(".video-container video");
var crsr = document.querySelector("#vid-crsr")
function customCursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            top:dets.y,
            left:dets.x,
        })
       
    })
    Shery.makeMagnet("#nav-part2 h4", {
  
    });
}
 document.querySelector(".video-container").addEventListener("mouseenter",function(){
    video.addEventListener("mousemove", function(dets) {
        gsap.to("#crsr",{
            opacity:0,
        })

        gsap.to("#vid-crsr",{
            top:dets.y - 400 ,
            left:dets.x -500,
            delay:0.2,
            ease: "back.out",
    
        })
    });

    let flag = 0;
    
    inVideo.addEventListener("click",function(){
        if(flag == 0){
            inVideo.play();
            inVideo.style.opacity = 1;
            document.querySelector("#vid-crsr").innerHTML=`<i class="ri-pause-fill"></i>`
            flag++;

        }else{
            inVideo.pause();
            inVideo.style.opacity = 0;
            document.querySelector("#vid-crsr").innerHTML=`<i class="ri-play-fill"></i>`
            flag =0;
            crsr.style.scale = 2;
            
        }


    })
    gsap.to("#vid-crsr",{
       scale:0.5,

    })
    
    })



document.querySelector(".video-container").addEventListener("mouseleave",function(){
    
        gsap.to("#crsr",{
            opacity:1,
            display:initial,
        }) 
        gsap.to("#vid-crsr",{
            scale:2,
     
         })

   
})


function imgEffect(){
    Shery.imageEffect(".images", {
        style: 4,

        config:{"uColor":{"value":false},"uSpeed":{"value":0.14,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":17.35},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241262650760896},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey: true,
      });
      
}
var flag = document.querySelector("#flag");
var hoverFlag = document.querySelector("#hero3");
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })   
})
hoverFlag.addEventListener("mouseenter",function(){
    flag.style.opacity = 1;
})
hoverFlag.addEventListener("mouseleave",function(){
    flag.style.opacity = 0;
})



// $('.tlt').textillate({ in: { effect: 'rollIn' } });


//// problem aala ahe edit and make it propper .... !!!!!!!!!!!
document.querySelector("#abtMe").addEventListener("mouseenter",function(){
    // abtMe.style.fontFamily='silk serif';
    gsap.to("#abtMe",{
        duration:0.2,
        fontFamily:'silk serif',
        onStart: function(){
            $('#abtMe').textillate({ in:{ effect: 'rollout' }});  
        }
    })

})
document.querySelector("#abtMe").addEventListener("mouseleave",function(){
    // abtMe.style.fontFamily='silk serif';
    gsap.to("#abtMe",{
        duration:0.2,
        fontFamily:'serif',
        onStart: function(){
            $('#abtMe').textillate({ out:{ effect: 'rollout' }});  
        }
    })

})


imgEffect();
customCursor();
locoScroll();
loadingAnimation();





