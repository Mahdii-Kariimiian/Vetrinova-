import velvetScreenshot1 from "../assets/screenshots/velvetpour-screenshot-1.png";
import velvetScreenshot2 from "../assets/screenshots/velvetpour-screenshot-2.png";
import velvetScreenshot3 from "../assets/screenshots/velvetpour-screenshot-3.png";
import velvetScreenshot4 from "../assets/screenshots/velvetpour-screenshot-4.png";
import demartiniDesktop1 from "../assets/screenshots/demartini-desktop1.png";
import demartiniDesktop2 from "../assets/screenshots/demartini-desktop2.png";
import demartiniDesktop3 from "../assets/screenshots/demartini-desktop3.png";
import demartiniDesktop4 from "../assets/screenshots/demartini-desktop4.png";
import demartiniMobile1 from "../assets/screenshots/demartini-mobile1.png";
import demartiniMobile2 from "../assets/screenshots/demartini-mobile2.png";
import aquiloneDesktop1 from "../assets/screenshots/aquiloneDesktop1.png";
import aquiloneDesktop2 from "../assets/screenshots/aquiloneDesktop2.png";
import aquiloneDesktop3 from "../assets/screenshots/aquiloneDesktop3.png";
import aquiloneMobile1 from "../assets/screenshots/aquiloneMobile1.png";
import aquiloneMobile2 from "../assets/screenshots/aquiloneMobile2.png";
import misterDesktop1 from "../assets/screenshots/misterspareparts-screenshot-desktop-1.png";
import misterDesktop2 from "../assets/screenshots/misterspareparts-screenshot-desktop-2.png";
import misterDesktop3 from "../assets/screenshots/misterspareparts-screenshot-desktop-3.png";
import misterDesktop4 from "../assets/screenshots/misterspareparts-screenshot-desktop-4.png";
import misterMobile1 from "../assets/screenshots/misterspareparts-screenshot-mobile-1.png";

/* ===================== PRICING ===================== */

const pricingData = [
    {
        titleKey: "pricing.basic.title",
        url: "basic",
        price: "$499",
        descriptionKeys: [
            "pricing.basic.d1",
            "pricing.basic.d2",
            "pricing.basic.d3",
            "pricing.basic.d4",
            "pricing.basic.d5",
        ],
    },
    {
        titleKey: "pricing.intermediate.title",
        url: "intermediate",
        price: "$899",
        descriptionKeys: [
            "pricing.intermediate.d1",
            "pricing.intermediate.d2",
            "pricing.intermediate.d3",
            "pricing.intermediate.d4",
            "pricing.intermediate.d5",
        ],
    },
    {
        titleKey: "pricing.advanced.title",
        url: "advanced",
        price: "Upon Agreement",
        descriptionKeys: [
            "pricing.advanced.d1",
            "pricing.advanced.d2",
            "pricing.advanced.d3",
            "pricing.advanced.d4",
            "pricing.advanced.d5",
        ],
    },
];

/* ===================== PROJECTS ===================== */

const projects = [
    {
        id: 1,
        name: "Mister Spare Parts",
        descriptionKey: "projects.mister.description",
        bulletKeys: [
            "projects.mister.b1",
            "projects.mister.b2",
            "projects.mister.b3",
            "projects.mister.b4",
            "projects.mister.b5",
        ],
        imagesType: {
            mobile: [misterMobile1],
            desktop: [
                misterDesktop2,
                misterDesktop1,
                misterDesktop3,
                misterDesktop4,
            ],
        },
        liveLink: "https://misterspareparts.com",
        password: "No Password needed",
    },
    {
        id: 2,
        name: "Velvet Pour",
        descriptionKey: "projects.velvet.description",
        bulletKeys: [
            "projects.velvet.b1",
            "projects.velvet.b2",
            "projects.velvet.b3",
            "projects.velvet.b4",
            "projects.velvet.b5",
        ],
        imagesType: {
            mobile: [velvetScreenshot1],
            desktop: [velvetScreenshot2, velvetScreenshot3, velvetScreenshot4],
        },
        liveLink: "https://velvet-pour.myshopify.com/",
        password: "velvetmitoni1",
    },
    {
        id: 3,
        name: "De Martini Chocolate",
        descriptionKey: "projects.demartini.description",
        bulletKeys: [
            "projects.demartini.b1",
            "projects.demartini.b2",
            "projects.demartini.b3",
            "projects.demartini.b4",
            "projects.demartini.b5",
        ],
        imagesType: {
            mobile: [demartiniMobile1, demartiniMobile2],
            desktop: [
                demartiniDesktop3,
                demartiniDesktop1,
                demartiniDesktop2,
                demartiniDesktop4,
            ],
        },
        liveLink: "https://demartinicioccolato.myshopify.com/",
        password: "demartinicioccolato",
    },
    {
        id: 4,
        name: "l'Aquilone",
        descriptionKey: "projects.aquilone.description",
        bulletKeys: [
            "projects.aquilone.b1",
            "projects.aquilone.b2",
            "projects.aquilone.b3",
            "projects.aquilone.b4",
            "projects.aquilone.b5",
        ],
        imagesType: {
            mobile: [aquiloneMobile1, aquiloneMobile2],
            desktop: [aquiloneDesktop1, aquiloneDesktop2, aquiloneDesktop3],
        },
        liveLink: "https://casabellavibe.myshopify.com/",
        password: "laquilone",
    },
];

export { projects, pricingData };
