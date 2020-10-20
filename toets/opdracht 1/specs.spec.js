describe('Opdracht Titel verbeteren', function() {
    it('De opdracht was om de html titel te verbeteren. Het stond eerst op "Expected Verbeteringen to be Voorbeeld toets" en het enige wat je moest veranderen is dus de titel in de html. Als je dit bericht en uitleg ziet dan weet je dat opdracht is uitgevoerd.', function () {
        expect(document.title).toBe('Voorbeeld toets');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Opdracht expect functions verbeteren', function () {
    it('De opdracht hier was om expect(unitTest.item).toBe("voorbeeld"); te verbeteren naar expect(unitTest.item).toBe("item"); als je dat hebt gedaan hoort de fout melding weg te gaan. Als je dit ziet dan is de opdracht correct uitgevoerd.', function () {
        expect(unitTest.item).toBe('item');
    });
    it('De opdracht hier was om de nummer dat in toEqual staat te verbeteren naar 2 inplaats van 3 als dat correct is uitgevoerd zie je geen foutmelding meer. Ook zat dit "it" function in het it function hierboven dat hoor je uit de it functie te halen en plaatsen om een nieuwe regel onder de it function.', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});

describe('Opdracht code uit elkaar halen', function () {
    it('Deze opdracht was niet zo moeilijk. de opdracht 4 was verwerkt in opdracht 3 en dat moest je simpelweg uit elkaar halen endan zou je dit bericht moeten zien (dit is opdracht 3)', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});

describe('Opdracht code uit elkaar halen', function () {
    it('Deze opdracht was niet zo moeilijk. de opdracht 4 was verwerkt in opdracht 3 en dat moest je simpelweg uit elkaar halen endan zou je dit bericht moeten zien (dit is opdracht 4)', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});