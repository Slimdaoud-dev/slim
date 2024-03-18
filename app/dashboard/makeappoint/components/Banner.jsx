import Card from "../../../../components/card/Card";

const Banner = () => {
  return (
    <Card className={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover bg-[url('/img/profile/banner.png')]" >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={'/img/avatars/avatar11.png'} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Patient Name
        </h4>
        <p className="text-base font-normal text-gray-600">Patient Address</p>
      </div>

      {/* Post followers */}
     
    </Card>
  );
};

export default Banner;
