angular.module('10digit.geo', ['ui.bootstrap.typeahead'])

/*
 * Used to config
 */
.factory('GeoConfig', function(){
    var config = {
        testMode: false,
        initialValues: {
            States: 'KY',
            Countries: 'US'
        }
    };

    return config;
})

/*
 * Used to interact generically with other factories
 */
.factory('GeoWorker', function(){
    return {
        names: function(factory){
            var entries = factory.entries();
            var list = [];
            for(var i=0;i<entries.length;i++){
                var obj = entries[i];
                list.push(obj.name);
            }
            return list;
        },
        getEventName: function(factory){
            return factory.selectionEvent;
        },
        getByIndex: function(factory, i){
            return factory.entries()[i];
        },
        setSelectedByName: function(factory, name){
            var entries = factory.entries();
            for(var i = 0;i<entries.length;i++){
                if(entries[i].name == name){
                    factory.changeSelected(i);
                    return entries[i]; 
                }
            }
        },
        setSelectedByCode: function(factory,code){
            var entries = factory.entries();
            for(var i = 0;i<entries.length;i++){
                if(entries[i].code == code){
                    factory.changeSelected(i);
                    return entries[i];
                }
            }
        }
    }
})

.factory('Countries', [ function(){
    var other = this;

    this.countries = [{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo(DPR)",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea},{Democratic People'S Republic of",code:"KP"},{name:"Korea},{Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia",code:"FM"},{name:"Moldova",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Authority",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}];

	var Countries = function ($scope) {
		var that = this;

		that.selected = undefined;

		that.interface =  {
			selected: that.selected,
			entries: function(){ return other.countries; },
			changeSelected: function(i){
				that.selected = other.countries[i];
				$scope.$parent.$broadcast('country_selected', other.countries[i]);
			}
		}

		return that.interface;
	};

    return {
	    instance: function($scope){
		    return new Countries($scope);
	    }
    };
}])

.factory('States', ['GeoWorker', function(GeoWorker){
    var other = this;

    this.countries_states = {
        US: [{code: 'AL', name: 'Alabama'},{code: 'AK', name: 'Alaska'},{code: 'AZ', name: 'Arizona'},{code: 'AR', name: 'Arkansas'},{code: 'CA', name: 'California'},{code: 'CO', name: 'Colorado'},{code: 'CT', name: 'Connecticut'},{code: 'DC', name: 'District of Columbia'},{code: 'DE', name: 'Delaware'},{code: 'FL', name: 'Florida'},{code: 'GA', name: 'Georgia'},{code: 'HI', name: 'Hawaii'},{code: 'ID', name: 'Idaho'},{code: 'IL', name: 'Illinois'},{code: 'IN', name: 'Indiana'},{code: 'IA', name: 'Iowa'},{code: 'KS', name: 'Kansas'},{code: 'KY', name: 'Kentucky'},{code: 'LA', name: 'Louisiana'},{code: 'ME', name: 'Maine'},{code: 'MD', name: 'Maryland'},{code: 'MA', name: 'Massachusetts'},{code: 'MI', name: 'Michigan'},{code: 'MN', name: 'Minnesota'},{code: 'MS', name: 'Mississippi'},{code: 'MO', name: 'Missouri'},{code: 'MT', name: 'Montana'},{code: 'NE', name: 'Nebraska'},{code: 'NV', name: 'Nevada'},{code: 'NH', name: 'New Hampshire'},{code: 'NJ', name: 'New Jersey'},{code: 'NM', name:'New Mexico'},{code: 'NY', name:'New York'},{code: 'ND', name: 'North Dakota'},{code: 'NC', name:'North Carolina'},{code: 'OH', name:'Ohio'},{code:'OK', name:'Oklahoma'},{code: 'OR', name:'Oregon'},{code: 'PA', name:'Pennsylvania'},{code: 'RI', name:'Rhode Island'},{code: 'SC', name:'South Carolina'},{code: 'SD', name:'South Dakota'},{code: 'TN', name:'Tennessee'},{code: 'TX', name:'Texas'},{code: 'UT', name:'Utah'},{code: 'VT', name:'Vermont'},{code: 'VA', name:'Virginia'},{code: 'WA', name:'Washington'},{code: 'WV', name:'West Virginia'},{code: 'WI', name:'Wisconsin'},{code: 'WY', name:'Wyoming'}],
        CA: [{name:"Alberta",code:"AB" },{name:"British Columbia",code:"BC" },{name:"Manitoba",  code:"MB" },{name:"New Brunswick",code:"NB" },{name:"Newfoundland",code:"NL" },{name:"Northwest Territories",code:"NT" },{name:"Nova Scotia",code:"NS" },{name:"Nunavut",code:"NU" },{name:"Ontario",code:"ON" },{name:"Prince Edward Island",code:"PE" },{name:"Quebec",code:"QC" },{name:"Saskatchewan",code:"SK" },{name:"Yukon Territory",code:"YT" }],
        MX: [{name:"Aguascalientes",code:"AG"},{name:"Baja California",code:"BN"},{name:"Baja California Sur",code:"BS"},{name:"Campeche",code:"CM"},{name:"Chiapas",code:"CP"},{name:"Chihuahua",code:"CH"},{name:"Coahuila",code:"CA"},{name:"Colima",code:"CL"},{name:"Distrito Federal",code:"DF"},{name:"Durango",code:"DU"},{name:"Guanajuato",code:"GJ"},{name:"Guerrero",code:"GR"},{name:"Hidalgo",code:"HI"},{name:"Jalisco",code:"JA"},{name:"M\u00e9xico",code:"MX"},{name:"Michoac\u00e1n",code:"MC"},{name:"Morelos",code:"MR"},{name:"Nayarit",code:"NA"},{name:"Nuevo Le\u00f3n",code:"NL"},{name:"Oaxaca",code:"OA"},{name:"Puebla",code:"PU"},{name:"Quer\u00e9taro",code:"QE"},{name:"Quintana Roo",code:"QR"},{name:"San Luis Potos\u00ed",code:"SL"},{name:"Sinaloa",code:"SI"},{name:"Sonora",code:"SO"},{name:"Tabasco",code:"TB"},{name:"Tamaulipas",code:"TM"},{name:"Tlaxcala",code:"TL"},{name:"Veracruz",code:"VE"},{name:"Yucat\u00e1n",code:"YU"},{name:"Zacatecas",code:"ZA"}]
    }

	var States = function($scope) {
		var that = this;

		this.selected = undefined;

	    this.entries = undefined;

		$scope.$parent.$on('country_selected', function(event, args){
			that.entries = other.countries_states[args.code];
			$scope.entries = GeoWorker.names(that.interface);
		});

		that.interface = {
			entries: function(){
				return (that.entries) ? that.entries : [];
			},
			changeSelected: function(i){
				that.selected = that.entries[i];
			}
		}

		return that.interface;
	}

    return {
	    instance: function($scope){
		    return new States($scope);
	    }
    };
}])

.controller('TypeaheadCtrl', ['$rootScope', '$scope', 'GeoWorker', 'GeoConfig', function($rootScope, $scope, GeoWorker, Config){
    $scope.selected = undefined;

	if(Config.testMode){
		$scope.$watch('factoryType', function(val){
			$scope.selected = Config.initialValues[$scope.factoryType];
		});
	}
    //Model should be an existing, defined model value.  Key is a key within that model value, ie service.old_carrier, 'country'
    $scope.setParentScope = function(){
	    var model, key, selected;
	    var ps = $scope.$parent;

	    if(arguments.length == 2){
		    key = arguments[0];
		    selected = arguments[1];
	    } else if(arguments.length == 3){
		    model = arguments[0];
			key = arguments[1];
		    selected = arguments[2];
		    var chain = model.split('.');
		    for(var i=0;i<chain.length;i++){
			    ps = ps[chain[i]];
		    }
	    }

	    var entry = GeoWorker.setSelectedByName($scope.factory, selected);
        ps[key] = entry.code;
    }
}])

.directive('geoTypeahead', ['GeoWorker', '$injector', '$compile', function(GeoWorker, $injector, $compile){
    var that = this;

    this.generic = GeoWorker;

    this.getInstance = function(attr, scope){
        return $injector.get(attr).instance(scope);
    }

    return {
        restrict:'E',
        controller:'TypeaheadCtrl',
        scope: {},
        compile: function(elm, attrs){
            var newEl = document.createElement('input');
            for(key in attrs){
                if(key.indexOf('$') != -1) continue;

                if(key != 'typeaheadRequired'){
                    newEl.setAttribute(key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attrs[key]);
                    continue;
                } 
                
                if(key == 'typeaheadRequired'){
                    newEl.setAttribute('required', true);
                }
            }

            newEl.setAttribute('type', "text");
            newEl.setAttribute('ng-model', 'selected');
            newEl.setAttribute('typeahead', 'entry for entry in entries | filter:$viewValue | limitTo:5');
            var tmp = document.createElement('div');
            tmp.appendChild(newEl);
            var template = tmp.innerHTML;
            elm.replaceWith(template);

            //Linker
            return function(scope, elm, attrs){
                $compile(elm)(scope);
                var instance = that.getInstance(attrs.typeaheadFactory, scope);
                scope.entries = that.generic.names(instance);
                scope.factory = instance;
	            scope.factoryType = attrs.typeaheadFactory;
            }
        }
    };
}])
