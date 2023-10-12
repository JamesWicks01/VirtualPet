# VirtualPet
Coursework for Year 1 in Applicational Programming for Bsc (Hons) Software Engineering Degree

# Setup
1. Unzip the folder and open the folder in your terminal
2. Run the following command `npm i` to install the packages that are required
3. Once finished, run the following command then run `npm start` to start the server and program
4. Once finished, run the following command then open your browser and run the following command `localhost:8080` to display the program

# Features
- A clicking button system to feed, sleep and clean your virtual pet.
- A way to name your virtual pet though a text input box.
- A feature that decreases your virtual pet's hunger, cleanliness and energy overtime with different speeds of decreasing depending on the pet's attribute.
- The virtual pet's happiness depends and changes to the lowest value of the pet's core attributes.
- All the pet's attributes and name are autosaved every ten seconds in browers local storage and will load again when you exit and reload the page
- A minigame of rock, paper, scissors with your pet by click on the play button on the pet screen
- A feature that enables your pet to die if you haven't feed your pet for a period of time.

# Future Features
- Google Sign In feature with a database to store a users pet so it can be accessed on another device.
- The user interface will change to add mobile phone and tablet support as at this current state it is only compatible with computers.
- A reward system to the minigame that when you win you get a in game currency that you can spend on your pet's food and cleaning products.
- Dragable buttons for the feeding, cleaning and sleeping so the button will have to be dragged to the pet and then the action of the button will happen.

# This I Did Wrong During The Development
- The user interface used margins alot to get the sections of the page in the right areas but then I was informed about grid layouts and removed the margins that moved the content around the page.
- When making the core values of the virtual pet decrease and increase I programed the same if statement but duplicated for each value now there is a meta function that does the same thing.
- In the early development of the virtual pet program all the values were in individual defined at the start of the program now it is all defined in an object.
