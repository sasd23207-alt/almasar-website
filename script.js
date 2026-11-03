const menuButton=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");if(menuButton&&nav){menuButton.addEventListener("click",()=>{const opened=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(opened));menuButton.textContent=opened?"×":"☰"});nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰"}))}const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
const revealTargets=document.querySelectorAll(".section-heading,.intro-grid,.product-card,.service-card,.showcase-grid,.contact-panel");
if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.12});
 revealTargets.forEach((el,index)=>{el.classList.add("reveal-on-scroll");el.style.setProperty("--reveal-delay",Math.min(index%3,2)*90+"ms");observer.observe(el)});
}
