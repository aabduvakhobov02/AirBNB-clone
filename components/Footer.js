function Footer() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-10 font-normal px-32 py-14 bg-gray-100 text-gray-800">
      <div className="text-lg space-y-4 text-gray-800 pb-10 border-b-[1px] xl:border-0">
        <h5 className="font-bold">ABOUT</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 space-y-4 lg:space-y-0 xl:space-y-4 ">
          <div className="space-y-4">
            <p>How Airbnb works</p>
            <p>Investors</p>
            <p>HotelTonight</p>
            <p>Careers</p>
          </div>
          <div className="space-y-4">
            <p>Newsroom</p>
            <p>Airbnb Plus</p>
            <p>Airbnb for Work</p>
            <p>Founders' Letter</p>
          </div>
          <div className="space-y-4">
            <p>Airbnb 2021</p>
            <p>Airbnb Luxe</p>
            <p>Made possible by Hosts</p>
          </div>
        </div>
      </div>
      <div className="text-lg space-y-4 text-gray-800 pb-10 border-b-[1px] xl:border-0">
        <h5 className="font-bold">COMMUNITY</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 space-y-4 lg:space-y-0 xl:space-y-4 ">
          <div className="space-y-4">
            <p>Diversity & Belonging</p>
            <p>Airbnb Associates</p>
            <p>Gift cards</p>
          </div>
          <div className="space-y-4">
            <p>Against Discrimination</p>
            <p>Host Afghan refugees</p>
            <p>Airbnb.org</p>
          </div>
          <div className="space-y-4">
            <p>Accessibility</p>
            <p>Guest Referrals</p>
          </div>
        </div>
      </div>
      <div className="text-lg space-y-4 text-gray-800 pb-10 border-b-[1px] xl:border-0">
        <h5 className="font-bold">HOST</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 space-y-4 lg:space-y-0 xl:space-y-4 ">
          <div className="space-y-4">
            <p>Host your home</p>
            <p>Responsible hosting</p>
          </div>
          <div className="space-y-4">
            <p>Host an Online Experince</p>
            <p>Resource Center</p>
          </div>
          <div className="space-y-4">
            <p>Host an Experince</p>
            <p>Community Center</p>
          </div>
        </div>
      </div>
      <div className="text-lg space-y-4 text-gray-800 pb-10 border-b-[1px] xl:border-0">
        <h5 className="font-bold">SUPPORT</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 space-y-4 lg:space-y-0 xl:space-y-4 ">
          <div className="space-y-4">
            <p>Our COVID-19 Response</p>
            <p>Neighbourhood Support</p>
          </div>
          <div className="space-y-4">
            <p>Help Center</p>
            <p>Trust & Safety</p>
          </div>
          <p>Cancellation options</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
