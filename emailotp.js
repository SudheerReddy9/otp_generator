function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `<h2> Your OTP is${otp_val}`;

    Email.send({
    SecureToken : "76984367-5f5e-45cd-93c6-7e9bca0053d3",
    To : email.value,
    From : "sudheerreddypokala@gmail.com",
    Subject : "Email OTP using JavaScript",
    Body : emailbody,
    }).then(
      message =>{
        if (message === 'OK'){
            alert("OTP send to your email" + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById("otp_inp");
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',() => {
                if(otp_inp.value == otp_val){
                    alert("Email address verified....");
                } 
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );
}