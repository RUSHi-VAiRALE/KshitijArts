import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="self-stretch flex flex-row items-start justify-between pt-1.5 px-[532px] pb-[11px] relative gap-[20px] text-left text-sm text-dimgray-200 font-muli-14-regular mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[266px] mq825:pr-[266px] mq825:box-border mq1425:flex-wrap">
        <div className="absolute my-0 mx-[!important] h-full w-full top-[0.2px] right-[0px] bottom-[-0.2px] left-[0px] bg-whitesmoke" />
        <div className="h-[17px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border">
          <div className="flex-1 relative leading-[21px] z-[1]">FAQs</div>
        </div>
        <div className="relative leading-[21px] inline-block w-[116px] h-[17.6px] shrink-0 z-[1]">{`Orders & Return`}</div>
        <div className="h-[17px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
          <div className="flex-1 relative leading-[21px] z-[1]">Account</div>
        </div>
        <div className="relative leading-[21px] inline-block h-[17.6px] z-[1]">
          About Us
        </div>
      </footer>
    )
}

export default Footer;