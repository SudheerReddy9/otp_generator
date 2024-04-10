// function sendOTP(){
//     const email = document.getElementById('email');
//     const otpverify = document.getElementsByClassName('otpverify')[0];

//     let otp_val = Math.floor(Math.random() * 10000);

//     let emailbody = `<h2> Your OTP is${otp_val}</h2>`;

//     Email.send({
//     SecureToken : "76984367-5f5e-45cd-93c6-7e9bca0053d3",
//     To : email.value,
//     From : "sudheerreddypokala@gmail.com",
//     Subject : "Email OTP using JavaScript",
//     Body : emailbody,
    
//     }).then(
//       message =>{
//         if (message === 'OK'){
//             alert("OTP send to your email" + email.value);

//             otpverify.style.display = "flex";
//             const otp_inp = document.getElementById("otp_inp");
//             const otp_btn = document.getElementById('otp-btn');

//             otp_btn.addEventListener('click',() => {
//                 if(otp_inp.value == otp_val){
//                     alert("Email address verified....");
//                     console.log("________EMAIl_________")
//                     console.log(email)
    
//                 } 
//                 else{
//                     alert("Invalid OTP");
//                 }
//             })
//         }
//       }
//     );
// }

        // Attach event listener outside the sendOTP function
        document.getElementById('otp-btn').addEventListener('click', () => {
            const otp_inp = document.getElementById("otp-inp");
            const otp_val = localStorage.getItem('otp_val');
            if (otp_inp.value == otp_val) {
                alert("Email address verified....");
                console.log("________EMAIL_________");
                console.log(document.getElementById('email').value);
            } else {
                alert("Invalid OTP");
            }
        });

        function sendOTP() {
            const email = document.getElementById('email').value;
            const otpverify = document.getElementsByClassName('otpverify')[0];

            const otp_val = Math.floor(Math.random() * 10000);
            localStorage.setItem('otp_val', otp_val);

            const emailbody = `<h2>Your OTP is ${otp_val}</h2>`;

            Email.send({
                SecureToken: "76984367-5f5e-45cd-93c6-7e9bca0053d3",
                To: email,
                From: "sudheerreddypokala@gmail.com",
                Subject: "Email OTP using JavaScript",
                Body: emailbody,
            }).then((message) => {
                if (message === 'OK') {
                    alert("OTP sent to your email: " + email);
                    otpverify.style.display = "flex";
                }
            });
        }
