/* eslint-disable react/function-component-definition */
'use client';

import React, { useState } from 'react';
import { Country, City, State } from 'country-state-city';
import Select from 'react-select';
import { useRouter } from 'next/navigation';
import { BsGlobeAmericas } from 'react-icons/bs';
import { GiModernCity } from 'react-icons/gi';

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
};

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    CountryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
};

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };
  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.latitude}/${option?.value.longitude}`,
    );
  };

  return (
    <div className='space-y-2'>
      {/* Country Picker  */}
      <div className='space-y-2'>
        <div className='flex items-center justify-start space-x-2 py-2 text-slate-300'>
          <BsGlobeAmericas className='h-5 w-5 text-slate-300' />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>
      {/* City Picker  */}
      {selectedCountry && (
        <div className='space-y-2'>
          <div className='flex items-center justify-start space-x-2 py-2 text-slate-300'>
            <GiModernCity className='h-5 w-5 text-slate-300' />
            <label htmlFor='country'>City</label>
          </div>
          <Select
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode,
            )?.map((city) => ({
              value: {
                latitude: city.latitude,
                longitude: city.longitude,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
}
export default CityPicker;
