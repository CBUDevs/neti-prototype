angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('Item', function($http, $q) {
  var items = [{
        content: ["Fentanyl is one of the most potent opioid drugs used in medical treatment. It is typically prescribed or administered to patients who are terminally ill, stricken with cancer, or in severe pain.", "Fentanyl is distributed on the street as a substitute for heroin, oxycodone, and as an adulterant to other narcotics. The physical appearance of samples on the street varies from a white powder to brown tar solid and has also been distributed as tablets (fake oxycodone).", "The average dose of fentanyl by IV is 125 microgram (roughly 2 grains of salt). The average lethal dose of fentanyl is 2 mg. In addition to fentanyl, over 30 analogs of fentanyl have been developed and pose a potential for abuse. Many of the fentanyl analogs are more potent than fentanyl itself.","Fentanyl is a fine powder that can easily go airborne creating an inhalation hazard. Fentanyl is also easily absorbed across the skin. The amount of drug to traverse the skin depends on thickness (area of the body), previous injuries (cuts, scraps, etc.), body temperature and other factors. In general 46 — 66% of the dose may be absorbed due to contact with the drug.", "Protocols for handling all narcotics should include the use of nitrile gloves and limit the potential for skin contact or for the drug to go airborne. A minimal amount of sample should be used for field testing and if possible field tested with an instrument utilizing Raman, FTIR, or GC/MS technology.", "The standard color test for fentanyl is the marquis test which will turn orange for fentanyl. Note - the orange color may be masked by other colors if other narcotics are present. The use of handheld Raman and FTIR devices are useful but do have limitations. Most instruments have fentanyl and acetyl fentanyl in their libraries. If the sample contains one of the other analogs of fentanyl, the instrument may not identify the drug, thus giving an inconclusive result. In addition, the fentanyl may be masked in the sample by the abundance of other drugs or compounds that may be present." 
,"The onset and severity of the symptoms will depend on the dose, but the symptoms may occur within minutes of the exposure. These symptoms include respiratory distress, coughing, sedation, nausea, vomiting, disorientation, cardiac arrest. If any of these symptoms develop — SEEK MEDICAL ATTENTION IMMEDIATELY.",  
"Naloxone reverses the effects of fentanyl and other opiate exposures and should be administered immediately upon exposure. Naloxone has a short half-life (roughly 1 hour), thus multiple doses may need to be given as long as the drug is still in the system. Naloxone is available as an injectable or as a nasal spray, which is a less intrusive means of administration. Should a situation arise where there is a high risk for fentanyl exposure, individuals may consider administering naloxone prior to the start of the operation (noting the naloxone will only be in the system for roughly one hour).", "To reduce the risk of exposure to fentanyl, law enforcement personnel should consider incorporating the following protocols when practical. Firsly, use nitrite gloves when handling narcotic evidence. Reduce the chance of the sample going airborne. Analyze sample with a Raman or FTIR field instrument through original packaging it po Leave evidence in original packaging and use small sample sizes for color tests. Leave evidence in original packaging and submit to laboratory using the gross weight (weight of sample and packaging). Washing the hands and any exposed areas of skin with soap and water after handling narcotics. Write a warning on evidence packing that 'sample(s) may contain fentanyl'. Launder any clothing that may be potentially be contaminated"
,  "As the popularity of fentanyl as a street drug grows, the risk of exposure to law enforcement personnel is greatly increased. Precautions to avoid skin contact and inhalation of any street level narcotics need to be enforced for law enforcement personnel at all levels. Agencies should consider all options for the quick access and availability of naloxone in the event of an exposure incident.Certain scenes or conditions may require a hazmat or clandestine laboratory response team to mitigate. Agencies should consider training all law enforcement personnel who handle narcotics in the hazards of fentanyl and the signs and symptoms of exposure. Training is a critical element in reducing the risk of injury."],
        headerString: ["What is Fentanyl?", "Fentanyl on the Street", "Toxicity", "Hazards to Law Enforcement", "Law Enforcement Precautions", "Field Tests for Law Enforcement", "Fentanyl Exposure Signs and Symptoms", "Naloxone (Narcan)", "Recommended Protocols for Law Enforcement", "Officer Safety"],
        name: 'Fentanyl',
        uid: "0",
      }, {
        content: ["Marijuana is a drug", "is wasted marijuana" ],
        headerString: ["What is Marijuana?", "Marijuana on the Street"],
        name: 'Marijuana',   
        uid: "1",
      }, {
        content: ["COCAAIIINE"],
        headerString: ["COOOOOOIKEIIIN"],
        uid: "2",
        name: 'Cocaine',
      }, {
        content: ["Shoot it up, brah"],
        headerString: ["HEERRROOOOIINNE"],
        uid: "3",
        name: 'Heroine',
  }];
    
  var url = "http://eosx.net/DEA/inc/call.php?callback=JSON_CALLBACK";

  // Default array will show if unable to connect to the JSON database.
  var promise = $http.jsonp(url).success(function(data){
      items = angular.fromJson(data);
  }).error(function(data) {
      console.log("Couldn't connect with the server. Using")
  });

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemUid) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].uid === itemUid) {
          return items[i];
        }
      }
      return null;
    }
  };
});
