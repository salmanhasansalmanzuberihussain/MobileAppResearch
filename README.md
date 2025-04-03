Salman Hasan Programming Skillset [Full Stack Developer] (Front End Developer) [5 Years] (Main Focus 30-75) [Expert this and try best to keep sharp elsewhere unless VC out] 
Must Track Progress. 5 Years Programming. 
Replication of my website programmed by me using my laptop from my house. Actually [Salman Hassan] (HASSAN)

Programming Languages Familiar With
Javascript 

Programs Familiar With
Visual Studio Code
Expo React Native
NextJS
Vercel
Expo 

Technical Skillsets
DNS Hook Up Vercel 
IP Hook Up Vercel 
Visual Studio Code Basing 
Bootstrap Integration CSS Styling 
Navbar Integration [CSS Styling] 
Footer Integration [CSS Styling] 
Integration of Video Map Styling and Map Styling 
Github Upload/Installation
Expo React Native Mobile App Launches 
Expo Integration Upload 
Base System Expo React Native
Stack Navigator Integration
NFT Integration and NFT Marketplace [Ability to buy NFT Products using Metamask integration] 
Stripe Integration with Simple Hookup 
Words/Text Integration 
ChatGTP Integration/Artificial intelligence Integration

Research In Development [Backend] 
User Authentication System
- Clerk Integration 
- Postman API
- Crypto Integration
- Front end Development Styling
- Nodemailer Integration 
- Insomnia Check 

Things to Learn/Goals to Launch
Subscription to Newsletter and Email Integration
User Authentication/2FA [Strong Base System] 
Store Integration
Subscription Integration
Web3 Integration 

Main Concept
Digital Banking System [Crypto Integration] Digital Banking 


March 11th, 2025 [Focused Specifically on Mobile Integration]
Add Simple Home Screen integration
Add Images [Styles format], [Regular Format] 
TouchOpacity to Article [Make image clickable to another screen] [Research] 
https://www.google.com/search?q=click+to+another+screen+expo+react+native&sca_esv=557795853e6eaba1&ei=G3PQZ98Gi4Dk4w_67J2QBg&ved=0ahUKEwifgPuCx4KMAxULAHkGHXp2B2IQ4dUDCBA&uact=5&oq=click+to+another+screen+expo+react+native&gs_lp=Egxnd3Mtd2l6LXNlcnAiKWNsaWNrIHRvIGFub3RoZXIgc2NyZWVuIGV4cG8gcmVhY3QgbmF0aXZlMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKsCMgUQIRifBUi-I1DLAlj-IXADeAGQAQCYAbwBoAHFGKoBBDEuMjK4AQPIAQD4AQGYAhmgApUYwgIKEAAYsAMY1gQYR8ICCBAAGBYYChgewgIFEAAY7wXCAgYQABgWGB7CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEmAMAiAYBkAYIkgcENC4yMaAH5Xk&sclient=gws-wiz-serp
Screen Import add Image and then from there click to another screen. Gives me the ability to add all the images
Storing Images in Vercel Blob to Add Articles to Mobile Application
Center Image
Github Push Error Fixed
https://www.freecodecamp.org/news/error-src-refspec-master-does-not-match-any-how-to-fix-in-git/
Adding Images to Push to Articles [Goal Here]
Ability to add Image and add Button to send to another portfolio 
Video and Images Integration
container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 image: {
   width: 500,
   height: 550,
   resizeMode: 'cover',
 },


Specific Image Integration to have cross native. [Need Require and need image integration]
SVG Reading Image
Reorganize Features Introduction
Update Vercel w/article integration
Have to fix Vercel integration from Expo React Native Mobile App
https://www.google.com/search?q=deploying+expo+react+native+to+vercel&oq=deploying+expo+react+native+to+vercel&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRiPAtIBCDU2NDNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8
1. Building for Web with Expo:
Run the build command: In your project's root directory, execute npx expo export --platform web. This command will generate a static build of your web application in a dist folder. 


Test locally: You can optionally test your web app locally using npx expo serve. 


You can also create a native build with the origin set to the local server URL. 


2. Vercel Configuration (vercel.json):
Create a vercel.json file: In your project's root directory, create a file named vercel.json and add the following configuration: 


Integration to Apple Developer Google Developer

March 12th, 2025
Update of all programs
Update of all features
Styling of all features
Specifics 
Add Import of Screen with app.js 
Using props from the mobile app integrate touchopacity and then insert each article



Specific Image Integration to have cross native. [Need Require and need image integration]
SVG Reading Image
Reorganize Features Introduction
Update Vercel w/article integration

3/13/2025
Digital Strategy and Alignment. Adjusting to needs. Decision is to continue rolling every single day in hopes of top tier co-sign. Eventually will co-sign. If not no issue continue to always progress. 
Footer Update [Website/AI]
Image update instead of Video Integration [Website]

3/14/2025
Front end development. Change Margin specifically for images.
Change Colors of Navigation Bar using screen options
Remove navigation bar with header shown

