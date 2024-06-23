// Tiny Slider

var slider = tns({
    container: ".slider",
    items: 3,
    speed: 500,
    mouseDrag: true,
    autoplay: false,
    center: true,
    loop: false,
    nav: false,
    controlsContainer: "#custom-control",
    controlsPosition: "bottom",
  });
  
  // ScrollReveal JS
  
  ScrollReveal({ distance: "30px", easing: "ease-in" });
  
  ScrollReveal().reveal(".title", {
    delay: 300,
    origin: "top",
  });
  
  ScrollReveal().reveal(".paragraph", {
    delay: 800,
    origin: "top",
  });
  
  ScrollReveal().reveal("#form", {
    delay: 1200,
    origin: "bottom",
  });
  
  // Form
  
  const emailId = document.getElementById("email-id");
  const error = document.getElementById("error");
  const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  //! get the cursor position in the input
  emailId.addEventListener("keyup", (e) => {
    console.log("Caret at: ", e.target.selectionStart);
  });
  
  //! show whether the email address is valid or not with an outline
  emailId.addEventListener("input", (e) => {
    const emailInputValue = e.currentTarget.value;
    if (
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) !=
      true
    ) {
      emailId.style.outline = "2px dotted rgb(117, 152, 242)";
    } else {
      emailId.style.outline = "2px dotted rgb(118, 167, 63)";
    }
  });
  
  //! if email address is empty, remove the outline from the input
  function checkEmpty() {
    if (emailId.value == "") {
      emailId.style.outline = "none";
    }
  }
  
  //! submit the email address
  form.addEventListener("submit", (e) => {
    if (emailId.value.match(mailRegex)) {
      e.preventDefault();
      form.innerHTML = `<p style="font-size: 2rem; font-weight: 500; color: rgb(118, 167, 63);">Subscribed! 🎉</p>`;
       // setTimeout("location.reload(true);", 2000);
      setTimeout(() => { 
        window.location.href = "#card-container";
  }, 1700);
    } else {
      e.preventDefault();
      alert("Oops! Please check your email");
    }
  });
  
  //! typing animation for the placeholder
  let i = 0;
  let placeholder = "";
  const txt = "example@domain.com";
  const speed = 150;
  
  function type() {
    placeholder += txt.charAt(i);
    emailId.setAttribute("placeholder", placeholder);
    i++;
    setTimeout(type, speed);
  }
  
  type();


  //   js de footer

  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


