#Ju Conecrt

##JU eConnect Main Website

![](./image-website)

###Deployed - ()

- https://ju-econnect-f3e75.web.app/


##e- Meet 

eMeet is a video Chat web application. It is created to host all your meetings and seminars.

###Deployed App - (https://ju-emeet.herokuapp.com)

![](./image-meet.png)

###Tools used

- Jitsi Meet API
- CSS
- Javascript 

###How to use

- Navigate to the main Ju eConnect Website: (https://ju-econnect-f3e75.web.app/)
- Go to Features drop down menu
- Click on Video Call
- Create New Meetings
- Type your unique meeting name 
- Click on Start Meeting 
- Enter Your Name
- Join Meeting
- Meet itself has multiple features which you can access through suggestive UI

##JU-Voice-Connect

Voice conversations with pure P2P. Full power of WebRTC to create voice rooms to have a conversations, interviews and discussions.

![](./image-voice)

###Deployed App - (https://ju-voice-connect.vercel.app/)

###Tools used
- PeerJS
- NextJS
- Vercel. 
- Purely serverless and PeerJS Server handles signaling to start P2P connections between speakers and listene

In no particular order,here are the features:

- As host Start Room
- Allow others to Explore Rooms based on content
- Mute/Unmute as Speaker
- As host Promote listener to Speaker (Multi Speaker Room)

##Health Chat, eConnect Chat, Alumni Chat

all of these chats are made using the same concept but they cater to different purposes depending on the wide variety of their users.

![](./image-chat)

###Deployed App

- Health Chat :      (https://health-chat-f5faa.web.app/)
- Alumini Chat:      (https://alumni-econnect.web.app/)
- eConnect Chat:     (https://ju-chat-connect.web.app/) 


###Features

- We have also added profanity filter in each of the apps.
- You can create channels
- Provide a description for each channel
- Send Media
- You can send direct messages to other users as well.
- You can bookmark your favorite channels for easier access.
- You can also upload your profile image as your chat avatar.
- It is provided with authentication features.
- Color Panel for changing to your favorite custom themes for the App
- In the Health Chat app we have enabled annonymous feature as well as created seperate sections for direct messages.

##Tools used
- Firebase
- Firestore
- Javascript
- CSS
- HTML
- ReactJs

##Health eConnector Bot

![](./image-bot)

###Navigate to the main JU eConnect Website to use.

###Tools Used

- IBM Watson Assistant APi

###Features

- It has qurated questions based upon clinical studies to address to common mental health queries so as to understand your condition.
- Based on the answers you provide the bot makes an evaluation and recommends you a channel which would suit you the best.

##Emergency Bot

![](./image-emergency-bot)


###Navigate to the JU eConnect Website to Use.

###Tools Used

- IBM Watson Assistant APi

###Features

- Helps in booking ambulance as well as hospital appointments.

##Ju Community Post - 

###Deployed App - (https://ju-community-post.web.app/)

![](./image-community)

###Tools used

- React Js
- Javascript
- CSS
- HTML

###Features

- You can post videos, images and articles on this platform.
- It also has an event schedule

## JU-PG-Connect

- This is an ethuream based blockchain app which uses the concept of NFT marketspace, that allow you to put up PG rooms and hostels for rent and at the same time allows the students to book the same.

![](./imagae-PG)

### Tools used

- Javascipt
- Solidity
- NextJS
- ReactJS
- Tailwind
- Infura
- Polygon
- HardHat

###Prerequisites

- Chrome
- Metamask Extension for Chrome


### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/dabit3/polygon-ethereum-nextjs-marketplace.git

cd polygon-ethereum-nextjs-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```



