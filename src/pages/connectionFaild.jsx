import React from 'react';
// import "../metrimoniul//assets/css/fonts/connection.css"

const connectionFaild = () => {

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
function ajax() {
  let xhr = new XMLHttpRequest(); 
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); 
  xhr.onload = () => {
   
    if (xhr.status == 200 && xhr.status < 300) {
      toast.classList.remove("offline");
      title.innerText = "You're online now";
      subTitle.innerText = "Hurray! Internet is connected.";
      wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
      closeIcon.onclick = () => {
        
        wrapper.classList.add("hide");
      };
      setTimeout(() => {
        //hide the toast notification automatically after 5 seconds
        wrapper.classList.add("hide");
      }, 5000);
    } else {
      offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
    }
  };
  xhr.onerror = () => {
    offline(); ////calling offline function if the passed url is not correct or returning 404 or other error
  };
  xhr.send(); //sending get request to the passed url
}

function offline() {
  //function for offline
  wrapper.classList.remove("hide");
  toast.classList.add("offline");
  title.innerText = "You're offline now";
  subTitle.innerText = "Opps! Internet is disconnected.";
  wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
}

setInterval(() => {
  //this setInterval function call ajax frequently after 100ms
  ajax();
}, 100);
};

  return (
    <div>
        <div class="wrapper">
  <div class="toast">
    <div class="content">
      <div class="icon"><i class="uil uil-wifi"></i></div>
      <div class="details">
        <span>You're online now</span>
        <p>Hurray! Internet is connected.</p>
      </div>
    </div>
    <div class="close-icon"><i class="uil uil-times"></i></div>
  </div>
</div>
      
    </div>
  );
}

export default connectionFaild;
