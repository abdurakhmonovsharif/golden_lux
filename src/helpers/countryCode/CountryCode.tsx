import countryData from './phoneCodes.json';
import './css/CountryCode.css'
import React, { useState } from 'react';
interface CountryCodeProps {
    onChange: (code: string) => void,
    label: string,
}
interface CountryType {
    name: string;
    dial_code: string;
    code: string;
}
const CountryCode: React.FC<CountryCodeProps> = ({ onChange, label }) => {
    const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(countryData[0]);

    const handleInputChange = (code: string) => {
        onChange(code);
        setSelectedCountry(countryData.find((el) => el.dial_code == code) || null);
    }
    return (
        <div className={`select-box border  rounded-tl-lg rounded-tr-lg`}>
            <div className="select-box__current pb-2.5 px-3" tabIndex={1}>
                <span className='text-xs tracking-[0.24px] font-normal'>{label}</span>
                {countryData.map((option, index) => (
                    <div className="select-box__value" key={index}>
                        <input
                            className="select-box__input"
                            type="radio"
                            id={index.toString()}
                            value={selectedCountry?.dial_code}
                            name={option.name}
                            onChange={() => handleInputChange(option.dial_code)}
                            checked={selectedCountry?.code === option.code}
                        />
                        <p className="select-box__input-text">
                            {option.name} ({option.dial_code})
                        </p>
                    </div>
                ))}
                <img
                    className="select-box__icon"
                    src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                    alt="Arrow Icon"
                    aria-hidden="true"
                />
            </div>
            <ul className="select-box__list">
                {countryData.map((option, index) => (
                    <li key={index}>
                        <label className="select-box__option text-g_text_color" htmlFor={index.toString()} aria-hidden>
                            {option.name} ({option.dial_code})
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default CountryCode