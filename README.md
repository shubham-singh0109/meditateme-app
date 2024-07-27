# MeditateMe App

![Alt text](assets/meditation-images/logo.png)

## Overview
The Meditation App is a cross-platform application built with React Native, designed to provide users with a variety of meditation exercises and tools. It is available for both iOS and Android platforms, helping users incorporate mindfulness and relaxation practices into their daily lives.

## Features
- Cross-Platform Support: Available on both iOS and Android.
- Authentication $ User Management: Secure the application and user details, and also track record of the users for upscaling.
- Guided Meditations: A selection of guided meditation sessions to help users focus and relax.
- Breathing Exercises: Interactive breathing exercises to aid in relaxation and stress relief.
- Progress Tracking: Track meditation sessions and progress over time.
- Customizable Settings: Adjust session lengths, notification preferences, and more.
- Offline Access: Access meditation content without an internet connection.


## Prerequisites
- Node.js and npm or Yarn
- React Native CLI or Expo CLI
- Xcode (for iOS Simulator)
- Android Studio (for Android Simulator)
- Firebase

## Firebase Configuration
- Create a project on firebase and configure with creating an app and realtime storage for Authentication and User Management.

## Setup
Clone the project

```bash
  git clone https://github.com/shubham-singh0109/meditateme-app.git
```

Go to the project directory

```bash
  cd meditateme-app
```
Create a .env file in the root directory and configure

```bash
  REACT_APP_FIREBASE_API_KEY=<you_api_key>
  REACT_APP_FIREBASE_AUTH_DOMAIN=<your_auth_domain>
  REACT_APP_FIREBASE_PROJECT_ID=<your_project_id>
  REACT_APP_FIREBASE_STORAGE_BUCKET=<you_storage-bucket>
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_sender_id>
  REACT_APP_FIREBASE_APP_ID=<your_app_id>
  REACT_APP_FIREBASE_MEASUREMENT_ID=<your_measurement_id>
```

Install Dependencies

```bash
  npm install
```

Run the App

```bash
npm start
# or
npm run ios
# or
npm run android
```

## Contributing

- Contributions are always welcome!
- Fork the repository and build your idea.





