# Mikael Sundqvist Portfolio, Publiceringsverktyg (CMS)
<a href="https://mike-sundqvist-portfolio.netlify.app/">My Portfolio</a>

## Setup Notes

1. `npm install` in both frontend and backend directories
2. NOTE!!! Beaware that after cloning this repo, you need to delete the upload folder and its contents in the strapi backend!
3. In the backend run `npm run develop`
4. In your backend recreate the folder upload under extensions, then in the upload folder create the config folder, in the config folder create settings.json file with the following structure.
5. `{`
   `"provider": "cloudinary",`
   `"providerOptions": { "cloud_name": "xxxx",`
   `"api_key": "xxxxxx",`
   `"api_secret": "xxx" }`
   `}`
   Replace the content of cloud_name, api_key and api_secret with your own credentials from Cloudnairy
6. NOTE!!! In your frontend, change settings for student-portfolio/student_frontend/src/pages/contact.js, the settings for form action must be specifically be yours that you recieved from fromspree
7. In the frontend run `gatsby develop`
8. To use the git make file, please ensure that there are only tabs and no spaces. You can control this with the following add-on "Space Cadet"


Nu är inte det här min egna design, men anledningen att ha hero:n först
är för att direkt få en bild av vem sidan handlar om och vad jag vill (Söka jobb).
Sedan ska det vara enkelt att ta kontakt med mig (social links, kontakt/email).
Sedan kommer en sektion som handlar om vilka jobb jag söker, för att få en direkt uppfattning om det.
Efter det exempel på project jag gjort tidigare (här kan jag välja vad jag vill visa upp
på första sidan med hjälp av booleanen "featured" på strapi)
Slutligen blogartiklar där man kan få en bättre uppfattning om vem jag är.
Det är bara de tre senaste bloggarna som visas på home page för att inte 
slänga upp för mycket på användren direkt.

Jag har inte lagt in så mycket relavant info, och vissa länkar (som några git-länkar)
men har efter kursen möjlighet att uppdatera sidan, nu när det finns ett CMS bakom.

Med anledning av att jag lär mig nya saker hela tiden skulle det möjligen varit
bättre att lägga "services" som en content-type också på strapi för en enklare uppdatering
