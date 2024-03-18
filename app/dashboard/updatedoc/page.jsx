
import Banner from "./components/Banner";
import General from "./components/General";





export const metadata= {
  title: 'Profile | Horizon UI by Ories',
}

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        

       
      </div>
      {/* all project & ... */}

  
      
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General />
        </div>

   
      
    </div>
  );
};

export default ProfileOverview;
