NFC android app
=========

An application written to scan NFC tags and register them in a mongodb database, for educational purposes

## Installation

  `git clone https://github.com/WellTemperedFate/NFC_Ionic_app`

## How to run?

In powershell, go to the folder you cloned this repository in and type the following line:

  `ionic cordova run android --device`

***NOTE: This app supports android versions from 6.3.0, so it might not work on previous android versions.***

When you get this line: 

  `? Looks like a fresh checkout! No ./node_modules directory found. Would you like to install project dependencies?`

simply type 'y' or 'yes'.

For the Server on the raspberry pi, you will need to install mongoose, node.js, express and mongodB.

to run the server after installing this, simply enter this folder and type in the following command:

   `npm run start`

This will make it run on port 3000 standard

## Contributing

I made this for a small project for Vives hogeschool, so feel free to use, change,... the code.

Have a good one

Giovanni Allemeersch
