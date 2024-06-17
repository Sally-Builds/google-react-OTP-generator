# Documentation: React Application for Google Login and OTP Generation

##Overview

This React application allows users to log in using their Google account. Once logged in, the application generates a one-time password (OTP) that refreshes every 30 seconds. The user's name and email are displayed upon successful login, and the user can log out at any time.
Features

- Google Authentication: Users can log in using their Google credentials.
- JWT Decoding: The application decodes the JWT token to extract user information.
- OTP Generation: A six-digit OTP is generated and displayed, refreshing every 30 seconds.
- Automatic Timer for OTP: A countdown timer shows the remaining time before the OTP expires and a new one is generated.
- Logout Functionality: Users can log out, which clears their session.

## Components and Functions

State Variables

- email: Stores the user's email address.
- name: Stores the user's name.
- otp: Stores the current OTP.
- timer: Stores the countdown timer value for the OTP expiration.

## Functions

- responseMessage(response: any):

  - Called upon successful Google login.
  - Decodes the JWT token to extract user details.
  - Sets the email and name state variables.
  - Calls generateOtp() to generate a new OTP.
  - Resets the timer to 30 seconds.

- errorMessage(error: any):

  - Called when there is an error during Google login.
  - Logs the error to the console.

- logout():
  Logs out the user using the googleLogout() function.
  Clears the email and name state variables.

- generateOtp():
  Generates a new six-digit OTP.
  Sets the OTP state variable with the new OTP.

- useEffect:
  Monitors the timer state variable.
  Decrements the timer every second.
  Regenerates the OTP and resets the timer when it reaches 0.

### How It Works

- User Login:

  - The user clicks the Google login button.
  - On successful login, responseMessage is called, decoding the user's JWT token and setting the user's details.
  - An OTP is generated and displayed along with a 30-second countdown timer.

- OTP Handling:

  - The OTP is a randomly generated six-digit number.
  - The OTP and timer are updated every second using a setInterval function.
  - When the timer reaches 0, a new OTP is generated, and the timer is reset to 30 seconds.

- User Logout:

  - The user can log out by clicking the "Logout User" button.
  - The logout function clears the user's session details and stops the OTP generation.

- Dependencies
  - @react-oauth/google: Provides Google OAuth login functionality.
  - jwt-decode: Decodes JWT tokens to extract user information.
  - React: Core library for building the user interface.

### Example Usage

- Clone the repository.
- Install the dependencies using npm install.
- Replace the Google client ID with your own in the appropriate configuration.
- Run the application using npm start.
- Open the application in your browser, and log in using your Google account to see the OTP functionality in action.
