window.addEventListener('scroll',()=>{
        // Element.getBoundingClienRect()
        // https://www.digitalocean.com/community/tutorials/js-getboundingclientrect 
        let main1 = document.getElementById("main1");
        let contentPosition = main1.getBoundingClientRect().top;
        // console.log(contentPosition);
        let scrollY = window.scrollY /4;
        // console.log('Scroll Y:'+ scrollY);
        if(contentPosition < scrollY){ 
                main1.classList.add("active");
                //398 < 481
                // alert("Main Div Start");
                // console.log("content Position :=" +contentPosition);
                // console.log("ScrollY :=" +scrollY);
        } else {
                main1.classList.remove("active"); 
        }



      
        let main2 = document.getElementById("main2");
        let contentPosition2 = main2.getBoundingClientRect().top;
        let scrollY2 = window.scrollY;
        if(contentPosition2<scrollY2){ 
                main2.classList.add("active2");
        } else {
                main2.classList.remove("active2"); 
        }


});

