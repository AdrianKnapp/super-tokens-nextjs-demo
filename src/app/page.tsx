import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="flex flex-col gap-12 items-center">
        <div className="text-center items-center flex flex-col gap-4">
          <div className="px-6 py-3 w-40 lg:w-56 bg-[#1f1f1f] rounded-sm">
            <Image
              src="https://supertokens.com/img/logoWithNameLight.svg"
              alt="Super Tokens Logo"
              width={197}
              height={30}
            />
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold">NextJS Demo</h1>
          <p className="text-lg text-slate-500">
            Get started with Super Tokens
          </p>
        </div>
        <div className="flex items-center flex-col gap-4">
          <p>
            You are: <span className="font-bold text-red-500">logged out</span>
          </p>
          <button className="bg-slate-300 hover:bg-slate-200 duration-200 w-fit px-4 py-2 rounded-sm">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
