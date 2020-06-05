import channels from "./channels.js";

let wrapper = document.querySelector(".swiper-wrapper");

channels.map((channel) => {
  wrapper.innerHTML = `
  ${wrapper.innerHTML} 
  <div class="swiper-slide">
    <picture><img src="${channel.url}"></img></picture> 
    <h3>${channel.name}</h3>
    <p>ao vivo</p> 
  </div>`;
});
