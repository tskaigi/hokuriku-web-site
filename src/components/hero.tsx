"use client";

import Image from "next/image";

const Hero = () => {
  return (
    // <section
    //   id="hero"
    //   className="bg-primary relative min-h-[161vw] w-screen min-w-88 sm:min-h-[66vw]"
    // >
    //   <Image
    //     src="/kasumi-right.png"
    //     alt="HOKURIKU"
    //     width={875}
    //     height={657}
    //     className="absolute top-[12vw] right-0 w-[48vw] sm:top-0"
    //   />
    //   <Image
    //     src="/kasumi-left.png"
    //     alt="HOKURIKU"
    //     width={584}
    //     height={374}
    //     className="absolute top-[72vw] left-0 w-[30vw] sm:top-[45vw]"
    //   />
    //   <Image
    //     src="/logo-white.svg"
    //     alt="TSKaigi"
    //     width={126}
    //     height={41}
    //     className="absolute top-[6vw] left-1/2 w-[24vw] -translate-x-1/2 sm:top-[3vw] sm:w-[21vw]"
    //   />
    //   <div className="absolute top-[24vw] left-0 h-[67vw] w-full bg-[url('/HOKURIKU-v.png')] bg-contain bg-no-repeat sm:top-[12vw] sm:h-[18vw] sm:bg-[url('/HOKURIKU-h.png')]" />
    //   {/* <Image
    //     src="/HOKURIKU-v.png"
    //     alt="HOKURIKU"
    //     width={1024}
    //     height={682}
    //     className="absolute top-[24vw] left-0 w-[100vw]"
    //   /> */}

    //   <Image
    //     src="/daruma-left.png"
    //     alt="HOKURIKU"
    //     width={408}
    //     height={492}
    //     className="absolute top-[72vw] -left-[6vw] h-[40vw] w-auto sm:top-[21vw] sm:left-[6vw] sm:h-[30vw]"
    //   />
    //   <Image
    //     src="/daruma-center.png"
    //     alt="HOKURIKU"
    //     width={388}
    //     height={492}
    //     className="absolute top-[72vw] left-1/2 h-[40vw] w-auto -translate-x-1/2 sm:top-[21vw] sm:h-[30vw]"
    //   />
    //   <Image
    //     src="/daruma-right.png"
    //     alt="HOKURIKU"
    //     width={424}
    //     height={524}
    //     className="absolute top-[72vw] -right-[6vw] h-[40vw] w-auto sm:top-[21vw] sm:right-[6vw] sm:h-[30vw]"
    //   />
    //   <Image
    //     src="/20251123.png"
    //     alt="HOKURIKU"
    //     width={610}
    //     height={181}
    //     className="absolute top-[117vw] left-1/2 h-[27vw] w-auto -translate-x-1/2 sm:top-[45vw] sm:h-[12vw]"
    //   />
    //   <Image
    //     src="/Kanazawa.png"
    //     alt="HOKURIKU"
    //     width={407}
    //     height={100}
    //     className="absolute top-[144vw] left-1/2 h-[12vw] w-auto -translate-x-1/2 sm:top-[57vw] sm:h-[6vw]"
    //   />
    //   <Image
    //     src="/cover.png"
    //     alt=""
    //     width={1920}
    //     height={1080}
    //     className="absolute top-0 left-0 min-h-full min-w-full object-cover object-center mix-blend-color-burn"
    //   />
    // </section>
    // <section className="bg-primary h-screen max-h-[calc(1600vw/9)] min-h-[calc(900vw/16)] w-screen min-w-84">
    //   <div className="flex h-full flex-col items-center justify-between gap-3 py-6">
    //     <Image src="/logo-white.svg" alt="TSKaigi" width={126} height={41} className="w-[30vw]" />
    //     <div className="flex h-[90vw] w-full flex-col justify-end bg-[url('/HOKURIKU-v.png')] bg-contain bg-no-repeat sm:h-[39vw] sm:bg-[url('/HOKURIKU-h.png')]">
    //       <div className="flex w-full justify-center">
    //         <Image
    //           src="/daruma-left.png"
    //           alt="HOKURIKU"
    //           width={408}
    //           height={492}
    //           className="h-[40vw] w-auto -translate-x-[9vw] sm:h-[30vw]"
    //         />
    //         <Image
    //           src="/daruma-center.png"
    //           alt="HOKURIKU"
    //           width={388}
    //           height={492}
    //           className="h-[40vw] w-auto sm:h-[30vw]"
    //         />
    //         <Image
    //           src="/daruma-right.png"
    //           alt="HOKURIKU"
    //           width={424}
    //           height={524}
    //           className="h-[40vw] w-auto translate-x-[9vw] sm:h-[30vw]"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex w-full flex-col items-center">
    //       <Image
    //         src="/20251123.png"
    //         alt="HOKURIKU"
    //         width={610}
    //         height={181}
    //         className="h-[27vw] max-h-30 w-auto sm:h-[12vw]"
    //       />
    //       <Image
    //         src="/Kanazawa.png"
    //         alt="HOKURIKU"
    //         width={407}
    //         height={100}
    //         className="h-[12vw] max-h-12 w-auto sm:h-[6vw]"
    //       />
    //     </div>
    //   </div>
    //   <Image
    //     src="/cover.png"
    //     alt=""
    //     width={1920}
    //     height={1080}
    //     className="absolute top-0 left-0 min-h-full min-w-full object-cover object-center mix-blend-color-burn"
    //   />
    // </section>
    <section
      id="hero"
      className="bg-primary relative h-screen max-h-[calc(1600vw/9)] min-h-[calc(900vw/16)] w-screen min-w-84"
    >
      <Image
        src="/kasumi-right.png"
        alt="HOKURIKU"
        width={875}
        height={657}
        className="absolute top-[9vh] right-0 w-[48vw] sm:top-[12vh]"
      />
      <Image
        src="/kasumi-left.png"
        alt="HOKURIKU"
        width={584}
        height={374}
        className="absolute top-[36vh] left-0 w-[30vw] sm:top-[60vh]"
      />
      <Image
        src="/logo-white.svg"
        alt="TSKaigi"
        width={126}
        height={41}
        className="absolute top-[6vw] left-[50vw] w-[30vw] -translate-x-1/2 sm:top-[3vw] sm:w-[21vw]"
      />
      <div className="absolute top-[15vh] left-0 h-[67vw] w-full bg-[url('/HOKURIKU-v.png')] bg-contain bg-no-repeat sm:top-[max(24vh,12vw)] sm:h-[18vw] sm:bg-[url('/HOKURIKU-h.png')]">
        <Image
          src="/daruma-left.png"
          alt="HOKURIKU"
          width={408}
          height={492}
          className="absolute top-[51vw] -left-[6vw] h-[40vw] w-auto sm:top-[9vw] sm:left-[6vw] sm:h-[30vw]"
        />
        <Image
          src="/daruma-center.png"
          alt="HOKURIKU"
          width={388}
          height={492}
          className="absolute top-[51vw] left-1/2 h-[40vw] w-auto -translate-x-1/2 sm:top-[9vw] sm:h-[30vw]"
        />
        <Image
          src="/daruma-right.png"
          alt="HOKURIKU"
          width={424}
          height={524}
          className="absolute top-[51vw] -right-[6vw] h-[40vw] w-auto sm:top-[9vw] sm:right-[6vw] sm:h-[30vw]"
        />
      </div>
      <Image
        src="/20251123.png"
        alt="HOKURIKU"
        width={610}
        height={181}
        className="absolute bottom-[18vw] left-1/2 h-[27vw] max-h-42 w-auto -translate-x-1/2 sm:bottom-[9vw] sm:h-[12vw] sm:max-h-36"
      />
      <Image
        src="/Kanazawa.png"
        alt="HOKURIKU"
        width={407}
        height={100}
        className="absolute bottom-[6vw] left-1/2 h-[12vw] max-h-18 w-auto -translate-x-1/2 sm:bottom-[3vw] sm:h-[6vw]"
      />
      <Image
        src="/cover.png"
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover object-center mix-blend-color-burn"
      />
    </section>
  );
};

export default Hero;
