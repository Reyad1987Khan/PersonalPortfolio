function setCookie (cname,cvalue,exdays){
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires  = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(username){
    let display = document.getElementById('demo');
    display.innerHTML = document.cookie;
    // console.log(document.cookie);
    // alert("Get Cookie");
}


// #109 JavaScript Bangla Tutorial | JS Cookies | BOM Tutorial 9 mp4 
// https://www.youtube.com/watch?v=Umr8ezHiVvc 