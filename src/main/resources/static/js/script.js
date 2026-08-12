// nav scroll
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("position-fixed");
        nav.style.top = "0";
        nav.style.width = "100%";
        nav.style.backgroundColor = "rgba(2,2,2,0.7)";
        nav.style.zIndex = "1000";
    } else {
        nav.classList.remove("position-fixed");
        nav.style.top = "";
        nav.style.width = "";
        nav.style.backgroundColor = "";
    }
});
// for footer change year
const currYear=document.getElementById("year");
let date= new Date();
let currentYear=date.getFullYear();
currYear.innerHTML=currentYear;

// text type
const roles = [
  "Java Developer",
  "Full Stack Developer",
  "Problem Solver"
];

const element = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < roles[roleIndex].length) {
    element.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(deleteText, 1500);
  }
}

function deleteText() {
  if (charIndex > 0) {
    element.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 500);
  }
}

typeText();

// form validation
function checkName()
{
  const cname=document.querySelector("#cont #cName");
  const msgname=document.querySelector("#cont #msgName");
   if (cname.value.trim() == "" || cname.value.length < 2) {
        cname.style.border = "1px solid red ";
        msgname.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>  invalid  user name !`;
        msgname.style.color = "red";
    }
    else {
        cname.style.border = "1px solid green ";
        msgname.innerHTML = `<i class="fa-solid fa-circle-check"></i>  valid user name`;
        msgname.style.color = "green";
    }


}

function checkEmail()
{
  const cemail=document.querySelector("#cont #cEmail");
    const msgemail=document.querySelector("#cont #msgemail");
    const emailpatt=/^[a-zA-Z_0-9#$&-]+@[a-z]+\.[a-z]{1,63}$/
    if(!emailpatt.test(cemail.value.toLowerCase()))
    {
      cemail.style.border = "1px solid red ";
        msgemail.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>  invalid  email adderess!`;
        msgemail.style.color = "red";
    }
    else{
       cemail.style.border = "1px solid green ";
        msgemail.innerHTML = `<i class="fa-solid fa-circle-check"></i>  valid  email adderess!`;
        msgemail.style.color = "green";
    }
}
function showConfirm()
{
window.confirm("Are you sure you want to submit ?")
}




