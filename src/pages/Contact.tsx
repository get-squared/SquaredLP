export const Contact = () => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
      <h1 className="font-bold text-center text-white lg:text-h1 sm:text-h3 text-h4 mb-14">Request a demo and pricing</h1>
      <form className="flex flex-col xl:w-1/2 md:w-3/4 w-full justify-between mb-24 lg:p-10 p-6 rounded-[32px] bg-gradient-light1 max-[1350px]:justify-center mx-auto">
        <label htmlFor="fullName" className="mb-2 text-caption1 font-inter text-grey-300">Full name</label>
        <input type="text" id="fullName" placeholder="Type name" className="p-4 rounded-lg text-[#6B7280] mb-7" />
        <label htmlFor="workingEmail" className="mb-2 text-caption1 font-inter text-grey-300">Work email</label>
        <input type="text" id="workingEmail" placeholder="name@example.com" className="p-4 rounded-lg text-[#6B7280] mb-7" />
        <button className="self-end w-32 px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
          Submit
        </button>
      </form>
    </section>
  );
};