3/15/2025
Centered the navigation title bar and added logo image
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { NavigationContainer } from '@react-navigation/native';
    import HomeScreen from './screens/HomeScreen';
    import SettingsScreen from './screens/SettingsScreen';
    import { Image } from 'react-native';
    
    const Tab = createBottomTabNavigator();
    
    function MyTabs() {
      return (
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={{ width: 150, height: 30 }}
                source={require('./assets/logo.png')}
                resizeMode="contain"
              />
            ),
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
    }
    
    export default function App() {
      return (
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      );
    }

Customizing Image to Vercel React Native App to feature and adding touch opacity w/ reverse function
Adding text size under image for rights and adding margin left and margin top 
Added italics
Working on Changing Font Style
Margin Top add to image
Adjust px due to app not working. Must remove on react native. Added style with bold for whoissalmanhassan
Adjusted Font Header Size 
Adding styling to date and specific heading to by salman hassan with font change
Customized Date with Date-FNS installed 
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { format } from 'date-fns';

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <Text>
      {format(currentTime, 'MMMM dd, yyyy HH:mm:ss')}
    </Text>
  );
};

export default DateTimeDisplay;
Installing reacticons
Adding Social Icons
Adjusting Icon Size changing colors and putting on row.

import React from 'react';
import { View, Text } from 'react-native';

const RowLayout = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ width: 100, height: 50, backgroundColor: 'lightblue' }}>Item 1</Text>
      <Text style={{ width: 100, height: 50, backgroundColor: 'lightcoral' }}>Item 2</Text>
      <Text style={{ width: 100, height: 50, backgroundColor: 'lightgreen' }}>Item 3</Text>
    </View>
  );
};

export default RowLayout;
Add MarginLeft to article
Add Link to Icon with Link integration
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const MiddleHeading = () => {
     return (
         <div id="middle_heading">  
            <Link to="/any-url">
              <FontAwesomeIcon icon={faRandom} size="2x"/>          
            </Link> 
         </div>
     );
 };

 export default MiddleHeading;


Using Linking was able to create icons with links to direct the user to a link
Added social space with gap for flexrow of icons
#box {
  display: flex;
  gap: 10px;
}
Margintop and removal of br to make mobile adjustments
Adjusting Linkedin Specific Item for font awesome
Adjusting Margins Between items to replicate website made by me [Salman Hassan]
Making sure Mobile integration is in tact

March 16th, 2025
Updating Information about self from article and using styles.text to compelely style
Added all information of list from the website I made [Mobile Version of Web Version I made myself] 
Updated Paragraph of who is Salman Hassan with proper indents - 12:09PM March 16th, 2025
Completing Multiple Entries of Article from Website to Mobile using css styling and expo react native integration
2:05PM- Update Expo React Native articles
Adjusting diaries on zub8eti.com and adding articles- 8:43pm [A bit of a buzz through computer]
Updated book written by me now have to update bold later on. Took all day to get this done. Time to workout and then fix bold.
<img width="378" alt="Screenshot 2025-03-16 at 10 12 50 PM" src="https://github.com/user-attachments/assets/e7de1ef5-0706-463e-a6a2-78b3b0526949" />

March 17th, 2025
Add Bold to Font [Used styles.text]
Research how to add specific font. helvetica insert font direct to styles.text and go from there
Adjusted specific font roles with different styles to adjust mobile display

March 18th, 2025
All articles are injected properly [5 hour process] (Injected 6 new completely injected in app.js stack navigator and injected article template
editing video and upload to vercel/all social platforms
Adding extra article

March 19th, 2025
Adjusting Articles while enjoying life a bit with Image Adjustments
Add images to articles
Fix Button
Insert video into mobile app
Scroll horizontal view and hidden scrollbar

March 20th, 2025
Android Video Integration, Reformatting All feauture screens to fix nobridge gap 
Deployment Cross Native. Mobile IOS and Web Working. Android a bit slow
Added link of myself of my worldwide fame and diary and sharpening up Website That I own at this time. Waiting for Venture access to uplift or to be used for something grand due to amount of effort-Hassan

March 21st, 2025
Image Post
Added new article goal is to add 

March 23rd, 2025
Day off social media post took it easy. Life going fast now slowing down princeton trip

March 24th, 2025
Update Dates


March 25th, 2025
Add all videos for expo react native

March 26th, 2025 [Blockage] (Must go around with new clips and all videos)
Import all videos on expo 

March 31st, 2025
Adding Video Insert. Something to watch for is update of expo react native, so continue to program dont fall in love is my advice to myself and continue to stay in Princeton spirit. Not everything is about me in life. 
March 28th, 2025
Inserting videos on expo and making sure all versions work

March 30th, 2025
Add bottom tab navigator with specific feature

April 1st, 2025
Added another section to stack navigator 
Changed Icon
Import Image to app.js

April 3rd, 2025
Adjusted react native update myself
