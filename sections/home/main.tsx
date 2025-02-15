import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";
// TODO Have cloudinary domain in env.
export default function HomeMain() {
  return (
    <section className="w-full h-nav-bar-calc relative overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dx8zaoden/image/upload/v1739567798/s5xvcpymp6vjg6aezqop.png"
        alt="background"
        width={2560}
        height={1440}
        className="w-full h-full absolute top-0 right-0 min-w-[1300px]"
      />

      <Image
        src="https://res.cloudinary.com/dx8zaoden/image/upload/v1739569501/i9sjxcjmz55udfkpu8rp.png"
        alt="logo-helper"
        width={800}
        height={800}
        className="absolute -bottom-72 right-0 rotate-12 opacity-75"
      />

      <div className="w-full h-full relative flex flex-col lg:flex-row py-6 lg:py-12 px-8 lg:px-16 gap-6">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex justify-end">
          <div className="flex flex-col justify-center max-w-[900px]">
            <h1 className="font-leagotic text-white text-[60px] md:text-[100px] 2xl:text-[120px] leading-[55px] md:leading-[88px] 2xl:leading-[100px]">
              MAIN TEXT MESSAGE
              <br /> FOR SUPERNOVA ACADEMY PAGE
            </h1>
            <p className="font-mulish text-2xl md:text-3xl text-white leading-tight md:leading-normal">
              Small message for providing details
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex items-center">
          <div className="w-full h-full p-2 lg:p-6 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-5 max-w-[900px] max-h-[850px]">
            <Card
              isBlurred
              className="dark border-none bg-zinc-950/40 p-2 lg:p-5 flex flex-row lg:flex-col"
              shadow="sm"
            >
              <CardHeader className="font-leagotic text-4xl w-32 lg:w-auto">
                Course 1
              </CardHeader>

              <CardBody className="font-mulish text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, beatae! Perferendis expedita iste earum illum minima.
                </p>
              </CardBody>
            </Card>
            <Card
              isBlurred
              className="dark border-none bg-zinc-950/40 p-2 lg:p-5 flex flex-row lg:flex-col"
              shadow="sm"
            >
              <CardHeader className="font-leagotic text-4xl w-32 lg:w-auto">
                Course 2
              </CardHeader>

              <CardBody className="font-mulish text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, beatae! Perferendis expedita iste earum illum minima.
                </p>
              </CardBody>
            </Card>
            <Card
              isBlurred
              className="dark border-none bg-zinc-950/40 p-2 lg:p-5 lg:col-span-2 row-span-2 flex flex-row lg:flex-col"
              shadow="sm"
            >
              <CardHeader className="font-leagotic text-4xl w-32 lg:w-auto">
                Course 3
              </CardHeader>

              <CardBody className="font-mulish text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, beatae! Perferendis expedita iste earum illum minima,
                  obcaecati sint repellat magnam ipsa? Sunt ullam aut est ut
                  officia iure veritatis nesciunt?
                </p>
              </CardBody>
            </Card>
            {/* <Card
              isBlurred
              className="dark border-none bg-zinc-950/40 p-2 lg:p-5 flex flex-row lg:flex-col"
              shadow="sm"
            >
              <CardHeader className="font-leagotic text-4xl w-32 lg:w-auto">
                Course 4
              </CardHeader>

              <CardBody className="font-mulish text-lg">
                <p>Brief info about the course</p>
              </CardBody>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
}
