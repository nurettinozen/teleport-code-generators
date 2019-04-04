function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

(() => {

  document.addEventListener("click", (ev) => {
  	if ( ev.target.closest(`[data-submit-email]`) ) {
    	const input = document.querySelector(`[data-email-input]`)
      
      if ( input.value && validateEmail(input.value) ) {
        alert(`clicked and ready to submit ${input.value}`)    
        window.location.replace('/thankyou')
      } else {
        window.reload()
      }
      
    }
	})
})()