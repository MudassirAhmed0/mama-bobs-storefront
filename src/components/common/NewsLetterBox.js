"use client";
export const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center text-center lg:w-[50vw] w-full mx-auto">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now &amp; get 20% off
      </p>

      <p className="text-base lg:text-lg leading-normal text-gray-600 w-full lg:w-2/4">
        Subscribe to your newsletter to stay in the loop. Our newsletter is sent
        once in a week on every friday to get latest news and updates.{" "}
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex space-x-4 items-center justify-start shadow-lg py-1 pr-1 md:py-1 lg:py-1.5 md:pr-1 md:pl-10 lg:pl-4 lg:pr-2 border border-gray-500 lg:w-4/5 w-full mt-8"
      >
        <input
          className="focus:outline-none flex-1 ml-2 w-[50%] bg-transparent"
          type="text"
          placeholder="Enter your email"
          required
        />
        <button className="hover:bg-gray-900 px-6 py-3 md:px-6 md:py-3 lg:px-6 lg:py-4 bg-gray-800 text-white leading-none">
          Subscribe
        </button>
      </form>
    </div>
  );
};
