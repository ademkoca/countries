url = `https://restcountries.com/v2/all`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        // html="";
        let html = "";
        data.forEach(country => {
            // console.log(data);
            html += `
            <div id="${country.alpha3Code}" onclick="detail(this.id);" class="country border border-1 mx-4 my-3 rounded-2">
            <div class="flag"><img src="${country.flags.png}"></div>
            <div class="country-info px-4 py-2"><h2 class="py-3">${country.name}</h2>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
            </div>
            </div>
            `;

        });
        document.getElementById('countries').innerHTML = html;
    });

var selectedValue = "";
function filter(value) {
    selectedValue = "";
    if (value == 1) {
        selectedValue = "Africa";
    }
    if (value == 2) {
        selectedValue = "Americas";
    }
    if (value == 3) {
        selectedValue = "Asia";
    }
    if (value == 4) {
        selectedValue = "Europe";
    }
    if (value == 5) {
        selectedValue = "Oceania";
    }


    url = `https://restcountries.com/v2/continent/` + selectedValue;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach(country => {
                // console.log(data);
                html += `
            <div id="${country.alpha3Code}" onclick="detail(this.id);" class="country border border-1 mx-4 my-4 rounded-3">
            <div class="flag"><img src="${country.flags.png}"></div>
            <div class="country-info px-4 py-2"><h2 class="py-3">${country.name}</h2>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
            </div>
            </div>
            `;

            });
            document.getElementById('countries').innerHTML = html;
        });
}

const searchBar = document.getElementById('Search');
searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchCountry();
    }
});

function searchCountry() {
    url = `https://restcountries.com/v2/name/` + searchBar.value;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach(country => {
                // console.log(data);
                html += `<div id="${country.alpha3Code}" onclick="detail(this.id);" class="country border border-1 mx-4 my-3 rounded-2">
            <div class="flag"><img src="${country.flags.png}"></div>
            <div class="country-info px-4 py-2"><h2 class="py-3">${country.name}</h2>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
            </div>
            </div>
        
            `;

            });
            document.getElementById('countries').innerHTML = html;
        });

}

var bordersList = "";
function getCountryNameByCode(code) {
    let countryname = "";
    let url = `https://restcountries.com/v2/alpha/` + code;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.name);
            return data.name;
        });

}

