import { useEffect } from "react";
import image from "../assets/webdevelopment-about.png";
import { useLanguage } from "../i18n/LanguageContext";

const About = ({ isDarkMode }) => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`w-full mx-auto py-10 lg:px-10 px-4 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            {/* About Vetrinova */}
            <div className="text-center">
                <h1
                    className={`text-4xl font-bold mb-12 ${
                        isDarkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                >
                    {t("about.title")}
                </h1>

                <div className="flex flex-col lg:flex-row-reverse gap-24 justify-between items-center lg:mx-32">
                    <img
                        className="w-full max-w-96 lg:w-1/3 lg:min-w-64"
                        src={image}
                        alt="E-commerce development illustration"
                    />

                    <div
                        className={`text-lg leading-relaxed text-start lg:w-2/3 space-y-5 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        <p>
                           {t("about.p1")}
                        </p>

                        <p>
                           {t("about.p2")}
                        </p>

                        <p>
                           {t("about.p3")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Vetrinova */}
            <div className="mt-32 text-center lg:px-32">
                <h2
                    className={`text-3xl font-bold mb-12 ${
                        isDarkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                >
                    {t("about.whyTitle")}
                </h2>

                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">
                            {t("about.why1Title")}
                        </h3>
                        <p>
                            {t("about.why1Desc")}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">
                             {t("about.why2Title")}
                        </h3>
                        <p>
                           {t("about.why2Desc")}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">
                             {t("about.why3Title")}
                        </h3>
                        <p>
                            {t("about.why3Desc")}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">
                            {t("about.why4Title")}
                        </h3>
                        <p>
                            {t("about.why4Desc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
