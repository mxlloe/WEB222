(function() {
    /**
     * Helper object for working with countries data and extracting information.
     * See countries-data.js for format of the countries data set.
     */
    let countries = {
      /**
       * Store all countries from countries-data.js on `countries.all` for convenience.
       */
      all: window.countriesData,
  
      /**
       * Return an array of all countries, with the Name Object replaced by the
       * appropriate translation, or English if not specified (or unknown).  For
       * example, when language="English", you would process the record for Canada into:
       *
       * {
       *     code: "CA",
       *     continent: "Americas",
       *     areaInKm2: 9984670,
       *     population: 36624199,
       *     capital: "Ottawa",
       *     name: "Canada"
       * }
       *
       * Supported languages include:
       *
       * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
       *
       * Uses `countries.all` as the underlying array of countries to be processed.
       *
       * HINT: make sure you don't overwrite the original name object.
       */
      getByLanguage: function(language) {
        language = Object.keys(countries.all[0].name).includes(language) ? language : 'English';
        return countries.all.map(function(elem) {
          let languageDisplay = {};
          languageDisplay.code = elem.code;
          languageDisplay.continent = elem.continent;
          languageDisplay.areaInKm2 = elem.areaInKm2;
          languageDisplay.population = elem.population;
          languageDisplay.capital = elem.capital;
          languageDisplay.name = elem.name[language];
          return languageDisplay;
        });
      },
  
      /**
       * Return an array of countries with a population greater than or equal to
       * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
       * otherwise allow any number greater than `minPopulation`.
       *
       * Uses getByLanguage('English') to get English names for countries.
       *
       * @param {Number} minPopulation - (Required) minimum population value
       * @param {Number} maxPopulation - (Optional) maximum population value
       */
      getByPopulation: function(minPopulation, maxPopulation) {
        return countries.getByLanguage('English').filter(function(country) {
          let showPop = {};
          maxPopulation === undefined
            ? (showPop = country.population >= minPopulation)
            : (showPop = country.population >= minPopulation && country.population <= maxPopulation);
          return showPop;
        });
      },
  
      /**
       * Return an array of countries for the given `continent` with an area
       * greater than or equal to the given `area` in square KM.
       *
       * Uses getByLanguage('English') to get English names for countries.
       *
       * @param {String} continent - (Required) name of the continent (e.g., Europe)
       * @param {Number} minArea - (Required) minimum number of KM2 area
       */
      getByAreaAndContinent: function(continent, minArea) {
        return countries.getByLanguage('English').filter(function(country) {
          return country.continent === continent && country.areaInKm2 >= minArea;
        });
      }
    };
  
    /**
     * Helper functions for building table elements.
     */
    let tableHelper = {
      /**
       * Clears (any) existing rows from the #table-rows table body
       */
      clearTable: function() {
        let remove = document.querySelector('#table-rows');
        remove.innerHTML = '';
      },
  
      /**
       * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
       * element with its `src` property set the appropriate flag image URL
       * for this code, e.g., src="flags/ca.png" for Canada.
       */
      countryCodeToFlagImg: function(countryCode) {
        let img = document.createElement('img');
        //img.setAttribute = ("width", "40px");
        //img.setAttribute = ("height", "30px");
        img.width = 40;
        img.height = 20;
        img.src = `flags/${countryCode}.png`;
  
        img.onerror = function() {
          this.parentNode.removeChild(this);
        };
        return img;
      },
  
      /**
       * Takes a single `country` object and converts it to a <tr> with <td>
       * child elements for every column in the row.  The row should match the
       * expected format of the table (i.e., flag, code, country, continent, etc).
       * Return the new <tr>...</tr> row.
       *
       * Use the DOM methods document.createElement(), element.appendChild(), etc
       * to create your <tr> row.
       */
      countryToRow: function(country) {
        function td(contents) {
          let td = document.createElement('td');
          let tdtext = document.createTextNode(contents);
          td.appendChild(tdtext);
  
          return td;
        }
        let trow = document.createElement('tr');
        let tdata = document.createElement('td');
        trow.appendChild(tdata);
        let img = tableHelper.countryCodeToFlagImg(country.code);
        tdata.appendChild(img);
        trow.appendChild(td(country.code));
        trow.appendChild(td(country.name));
        trow.appendChild(td(country.continent));
        trow.appendChild(td(country.areaInKm2));
        trow.appendChild(td(country.population));
        trow.appendChild(td(country.capital));
        return trow;
      },
  
      /**
       * Takes an array of `country` Objects named `countries`, and passes each
       * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
       * rows are then appended to the #table-rows table body element.  Make sure
       * you use `tableHelper.clear()` to remove any existing rows before you do this.
       */
      countriesToTable: function(countries) {
        tableHelper.clearTable();
        countries.forEach(function(country) {
          document.querySelector('#table-rows').appendChild(tableHelper.countryToRow(country));
        });
      }
    };
  
    /**
     * Register click handlers for every menu item in the page.  Use the `countries`
     * and `tableHelper` Objects, and their associated methods, to update/populate
     * the #table-rows table body with the appropriate set of countries, based on the
     * menu item clicked.
     *
     * Make sure you also update the #subtitle heading to properly reflect what
     * is in the table after you populate it. For example: "List of Countries
     * and Dependencies - Population between 1 and 2 million" or "List of Countries
     * and Dependencies - All countries in Asia" etc.
     */
    function setupMenuHandlers() {
      // Language
  
      document.querySelector('#menu_english').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in English';
  
        tableHelper.countriesToTable(countries.getByLanguage('English'));
      });
  
      document.querySelector('#menu_arabic').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in Arabic (عربى)';
  
        tableHelper.countriesToTable(countries.getByLanguage('Arabic'));
      });
  
      document.querySelector('#menu_chinese').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in Chinese (中文)';
  
        tableHelper.countriesToTable(countries.getByLanguage('Chinese'));
      });
  
      document.querySelector('#menu_french').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in French (français)';
  
        tableHelper.countriesToTable(countries.getByLanguage('French'));
      });
  
      document.querySelector('#menu_hindi').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in Hindi (हिंदी)';
  
        tableHelper.countriesToTable(countries.getByLanguage('Hindi'));
      });
  
      document.querySelector('#menu_korean').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in Korean (한국어)';
  
        tableHelper.countriesToTable(countries.getByLanguage('Korean'));
      });
      document.querySelector('#menu_japanese').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in Japanese (日本語)';
  
        tableHelper.countriesToTable(countries.getByLanguage('Japanese'));
      });
  
      document.querySelector('#menu_russian').addEventListener('click', function() {
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Country/Dep. Name in Russian (русский)';
  
        tableHelper.countriesToTable(countries.getByLanguage('Russian'));
      });
  
      // population
      document.querySelector('#menu_population_100_000_000m').addEventListener('click', function() {
        tableHelper.countriesToTable(countries.getByPopulation(100000000));
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Population greater than 10 million';
      });
  
      document.querySelector('#menu_population_1m_2m').addEventListener('click', function() {
        tableHelper.countriesToTable(countries.getByPopulation(10000000, 20000000));
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Population between 1 and 2 millon';
      });
  
      //continent
  
      document.querySelector('#menu_americas_1mkm').addEventListener('click', function() {
        tableHelper.countriesToTable(countries.getByAreaAndContinent('Americas', 1000000));
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - Population greater than 1 millon Km2 in Americas';
      });
  
      document.querySelector('#menu_asia_all').addEventListener('click', function() {
        tableHelper.countriesToTable(countries.getByAreaAndContinent('Asia', 0));
        document.querySelector('#subtitle').innerHTML =
          'List of Countries and Dependencies - All countries in Asia';
      });
    }
    // When the page loads, setup all event handlers by calling setup function.
    window.onload = setupMenuHandlers;
  })();
  