function detail(id) {
    document.getElementById('details').classList.add('details');
    document.getElementById('btnBack').style = "display: block;";
    url = `https://restcountries.com/v2/alpha/` + id;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            // console.log(country.currencies[1].name);
                // console.log(country.languages.length);
                // console.log(country.languages.length);
                let currencies = "";
                let languages = "";
                let bordersdiv = "";
                // var borders = "";

                // console.log(country.currencies.length);
                // console.log(country.languages.length);
                if (data.currencies) {
                    for (let i = 0; i < data.currencies.length; i++) {
                        currencies += data.currencies[i].name + ", ";
                    }
                }
                else currencies = "-  ";

                if (data.languages) {
                    for (let i = 0; i < data.languages.length; i++) {
                        languages += data.languages[i].name + ", ";
                    }
                }
                else languages = "-  ";
let country_id="";
                if (data.borders) {
                    let countries = "";
                    for (let i = 0; i < data.borders.length; i++) {
                        country_id=data.borders[i];
                        switch (country_id) {
                            case "AFG": countries = "Afghanistan"; break;
                            case "ALA": countries = "Åland Islands"; break;
                            case "ALB": countries = "Albania"; break;
                            case "DZA": countries = "Algeria"; break;
                            case "ASM": countries = "American Samoa"; break;
                            case "AND": countries = "Andorra"; break;
                            case "AGO": countries = "Angola"; break;
                            case "AIA": countries = "Anguilla"; break;
                            case "ATA": countries = "Antarctica"; break;
                            case "ATG": countries = "Antigua and Barbuda"; break;
                            case "ARG": countries = "Argentina"; break;
                            case "ARM": countries = "Armenia"; break;
                            case "ABW": countries = "Aruba"; break;
                            case "AUS": countries = "Australia"; break;
                            case "AUT": countries = "Austria"; break;
                            case "AZE": countries = "Azerbaijan"; break;
                            case "BHS": countries = "Bahamas"; break;
                            case "BHR": countries = "Bahrain"; break;
                            case "BGD": countries = "Bangladesh"; break;
                            case "BRB": countries = "Barbados"; break;
                            case "BLR": countries = "Belarus"; break;
                            case "BEL": countries = "Belgium"; break;
                            case "BLZ": countries = "Belize"; break;
                            case "BEN": countries = "Benin"; break;
                            case "BMU": countries = "Bermuda"; break;
                            case "BTN": countries = "Bhutan"; break;
                            case "BOL": countries = "Bolivia (Plurinational State of)"; break;
                            case "BES": countries = "Bonaire, Sint Eustatius and Saba[d]"; break;
                            case "BIH": countries = "Bosnia and Herzegovina"; break;
                            case "BWA": countries = "Botswana"; break;
                            case "BVT": countries = "Bouvet Island"; break;
                            case "BRA": countries = "Brazil"; break;
                            case "IOT": countries = "British Indian Ocean Territory"; break;
                            case "BRN": countries = "Brunei Darussalam"; break;
                            case "BGR": countries = "Bulgaria"; break;
                            case "BFA": countries = "Burkina Faso"; break;
                            case "BDI": countries = "Burundi"; break;
                            case "CPV": countries = "Cabo Verde"; break;
                            case "KHM": countries = "Cambodia"; break;
                            case "CMR": countries = "Cameroon"; break;
                            case "CAN": countries = "Canada"; break;
                            case "CYM": countries = "Cayman Islands"; break;
                            case "CAF": countries = "Central African Republic"; break;
                            case "TCD": countries = "Chad"; break;
                            case "CHL": countries = "Chile"; break;
                            case "CHN": countries = "China"; break;
                            case "CXR": countries = "Christmas Island"; break;
                            case "CCK": countries = "Cocos (Keeling) Islands"; break;
                            case "COL": countries = "Colombia"; break;
                            case "COM": countries = "Comoros"; break;
                            case "COG": countries = "Congo"; break;
                            case "COD": countries = "Congo, Democratic Republic of the"; break;
                            case "COK": countries = "Cook Islands"; break;
                            case "CRI": countries = "Costa Rica"; break;
                            case "CIV": countries = "Côte d'Ivoire"; break;
                            case "HRV": countries = "Croatia"; break;
                            case "CUB": countries = "Cuba"; break;
                            case "CUW": countries = "Curaçao"; break;
                            case "CYP": countries = "Cyprus"; break;
                            case "CZE": countries = "Czechia"; break;
                            case "DNK": countries = "Denmark"; break;
                            case "DJI": countries = "Djibouti"; break;
                            case "DMA": countries = "Dominica"; break;
                            case "DOM": countries = "Dominican Republic"; break;
                            case "ECU": countries = "Ecuador"; break;
                            case "EGY": countries = "Egypt"; break;
                            case "SLV": countries = "El Salvador"; break;
                            case "GNQ": countries = "Equatorial Guinea"; break;
                            case "ERI": countries = "Eritrea"; break;
                            case "EST": countries = "Estonia"; break;
                            case "SWZ": countries = "Eswatini"; break;
                            case "ETH": countries = "Ethiopia"; break;
                            case "FLK": countries = "Falkland Islands (Malvinas)"; break;
                            case "FRO": countries = "Faroe Islands"; break;
                            case "FJI": countries = "Fiji"; break;
                            case "FIN": countries = "Finland"; break;
                            case "FRA": countries = "France"; break;
                            case "GUF": countries = "French Guiana"; break;
                            case "PYF": countries = "French Polynesia"; break;
                            case "ATF": countries = "French Southern Territories"; break;
                            case "GAB": countries = "Gabon"; break;
                            case "GMB": countries = "Gambia"; break;
                            case "GEO": countries = "Georgia"; break;
                            case "DEU": countries = "Germany"; break;
                            case "GHA": countries = "Ghana"; break;
                            case "GIB": countries = "Gibraltar"; break;
                            case "GRC": countries = "Greece"; break;
                            case "GRL": countries = "Greenland"; break;
                            case "GRD": countries = "Grenada"; break;
                            case "GLP": countries = "Guadeloupe"; break;
                            case "GUM": countries = "Guam"; break;
                            case "GTM": countries = "Guatemala"; break;
                            case "GGY": countries = "Guernsey"; break;
                            case "GIN": countries = "Guinea"; break;
                            case "GNB": countries = "Guinea-Bissau"; break;
                            case "GUY": countries = "Guyana"; break;
                            case "HTI": countries = "Haiti"; break;
                            case "HMD": countries = "Heard Island and McDonald Islands"; break;
                            case "VAT": countries = "Holy See"; break;
                            case "HND": countries = "Honduras"; break;
                            case "HKG": countries = "Hong Kong"; break;
                            case "HUN": countries = "Hungary"; break;
                            case "ISL": countries = "Iceland"; break;
                            case "IND": countries = "India"; break;
                            case "IDN": countries = "Indonesia"; break;
                            case "IRN": countries = "Iran (Islamic Republic of)"; break;
                            case "IRQ": countries = "Iraq"; break;
                            case "IRL": countries = "Ireland"; break;
                            case "IMN": countries = "Isle of Man"; break;
                            case "ISR": countries = "Israel"; break;
                            case "ITA": countries = "Italy"; break;
                            case "JAM": countries = "Jamaica"; break;
                            case "JPN": countries = "Japan"; break;
                            case "JEY": countries = "Jersey"; break;
                            case "JOR": countries = "Jordan"; break;
                            case "KAZ": countries = "Kazakhstan"; break;
                            case "KEN": countries = "Kenya"; break;
                            case "KIR": countries = "Kiribati"; break;
                            case "PRK": countries = "Korea (Democratic People's Republic of)"; break;
                            case "KOR": countries = "Korea (Republic of)"; break;
                            case "KWT": countries = "Kuwait"; break;
                            case "KGZ": countries = "Kyrgyzstan"; break;
                            case "LAO": countries = "Lao People's Democratic Republic"; break;
                            case "LVA": countries = "Latvia"; break;
                            case "LBN": countries = "Lebanon"; break;
                            case "LSO": countries = "Lesotho"; break;
                            case "LBR": countries = "Liberia"; break;
                            case "LBY": countries = "Libya"; break;
                            case "LIE": countries = "Liechtenstein"; break;
                            case "LTU": countries = "Lithuania"; break;
                            case "LUX": countries = "Luxembourg"; break;
                            case "MAC": countries = "Macao"; break;
                            case "MDG": countries = "Madagascar"; break;
                            case "MWI": countries = "Malawi"; break;
                            case "MYS": countries = "Malaysia"; break;
                            case "MDV": countries = "Maldives"; break;
                            case "MLI": countries = "Mali"; break;
                            case "MLT": countries = "Malta"; break;
                            case "MHL": countries = "Marshall Islands"; break;
                            case "MTQ": countries = "Martinique"; break;
                            case "MRT": countries = "Mauritania"; break;
                            case "MUS": countries = "Mauritius"; break;
                            case "MYT": countries = "Mayotte"; break;
                            case "MEX": countries = "Mexico"; break;
                            case "FSM": countries = "Micronesia (Federated States of)"; break;
                            case "MDA": countries = "Moldova, Republic of"; break;
                            case "MCO": countries = "Monaco"; break;
                            case "MNG": countries = "Mongolia"; break;
                            case "MNE": countries = "Montenegro"; break;
                            case "MSR": countries = "Montserrat"; break;
                            case "MAR": countries = "Morocco"; break;
                            case "MOZ": countries = "Mozambique"; break;
                            case "MMR": countries = "Myanmar"; break;
                            case "NAM": countries = "Namibia"; break;
                            case "NRU": countries = "Nauru"; break;
                            case "NPL": countries = "Nepal"; break;
                            case "NLD": countries = "Netherlands"; break;
                            case "NCL": countries = "New Caledonia"; break;
                            case "NZL": countries = "New Zealand"; break;
                            case "NIC": countries = "Nicaragua"; break;
                            case "NER": countries = "Niger"; break;
                            case "NGA": countries = "Nigeria"; break;
                            case "NIU": countries = "Niue"; break;
                            case "NFK": countries = "Norfolk Island"; break;
                            case "MKD": countries = "North Macedonia"; break;
                            case "MNP": countries = "Northern Mariana Islands"; break;
                            case "NOR": countries = "Norway"; break;
                            case "OMN": countries = "Oman"; break;
                            case "PAK": countries = "Pakistan"; break;
                            case "PLW": countries = "Palau"; break;
                            case "PSE": countries = "Palestine, State of"; break;
                            case "PAN": countries = "Panama"; break;
                            case "PNG": countries = "Papua New Guinea"; break;
                            case "PRY": countries = "Paraguay"; break;
                            case "PER": countries = "Peru"; break;
                            case "PHL": countries = "Philippines"; break;
                            case "PCN": countries = "Pitcairn"; break;
                            case "POL": countries = "Poland"; break;
                            case "PRT": countries = "Portugal"; break;
                            case "PRI": countries = "Puerto Rico"; break;
                            case "QAT": countries = "Qatar"; break;
                            case "REU": countries = "Réunion"; break;
                            case "ROU": countries = "Romania"; break;
                            case "RUS": countries = "Russian Federation"; break;
                            case "RWA": countries = "Rwanda"; break;
                            case "BLM": countries = "Saint Barthélemy"; break;
                            case "SHN": countries = "Saint Helena, Ascension and Tristan da Cunha[e]"; break;
                            case "KNA": countries = "Saint Kitts and Nevis"; break;
                            case "LCA": countries = "Saint Lucia"; break;
                            case "MAF": countries = "Saint Martin (French part)"; break;
                            case "SPM": countries = "Saint Pierre and Miquelon"; break;
                            case "VCT": countries = "Saint Vincent and the Grenadines"; break;
                            case "WSM": countries = "Samoa"; break;
                            case "SMR": countries = "San Marino"; break;
                            case "STP": countries = "Sao Tome and Principe"; break;
                            case "SAU": countries = "Saudi Arabia"; break;
                            case "SEN": countries = "Senegal"; break;
                            case "SRB": countries = "Serbia"; break;
                            case "SYC": countries = "Seychelles"; break;
                            case "SLE": countries = "Sierra Leone"; break;
                            case "SGP": countries = "Singapore"; break;
                            case "SXM": countries = "Sint Maarten (Dutch part)"; break;
                            case "SVK": countries = "Slovakia"; break;
                            case "SVN": countries = "Slovenia"; break;
                            case "SLB": countries = "Solomon Islands"; break;
                            case "SOM": countries = "Somalia"; break;
                            case "ZAF": countries = "South Africa"; break;
                            case "SGS": countries = "South Georgia and the South Sandwich Islands"; break;
                            case "SSD": countries = "South Sudan"; break;
                            case "ESP": countries = "Spain"; break;
                            case "LKA": countries = "Sri Lanka"; break;
                            case "SDN": countries = "Sudan"; break;
                            case "SUR": countries = "Suriname"; break;
                            case "SJM": countries = "Svalbard and Jan Mayen[f]"; break;
                            case "SWE": countries = "Sweden"; break;
                            case "CHE": countries = "Switzerland"; break;
                            case "SYR": countries = "Syrian Arab Republic"; break;
                            case "TWN": countries = "Taiwan, Province of China"; break;
                            case "TJK": countries = "Tajikistan"; break;
                            case "TZA": countries = "Tanzania, United Republic of"; break;
                            case "THA": countries = "Thailand"; break;
                            case "TLS": countries = "Timor-Leste"; break;
                            case "TGO": countries = "Togo"; break;
                            case "TKL": countries = "Tokelau"; break;
                            case "TON": countries = "Tonga"; break;
                            case "TTO": countries = "Trinidad and Tobago"; break;
                            case "TUN": countries = "Tunisia"; break;
                            case "TUR": countries = "Turkey"; break;
                            case "TKM": countries = "Turkmenistan"; break;
                            case "TCA": countries = "Turks and Caicos Islands"; break;
                            case "TUV": countries = "Tuvalu"; break;
                            case "UGA": countries = "Uganda"; break;
                            case "UKR": countries = "Ukraine"; break;
                            case "ARE": countries = "United Arab Emirates"; break;
                            case "GBR": countries = "United Kingdom of Great Britain and Northern Ireland"; break;
                            case "USA": countries = "United States of America"; break;
                            case "UMI": countries = "United States Minor Outlying Islands[h]"; break;
                            case "UNK": countries = "Republic of Kosovo"; break;
                            case "URY": countries = "Uruguay"; break;
                            case "UZB": countries = "Uzbekistan"; break;
                            case "VUT": countries = "Vanuatu"; break;
                            case "VEN": countries = "Venezuela (Bolivarian Republic of)"; break;
                            case "VNM": countries = "Viet Nam"; break;
                            case "VGB": countries = "Virgin Islands (British)"; break;
                            case "VIR": countries = "Virgin Islands (U.S.)"; break;
                            case "WLF": countries = "Wallis and Futuna"; break;
                            case "ESH": countries = "Western Sahara"; break;
                            case "YEM": countries = "Yemen"; break;
                            case "ZMB": countries = "Zambia"; break;
                            case "ZWE": countries = "Zimbabwe"; break;
                        }
                        bordersdiv += `<button id="${country_id}" type="button" class="btn btn-light border border-1 btn-sm mt-3 mb-3 mx-2" onclick="detail(this.id);">${countries}</button>`;

                    }
                } else bordersdiv = "-  "

                // console.log(data);
                html += `           
            <div class="detail-flag">
            <img src="${data.flags.png}">
            </div>
            <div class="detail-info">
            <h2 class="detail-info-left">${data.name}</h2>
            <p><strong>Native Name:</strong> ${data.nativeName}</p>
            <p><strong>Population:</strong> ${data.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>Sub Region:</strong> ${data.subregion}</p>
            <p><strong>Capital:</strong> ${data.capital}</p>
            </div>
            <div class="detail-info-right">
            <p><strong>Top Level Domain:</strong> ${data.topLevelDomain}</p>
            <p><strong>Currencies:</strong> ${currencies.substring(0, currencies.length - 2)}</p>
            <p><strong>Languages:</strong> ${languages.substring(0, languages.length - 2)}</p>
            <div><strong>Border Countries: </strong>${bordersdiv}</div>
            </div>
            `;
                // <div><strong>Border Countries: </strong>${borders}</div>


            
            document.getElementById('details').innerHTML = html;
        });
}

