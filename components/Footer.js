import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex bg-gray-300">
        <div className="container  ">
          <h1 className="main_content">USEFUL LINKS</h1>
          <p className="lists">Home</p>
          <p className="lists">About Us</p>
          <p className="lists">Service</p>
          <p className="lists">Blog</p>
          <p className="lists">Contact Us</p>
        </div>
        <div className="container  ">
          <h1 className="main_content">OUR SERVICES</h1>
          <p className="lists">A</p>
          <p className="lists">B</p>
        </div>
        <div className="container  ">
          <h1 className="main_content">CONTACT US</h1>

          <p className="lists">Email : AxByCz_888@xzy.com</p>
          <p className="lists">Phone : 0987654321</p>
        </div>
        <div className="container  ">
          <h1 className="main_content">STAY IN TOUCH</h1>
          <p className="lists">INSTAGRAM</p>
          <p className="lists">WHATSAPP</p>
          <p className="lists">EMAIL</p>
        </div>
      </div>
      <div className="flex justify-center bg-orange-300">
        {" "}
        © Copyright <span className="mx-2 font-semibold"> ZEESH. </span> All Rights
        Reserved{" "}
      </div>
    </div>
  );
}

export default Footer;
