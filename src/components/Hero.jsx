import { HiArrowNarrowRight } from "react-icons/hi";
import { useLanguage } from "../i18n/LanguageContext";

import hero from "../assets/webdeveloper-hero.png";

export default function HeroSection({ isDarkMode }) {
    const { t } = useLanguage();

    console.log(isDarkMode);
    return (
        <section
            className={`relative w-full min-h-min flex items-center justify-between max-lg:flex-col max-lg:justify-center py-10 lg:px-10 px-4 mt-7 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-800"
            }`}
        >
            <div className="w-1/2 max-lg:w-full max-lg:text-center lg:my-20">
                <h2 className="text-2xl mb-4">{t("hero.subtitle")}</h2>
                <h1 className="text-2xl lg:text-4xl font-bold mb-10">
                    {t("hero.title")}
                </h1>
                <div
                    className={`text-lg max-lg:text-md lg:max-w-[700px] space-y-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    <p>
                        {t("hero.p1")}
                    </p>
                    <p>
                       {t("hero.p2")}
                    </p>
                    <p>
                        {t("hero.p3")}
                    </p>
                </div>
            </div>

            <div className="lg:w-1/2 max-lg:mt-20">
                <img
                    src={hero}
                    alt="lap top image"
                    className="w-full h-full object-cover max-w-xl"
                />
            </div>
        </section>
    );
}
