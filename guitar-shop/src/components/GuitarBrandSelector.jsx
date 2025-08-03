import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MODELS_BY_BRANDS } from "../graphql/queries";

const GuitarBrandSelector = ({ onBrandClick }) => {
    return (
        <div className="brands-list">
            <div className="brand-card" onClick={() => onBrandClick({ id: "2", name: "Ibanez", logo: "/src/assets/Logos/IbanezLogo.png" })}>
                <img src="/src/assets/Logos/IbanezLogo.png" alt="Ibanez" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "5", name: "Martin", logo: "/src/assets/Logos/MartinGuitarLogo.png" })}>
                <img src="/src/assets/Logos/MartinGuitarLogo.png" alt="Martin" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "1", name: "Fender", logo: "/src/assets/Logos/FendesLogo.png" })}>
                <img src="/src/assets/Logos/FendesLogo.png" alt="Fender" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "3", name: "Gibson", logo: "/src/assets/Logos/GibsonLog.png" })}>
                <img src="/src/assets/Logos/GibsonLog.png" alt="Gibson" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "6", name: "Taylor", logo: "/src/assets/Logos/TaylorNewLogo.png" })}>
                <img src="/src/assets/Logos/TaylorNewLogo.png" alt="Taylor" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "7", name: "Gretsch", logo: "/src/assets/Logos/GretschLogo.png" })}>
                <img src="/src/assets/Logos/GretschLogo.png" alt="Gretsch" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "4", name: "Jakamine", logo: "/src/assets/Logos/JakamineLogo.png" })}>
                <img src="/src/assets/Logos/JakamineLogo.png" alt="Jakamine" />
            </div>
            <div className="brand-card" onClick={() => onBrandClick({ id: "8", name: "Seagull", logo: "/src/assets/Logos/SeagullLogo.png" })}>
                <img src="/src/assets/Logos/SeagullLogo.png" alt="Seagull" />
            </div>
        </div>
    );
};

export default GuitarBrandSelector;