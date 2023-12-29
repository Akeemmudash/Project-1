import BreadCrumbs from "../components/BreadCrumbs";
import MainImage from "../assets/AboutUs.png";
import AwardIcon from "../assets/award-icon.svg";
export default function About() {
  return (
    <section className="md:container mx-auto">
      <BreadCrumbs />

      <h2 className="lg:text-4xl text-3xl  text-center font-semibold mt-10 mb-20">
        ABOUT US
      </h2>
      <div className="flex gap-9 flex-col-reverse lg:flex-row lg:gap-0  bg-slate-50">
        <div className="about-us-img bg-slate-200 flex-1">
          <img src={MainImage} alt="Model Picture" />
        </div>
        <div className="about-us-text flex-1 flex justify-center items-center">
          <div className="p-7">
            <h3 className="text-3xl font-semibold text-center mb-6">
              ABOUT BYC AFRICA
            </h3>
            <p className="text-xl lg:px-14">
              We are the sole distributor of BYC products in Africa. We import
              BYC products from Korea and distribute them to African countries
              through Onamik Holdings Limited.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-20 mt-14">
          WHAT OUR RECORD SAYS
        </h2>
        <div className="flex flex-wrap justify-between gap-y-10">
          <AwardCard year="1990">
            Gold Prize for the Best Listed Firm awarded by Daesin Economy
            Research Institute.
          </AwardCard>
          <AwardCard year="1993">
            Selected as representaive enterprise of Korea for successful
            stategies on globalization of Korean brands by Korean Traders
            Association.
          </AwardCard>
          <AwardCard year="1997">
            BYC' selected as the most preferred brand for underwear by the
            Federation of Korean Women Economists..
          </AwardCard>
          <AwardCard year="1990">
            Selected as the official commercializer of underwear for 1988 France
            Worldcup.
          </AwardCard>
          <AwardCard year="1999">
            The Prize for Export of Original Brands awarded as recommended by
            the Korean Assoiatioon of Textile Industries
          </AwardCard>
          <AwardCard year="2001">
            "The 10th Prize for the Enterprise of Economical Justice" by the
            enterprise Assessment commission.
          </AwardCard>
          <AwardCard year="2006">
            The Prize for Export of Original Brands awarded as recommended by
            the Korean Assoiatioon of Textile Industries
          </AwardCard>
          <AwardCard year="2006">
            Selected by korea management association as no.1 in brand influence
            among the men&apos;s underwear companies
          </AwardCard>
          <AwardCard year="2011">
            Selected as the Best Korean Enterprise of 1992 by Korean Management
            Association.
          </AwardCard>
        </div>
      </div>
    </section>
  );
}

function AwardCard({ year, children, className }) {
  return (
    <div
      className={`award-card flex  rounded-md justify-center items-center w-full xs:w-[calc(200px+13vw)] max-w-[430px] bg-slate-100 h-[336px] py-10 px-6 hover:shadow-md transition-all hover:bg-red-50   duration-150 ${className}`}
    >
      <div className="h-full flex justify-between flex-col">
        <div className="award-icon">
          <img className="award-icon-img" src={AwardIcon} />
        </div>
        <p className="first-letter:capitalize">{children}</p>
        <div className="year font-semibold text-xl text-red-600">
          <span>Year {year}</span>
        </div>
      </div>
    </div>
  );
}
