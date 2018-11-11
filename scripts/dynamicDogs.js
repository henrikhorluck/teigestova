const dog_text = document.getElementById('ourDogsParentText')
const pic_goldie = document.getElementById('ourDogsParent_Goldie')
const pic_ariana = document.getElementById('ourDogsParent_Ariana')
const pic_whitney = document.getElementById('ourDogsParent_Whitney')

// Eventlisteners for the pictures, and functions that add the text to the document
pic_goldie.addEventListener('click', goldie_text)
function goldie_text() {
    dog_text.innerHTML = `<h2>Goldie</h2>
    <ul>
        <li>Født 28/10-14</li>
        <li>Rød med hvitt bryst og lugg.</li>
        <li>Mankehøyde 27,5</li>
        <li>Vekt 7,7 kg</li>
        <li>Øyelyst 21/10-16</li>
        <li>Patella 0/0 13/1-16</li>
    </ul>
    <p>Goldie er dronninga i huset. Hun er trygg på seg selv og har et veldig
    tydelig kroppspråk, egenskaper vi setter stor pris på at hun bruker på de
    andre hundene. Når hun er med på tur i bilen eller vi er på utstilling,
    er det ro i flokken.<p>

    <p>Goldie elsker late dager og vil helst kose seg i sofaen med far i huset.
    Samtidig er hun rask inn i bilen når hun ser at utstillingsutstyret blir
    pakket sammen. Goldie liker å vise seg i ringen, hun fører seg som ei
    dronning og har utmerket kontakt med den som går med henne.<p>`
}

pic_ariana.addEventListener('click', ariana_text)
function ariana_text() {
    dog_text.innerHTML = `<h2>Arianna</h2>
    <ul>
        <li>Født 31/12-16</li>
        <li>Farge:hvit/ sobel</li>
        <li>Mankehøyde 24,5</li>
        <li>Vekt 5,5 kg</li>
        <li>Øyelyst 23/10-18</li>
        <li>Patella 0/0 20/2-18</li>
    </ul>
    <p>Arianna er en liten, snerten frøken med mye fart. Hun er med på alt, og
    skal du noe er hun ofte ute av døra og klar til å være med uten at du merket
    det. Arianna har fast plass under en stol på spisestua, hvor hun har full
    oversikt over alle i huset.</p>

    <p>Arianna er en hund som lærer fort, hører etter og er veldig lett å få
    kontakt med. Hun kan holde ørlite grann avstand til fremmede (i fem sekund
    og åtte bjeff, i hvert fall). Å ta med seg Arianna på tur uten bånd er en fryd,
    siden hun selv søker kontakt med jevne mellomrom og innkalling er noe vi
    nesten ikke har trengt å jobbe med på denne snuppa.</p>

    <p>Arianna har en kropp som er skapt for fart og er et vidunder på
    agility-banen.</p>
</p>`
}

pic_whitney.addEventListener('click', whitney_text)
function whitney_text() {
    dog_text.innerHTML = `<h2>Whitney</h2>
    <ul>
        <li>Født 8/5-2018</li>
        <li>Farge grå, svart, rød og hvit</li>
    </ul>
    <p>Vi hentet lille Whitneyen vår i Kristiansund i juli, og det ut som vi
    har fått en drøm av en hund. Whitney er rolig, trygg og elsker alle hun møter.
    Hun har forventninger om å få gi deg et ordentlig suss hver gang du kommer
    hjem, eller fordi hun våknet eller kun fordi hun fikk lyst. Hun nyter
    kosestunder på fanget og vil gjerne strykes på.</p>

    <p>Whitney elsker å være ute. Vi er ikke før kommet inn før hun vil ut
    igjen. Hun er faktisk utrolig flink å aktivisere seg selv også med
    lekene på stua. Lekeslossing med de to andre er nok det aller kjekkeste
    hun gjør. Hun hermer etter Goldie og Arianna på beste valpevis og
    ser ut til å lære masse av de to andre.</p>

    <p>Whitney fører seg som ei kule på utstillingstrening og lar seg villig
    ta på av andre. Hun er ofte med på agility-banen, og siden hun er for ung 
    til å trene der får hun springe i tunnelene og liksom-hoppe mens hoppstanga
    ligger på bakken.</p>

    <p>Vi er veldig spent på å se fortsettelsen med denne nydeligheten vår.</p>`
}

//This makes so that if you add ?goldie, ?ariana, or ?whitney it will load that part automatically on the site
if (window.location.search.indexOf('goldie') > -1) {
    goldie_text()
} else if (window.location.search.indexOf('ariana') > -1){
    ariana_text()
} else if ((window.location.search.indexOf('whitney') > -1)){
    whitney_text()
}
