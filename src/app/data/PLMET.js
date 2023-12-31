const PLMETschema ={
    schema: [
        {
          "tytuł": "dc:title", 
          "tytuł odmienny": "terms:alternative",
          "twórca": "dc:creator",
          "współtwórca": "dc:contributor",
          "temat": "dc:subject",
          "tagi": "plmet:userTag",
          "zakres": "dc:coverage",
          "zakres przestrzenny": "dcterms:spatial",
          "zakres czasowy": "dcterms:temporal",
          "opis": "dc:description",
          "abstrakt": "terms:abstract",
          "spis treści": "terms:tableOfContents",
          "miejsce wydania": "plmet:placeOfPublication",
          "sponsor digitalizacji": "plmet:digitalSponsor",
          "stopień naukowy": "etdms:degree",
          "tytuł naukowy": "etdms:name",
          "stopień studiów": "etdms:level",
          "dyscyplina naukowa": "etdms:discipline",
          "instytucja tytyułąjąca": "etdms:grantor",
          "wydawca": "dc:publisher",
          "data": "dc:date",
          "data utworzenia": "terms:created",
          "data złożenia": "terms:submitted",
          "data akceptacji": "terms:dateAccepted",
          "data wydania": "terms:issued",
          "data praw autorskich": "terms:dateCopyrighted",
          "data modificacji": "terms:modified",
          "okres dostępności": "terms:available",
          "okres ważności": "terms:valid",
          "typ": "dc:type",
          "format": "dc:format",
          "rozmiar": "dc:extent",
          "medium": "terms:medium",
          "identyfikator": "dc:identifier",
          "sygnatura": "plmet:callNumber",
          "cytata": "terms:bibliographicCitation",
          "źródło": "dc:source",
          "język": "dc:language",
          "powiązanie": "dc:relation",
          "ma część": "terms:hasPart",
          "jest częścią": "terms:isPartOf",
          "ma wersję": "terms:hasVersion",
          "jest wersją": "terms:isVersionOf",
          "ma format": "terms:hasFormat",
          "jest formatem": "terms:isFormatOf",
          "odnosi się do": "terms:references",
          "ma odniesienie w": "terms:isReferencedBy",
          "zastępuje": "terms:replaces",
          "zastąpiony": "terms:isReplacedBy",
          "wymaga": "terms:requires",
          "wymagany przez": "terms:isRequiredBy",
          "zgodność": "terms:conformsTo",
          "prawa": "dc:rights",
          "status dostępu": "terms:accessRights",
          "licencja": "terms:license",
          "właściciel praw": "terms:rightsHolder",
          "pochodzenie": "terms:provenance",
          "digitalizacja-instytucja": "plmet:digitization",
          "lokalizacja oryginału": "plmet:locationOfPhysicalObject"
        },
    ]
}

export default PLMETschema;