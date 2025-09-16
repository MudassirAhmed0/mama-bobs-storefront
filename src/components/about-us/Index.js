 
import LogoBackground from "../common/LogoBackground";
import { NewsLetterBox } from "../common/NewsLetterBox";
import WhyChooseUs from "../common/WhyChooseUs";

const AboutUsPage = () => {
  return (
    <div className="pt-48  pb-24 lg:pb-10 bg-black">
      <LogoBackground/>
      <div className="mx-auto  myContainer relative">
      <div className="lg:mt-10 mt-10 sm:mt-32 mb-20 flex flex-wrap justify-center items-center gap-8 lg:gap-12 w-full relative ">
        <img
          className="w-full lg:w-[450px] object-cover rounded-lg shadow-lg"
          src={"/images/home/gallery/5.jpg"}
          alt=""
        />
        <div className="lg:w-2/4 w-full">
          <h2 className="text60 text-white">about us</h2>
          <div className="flex flex-col justify-center gap-4 lg:gap-6 mt-4 lg:mt-6 text-white">
            <p>
              MAMA BOBS was forged in the crucible of the school of hard knocks,
              the college of getting kneed in the rattlers and the university of
              getting the crap kicked out of you! Our journey began with the
              realisation that the world has become too self-obsessed, and all
              consumed by perception and completely devoid of the power to laugh
              at ourselves. Political correctness and Woke culture need to be
              dismantled one joke at a time for the good of all! Since our
              inception we have worked tirelessly to provide a diverse
              collection of original quality apparel that adheres to our core
              principles of a lot funny, a little bit disgusting and very
              profound!
            </p>

            <div className="flex flex-col gap-2">
              <b className="text-white">Our Mission</b>
              <p>
                Our mission at MAMA BOBS is to bring “Good old fashioned bad
                taste back to the masses!” To return to a time and place where
                and when everyone wasn’t offended by everything and having a
                simple conversation wasn’t a political correctness minefield. We
                at MAMA BOBS are confident our brand personifies that new
                refreshing approach and attitude to life, where we can all stop
                taking ourselves so seriously and restore that age’s old
                philosophy of the ability to laugh at ourselves. We explode the
                tired Woke ideology with a passion for a new era of
                understanding, empathy and above all wholeheartedly embracing an
                open all-encompassing sense of humour!
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      {/* <NewsLetterBox /> */}

      </div>
    </div>
  );
};

export default AboutUsPage;
