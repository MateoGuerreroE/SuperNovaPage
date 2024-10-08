import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function HomeMain() {
  return (
    <section className="w-full h-[calc(100vh-64px)] relative">
      <div className="h-full w-full relative overflow-hidden">
        <Image
          src="/visuals/11.svg"
          alt="visual11"
          width={2000}
          height={2000}
          className="max-w-[2500px] rotate-90 absolute -bottom-96 -left-[960px] min-w-[2000px] z-20"
        />
        <Image
          src="/visuals/1.svg"
          alt="visual1"
          width={2000}
          height={2000}
          className="absolute max-w-[2500px] min-w-[2000px] -top-[500px] -right-[1124px]"
        />
        <Image
          src="/visuals/7.svg"
          alt="visual1"
          width={2000}
          height={2000}
          className="absolute max-w-[2500px] min-w-[2000px] -top-[0px] -right-[800px] hidden md:block opacity-50"
        />
        <Image
          src="/visuals/2.svg"
          alt="visual2"
          width={2000}
          height={2000}
          className="absolute rotate-180 max-w-[2500px] min-w-[2000px] -top-[0px] -right-[900px] hidden md:block"
        />
        <Image
          src="/visuals/3.svg"
          alt="visual3"
          width={2000}
          height={2000}
          className="absolute max-w-[2500px] min-w-[2000px] top-[300px] -right-[800px] hidden md:block -rotate-90 z-10"
        />
        <Image
          src="/visuals/5.svg"
          alt="visual3"
          width={2000}
          height={2000}
          className="absolute max-w-[2500px] min-w-[2000px] top-[550px] -right-[700px] hidden md:block rotate-90"
        />
        <Image
          src="/visuals/6.svg"
          alt="visual1"
          width={2000}
          height={2000}
          className="absolute max-w-[2500px] min-w-[2000px] -top-[600px] -right-[700px] hidden xl:block rotate-45"
        />
        <Card
          className="absolute bottom-[150px] right-[200px] 3xl:right-[500px] w-[700px] h-[500px] bg-black/20 p-5 hidden 2xl:block"
          isBlurred
        >
          <CardBody className="text-white font-mulish flex items-center justify-center">
            Card with info, SS or video
          </CardBody>
        </Card>
        <div className="grid grid-cols-2 grid-rows-2 gap-0 w-[180px] 2xl:w-[300px] absolute left-[200px] bottom-[150px]">
          <Image
            src="/visuals/dot-grid.svg"
            alt="dotgrid"
            width={500}
            height={500}
            className="scale-125"
          />
          <Image
            src="/visuals/dot-grid.svg"
            alt="dotgrid"
            width={500}
            height={500}
            className="scale-125"
          />
          <Image
            src="/visuals/dot-grid.svg"
            alt="dotgrid"
            width={500}
            height={500}
            className="scale-125"
          />
          <Image
            src="/visuals/dot-grid.svg"
            alt="dotgrid"
            width={500}
            height={500}
            className="scale-125"
          />
        </div>
      </div>
      <div className="absolute top-[50px] md:top-[150px] w-full flex flex-col items-center">
        <div className="w-[70%]">
          <h1 className="font-leagotic  text-white text-[60px] md:text-[100px] 2xl:text-[120px] w-[100%] md:w-[80%] xl:w-[70%] leading-tight md:leading-[88px] 2xl:leading-[100px]">
            MAIN TEXT MESSAGE
            <br /> FOR SUPERNOVA ACADEMY PAGE
          </h1>
          <p className="font-mulish text-2xl md:text-3xl text-white leading-normal  w-[100%] md:w-[80%] xl:w-[70%]">
            Small message for providing details
          </p>
        </div>
      </div>
    </section>
  );
}
