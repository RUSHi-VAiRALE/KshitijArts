import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="self-stretch flex flex-row items-center justify-center pt-1.5 pb-[11px] relative gap-[20px] text-sm text-dimgray-200 font-muli-14-regular mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[266px] mq825:pr-[266px] mq825:box-border mq1425:flex-wrap">
          <div className="z-[1]">FAQs</div>
        <div className="z-[1]">Orders & Return</div>
          <div className="z-[1]">Account</div>
        <div className="z-[1]">
          About Us
        </div>
      </footer>
    )
}

export default Footer;