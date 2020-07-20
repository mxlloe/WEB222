// All you JavaScript code for assignment 4 should be in this file

(function() {

  let countries = {

    all: window.country,

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

// Table Elements
  let tableHelper = {

    clearTable: function() {
      let remove = document.querySelector('#table-rows');
      remove.innerHTML = '';
    },

    countryCodeToFlagImg: function(countryCode) {
      let img = document.createElement('img');
      img.width = 40;
      img.height = 20;
      img.src = `flags/${countryCode}.png`;

      img.onerror = function() {
        this.parentNode.removeChild(this);
      };
      return img;
    },

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

    countriesToTable: function(countries) {
      tableHelper.clearTable();
      countries.forEach(function(country) {
        document.querySelector('#table-rows').appendChild(tableHelper.countryToRow(country));
      });
    }
  };

// Setup Languages for table for which ever user pressses
  function setupMenuHandlers() {
  

    document.querySelector('#menu_1').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies';

      tableHelper.countriesToTable(countries.getByLanguage('English'));
    });

    document.querySelector('#menu_41').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in English';

      tableHelper.countriesToTable(countries.getByLanguage('English'));
    });

    document.querySelector('#menu_42').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Arabic (عربى)';

      tableHelper.countriesToTable(countries.getByLanguage('Arabic'));
    });

    document.querySelector('#menu_43').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Chinese (中文)';

      tableHelper.countriesToTable(countries.getByLanguage('Chinese'));
    });

    document.querySelector('#menu_44').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in French (français)';

      tableHelper.countriesToTable(countries.getByLanguage('French'));
    });

    document.querySelector('#menu_45').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Hindi (हिंदी)';

      tableHelper.countriesToTable(countries.getByLanguage('Hindi'));
    });

    document.querySelector('#menu_46').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Korean (한국어)';

      tableHelper.countriesToTable(countries.getByLanguage('Korean'));
    });
    document.querySelector('#menu_47').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Japanese (日本語)';

      tableHelper.countriesToTable(countries.getByLanguage('Japanese'));
    });

    document.querySelector('#menu_48').addEventListener('click', function() {
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Russian (русский)';

      tableHelper.countriesToTable(countries.getByLanguage('Russian'));
    });

    // population limits
    document.querySelector('#menu_21').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByPopulation(100000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Population greater than 10 million';
    });

    document.querySelector('#menu_22').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByPopulation(10000000, 20000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Population between 1 and 2 millon';
    });

    // continent

    document.querySelector('#menu_31').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Americas', 1000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Population greater than 1 millon Km2 in Americas';
    });

    document.querySelector('#menu_32').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Asia', 0));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - All countries in Asia';
    });
  }


  window.onload = setupMenuHandlers;
})();
