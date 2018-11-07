let dog_text = document.getElementById('ourDogsParentText')
let pic_goldie = document.getElementById('ourDogsParent_Goldie')
let pic_ariana = document.getElementById('ourDogsParent_Ariana')
let pic_whitney = document.getElementById('ourDogsParent_Whitney')

// Eventlisteners for the pictures, and functions that add the text to the document
pic_goldie.addEventListener('click', goldie_text)
function goldie_text() {
    dog_text.innerHTML = `<h2>Diltedottens Go Go Girl, Goldie</h2>
    <ul>
        <li>Født 28/10-14</li>
        <li>Rød med hvitt bryst og lugg.</li>
        <li>Mankehøyde 27,5</li>
        <li>Vekt 7,7 kg</li>
        <li>Øyelyst 21/10-16</li>
        <li>Patella 0/0 13/1-16</li>
    </ul>
    <p>En rolig og harmonisk dame.
    <p>Goldie er trygg på seg selv og har et veldig tydelig kroppspråk.</p>
    <p>Egenskaper vi setter stor pris på at hun bruker på de andre hundene.</p>
    <p>Når hun er med på tur i bilen eller vi er på utstilling, er det ro i flokken.</p>
    <p>Hun er tålmodigheten selv.</p>
    <p>Goldie elsker late dager og vil helst kose seg i sofan med Jan Arve.</p>
    <p>Samtidig er hun rask inn i bilen når hun ser at utstillings utstyret blir pakket sammen.</p>
    <p>Hun liker å vise seg i ringen, hun fører seg som ei dronning og har utmerket kontakt med den som går
    med henne.</p>
    <p>Goldie har også trent litt rally lydighet. Dette skal vi fortsette med da det passer hennes rolige vesen
    veldig godt.</p>
    <p>Hun er også på agility trening.</p>
    <em>Dronninga i huset.</em>`
}

pic_ariana.addEventListener('click', ariana_text)
function ariana_text() {
    dog_text.innerHTML = `<h2>Cubana stars Amazing Ariana</h2>
    <ul>
        <li>Født 31/12-16</li>
        <li>Farge:hvit/ sobel</li>
        <li>Mankehøyde 24,5</li>
        <li>Vekt 5,5 kg</li>
        <li>Øyelyst 23/10-18</li>
        <li>Patella 0/0 20/2-18</li>
    </ul>
    <p>Ariana er en liten, snerten frøken med mye fart.</p>
    <p>Hun er med på alt og skal du noe er hun ofte ute av døra og klar til å være med uten at du merket det.</p>
    <p>Hun har fast plass under en stol på spisestua, hvor hun har full oversikt over alle i huset.</p>
    <p>Ariana har en kropp som er skapt for fart og er et vidunder på agility bana.</p>
    <p>Hun er blant de virkelig livlig og nyskjerrig.</p>
    <p>Vil gjerne følge med på alt.</p>
    <p>Ariana er en hund som lærer fort, hører etter og er veldig lett å få kontakt med.</p>
    <p>Hun kan holde ørliten grann avstand til fremmede, i fem sekund og åtte bjeff ihvertfall.</p>
    <p>Å ta med seg Ariana på tur uten bånd er en fryd, da hun selv søker kontakt med jevne mellomrom og
    innkalling er noe vi nesten ikke har trengt å jobbe med på denne snuppa.</p>`
}

pic_whitney.addEventListener('click', whitney_text)
function whitney_text() {
    dog_text.innerHTML = `<h2>Skystar's Whitney</h2>
    <ul>
        <li>Født 8/5-2018</li>
        <li>Farge grå, svart, rød og hvit</li>
    </ul>
    <p>Lille Whitneyen vår hentet jeg og Jon Inge i Kristiansund i juli.</p>
    <p>Her ser det ut som vi har fått en drøm av en hund.</p>
    <p>Frøkena er rolig, trygg og elsker alle hun møter.</p>
    <p>Hun har forventniger om å få gi deg et ordentlig suss hver gang du kommer hjem, eller bare fordi hun</p>
    våknet eller kun fordi hun fikk lyst.
    <p>Hun er lille babyen vår og nyter kose stunder på fanget og vil gjerne strykes på.</p>
    <p>Whitney elsker å være ute. Vi er ikke før kommet inn før hun vil ut igjen.</p>
    <p>Whitney fører seg som ei kule på utstillings trening og lar seg villig ta på av andre.</p>
    <p>Hun er ofte med på agility bana, siden hun er for ung til å trene noe der så får hun springe i tunellene og
    liksom hoppe mens hoppstanga ligger på bakken.</p>
    <p>Jenta er faktisk utrolig flink å aktivisere seg selv også med lekene på stua.</p>
    <p>Leike slossing med deg to andre er nok det aller kjekkeste hun gjør.</p>
    <p>Hun hermer etter på beste valpe vis og ser ut til å lære masse av de to andre.</p>
    <p>Vi er veldig spent på å se fortsettelsen med denne nydligheten vår.</p>`
}

//This makes so that if you add ?goldie, ?ariana, or ?whitney it will load that part automatically on the site
if (window.location.search.indexOf('goldie') > -1) {
    goldie_text()
} else if (window.location.search.indexOf('ariana') > -1) {
    ariana_text()
} else if ((window.location.search.indexOf('whitney') > -1)) {
    whitney_text()
}