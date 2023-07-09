# Vendre code challange
I was given a task to design a responsive employees' page in one week. I was provided with an API to work with from reqres.in. The data from the API did not include titles, so I added that to the object in the frontend. That would make the components more realistic in terms of how the logic would have been if the data were included.

The website has a few elements that were taken from Vendre's website to make the employees' page fit as if it was made for them. The NavBar component and Footer are recreated from their own. The footer also includes a copyright mark: "Copyright © 2023 Vendre". This page does not have a copyright. It is simply there to look like the real page.

Images from Vendres website 2023:
![image](https://github.com/Willi0t/vendre-code-challange/assets/113394429/9c0427c6-57f3-4b69-ac6c-72a80952caa0)

----

![image](https://github.com/Willi0t/vendre-code-challange/assets/113394429/b4d7368e-adb7-45d1-b562-3ac7bc829e70)

The page also has pages, per request from Vendre. This makes the interaction for mobile feel a bit clunky. If I were to redo it, I would skip the pages for mobile and just have a straight flow from top to bottom. However, due to time constraints, I only made one version of the app.

#Additional info
The navbar component has multiple pages, but since my task was to create one page, they are just routed to a 404 page. They are there to make the design look realistic and have no function.

the 404page art work is borrowed from Halvor Nordrum.

The icons in the cards have a similar function. They are set to go to LinkedIn and GitHub, but they will return a 404 page since the users are not real.

# the Email from vendre

KODUPPGIFT

På vår hemsida vill vi visa en lista över våra anställda (dummydata). Data kan hittas på följande slutpunkt: https://reqres.in/api/users

Bonuspoäng om du lägger till paginering enligt hur api:n fungerar.
För att få sida2: https://reqres.in/api/users?page=2

Dessa är några måste enligt designteamet:

Runda profilbilder
Namnet, följt av en kontaktlänk som leder till de anställdas e-postadress
Utöver det kan du designa sidan hur du vill
Sidan ska vara responsiv som i exemplet nedan:

https://www.dropbox.com/scl/fi/9wno72766m40wmcrxpunc/Kodtest.mov?rlkey=a4mpcueupwopxu0vt6i1raevs&dl=...

👊DEADLINE ÄR 9 JULI👊

## Page demo:

https://vendre-code-challange.netlify.app

![image](https://github.com/Willi0t/vendre-code-challange/assets/113394429/9e43b021-fa3e-49df-814b-2acf8776f29f)

![image](https://github.com/Willi0t/vendre-code-challange/assets/113394429/247520e0-e02a-4b17-b370-a3b802315a54)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
