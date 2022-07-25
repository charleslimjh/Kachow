# Kachow!

## Overview
1. The technical proof of our project is hosted on Netlify! Click 
[here](https://enchanting-piroshki-538dcd.netlify.app/) to try out our web application (work in progress)!
2. Click [here](https://docs.google.com/document/d/1PqYUTE46f6gu7wPJZtAs-r5d5xIN9YkK-Fy0MB-j46M/edit?usp=sharing) 
to see a Google Docs version of the READme!

## Table of Contents
- [Kachow!](#kachow)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
- [1. Projected Level of Achievement](#1-projected-level-of-achievement)
- [2. Motivation](#2-motivation)
- [3. Aim](#3-aim)
- [4 User Stories](#4-user-stories)
  - [4.1 Core User Stories](#41-core-user-stories)
  - [4.2 Extensions](#42-extensions)
- [5. Scope of Project](#5-scope-of-project)
- [6. Timeline and Development Plan](#6-timeline-and-development-plan)
- [7. Proposed Tech Stack](#7-proposed-tech-stack)
- [8. Backend Documentation](#8-backend-documentation)
  - [8.1 User Authentication](#81-user-authentication)
  - [8.2 Database](#82-database)
  - [Accounts Table](#accounts-table)
  - [Booking Table](#booking-table)
  - [Records Table](#records-table)
- [9. Technical Proof of Concept](#9-technical-proof-of-concept)
- [10. Software Engineering Practices](#10-software-engineering-practices)
  - [Branching](#branching)
  - [Pull Requests (PRs) and Review Workflow](#pull-requests-prs-and-review-workflow)
- [11. Challenges Faced and Future Work](#11-challenges-faced-and-future-work)
    - [Milestone 2 Issues:](#milestone-2-issues)
    - [Further Extensions:](#further-extensions)
- [Other Links](#other-links)

# 1. Projected Level of Achievement
Gemini

# 2. Motivation
While learning to obtain our driving licenses, we had the *absolute pleasure* of utilizing 
the *well-designed* and *up-to-date* online portals to do lesson/test bookings at 
Bukit Batok Driving Centre (BBDC). 

Its old, unintuitive and poor design choices impeded our experience in using the 
web portals, which caused great inconvenience and lots of frustration in the process.

# 3. Aim
We wish to **streamline and improve the lesson/test booking experience** of 
**students in driving centres** in Singapore. Using the current BBDC 
booking portal as a starting point, we aim to:

(1) **design and implement a better web application for driving centres** 
to facilitate test/lesson bookings, and 

(2) add **quality-of-life improvements** to the web application to improve 
the learning experience of driving students.

# 4 User Stories

## 4.1 Core User Stories
1. As an incoming student enrolling into the driving school, I want to **create an account** easily.
2. As a student, I want to **update my profile details** and **check my account balance** easily.
3. As a student, I wish to **make lesson/test bookings** for Theory Tests (BTT/FTT); Practicals (Lessons/Tests) and Simulator Lessons (Sim 1-3).
4. As a student, I want to be able to **cancel or trysell my lesson/circuit slot**.
5. As a student, I want to have an **overview of my upcoming bookings/lessons**.
6. As a administrator, I wish to **update the account balances of students in the driving school** to allow them to pay for their lesson bookings.

## 4.2 Extensions
1. As a student, I want to have any **driving-related questions answered by my peers or instructors**. 
2. As a student, I want to **get reminders** of my upcoming lessons/bookings.
3. As a user of the platform, I want to **clarify my doubts on how to use the platform** easily.
4. As a student, I want to be able to **perform account top-ups** using the platform.

# 5. Scope of Project
The **core web application** will support basic CRUD (Create, Read, Update, Delete) functionality with regards to:
 - Account creation;
 - User information & account balance; and
 - Lesson/test/simulator bookings.

A **Telegram Bot** will support automated reminders of upcoming lessons/bookings to students who opt-in to the service.

The web application will be extended further by implementing (1) **a  help chatbot** to answer FAQs on the use of the web application; and (2) **a web forum** for users to post queries on driving, platform use and other miscellaneous questions.

# 6. Timeline and Development Plan
| Milestone  |    Date     |                                                    Task                                                     |
| :--------: | :---------: | :---------------------------------------------------------------------------------------------------------: |
| Splashdown | 9/5 - 15/5  |                                           Video & Poster Creation                                           |
|     M1     | 16/5 - 22/5 |                    Prototyping with Figma + <br>Start learning<br>necessary technologies                    |
|     M1     | 23/5 - 29/5 | HTML Web Application with <br>login authentication, <br>integrated with Firebase, <br>and hosted on Netlify |
|     M2     | 30/5 - 5/6  |                    Learn technologies + <br>address peer evaluation<br>and peer feedback                    |  |
|     M2     | 6/6  - 19/6 |                     CRUD Functionality for Profiles, <br>Bookings and Account Balances                      |
|     M2     | 20/6 - 26/6 |                              User Testing, start implementing <br>Telegram Bot                              |
|     M3     | 27/6 - 3/7  |                            Finish Telegram Bot +<br>Account Balance Integration                             |
|     M3     | 4/7 - 10/7  |                                  Help Chatbot integration <br>into Web App                                  |
|     M3     | 11/7 - 17/7 |                                   Web Forum integration <br>into Web App                                    |
|     M3     | 18/7 - 24/7 |                                          User Testing + Debugging                                           |

# 7. Proposed Tech Stack
1. HTML/CSS/Javascript (Frontend)
2. Firebase (Backend)
3. Netlify (Web App Hosting Platform)
4. Python (Telegram Bot Integration)

# 8. Backend Documentation
We make use of two services from Firebase: Firebase Authentication and Cloud Firestore. 
We utilize Firebase's modular V9 SDK which provides reduced SDK size and greater efficiency.

We add Firebase's Web SDK through Content Delivery Network (CDN) given that this is a simple
project that does not rely on any build tools like webpack or Rollup. We import the various
libraries and services in each web page's JavaScript file.

## 8.1 User Authentication
We rely on Firebase's **Firebase Authentication** to handle account registration, log in and log out.
We utilize email and password authentication as it is the most suitable one for our application.
Firebase Authentication also checks whether the user is currently logged in for the applicable pages.

The API Javascript function calls are called in the respective pages' javascript files. The calls utilized are listed below:

|             API Call             |                     Params                      |                                      Description                                      |
| :------------------------------: | :---------------------------------------------: | :-----------------------------------------------------------------------------------: |
| createUserWithEmailAndPassword() | email: user email<br>password: account password |               Creates a new user given the provided email-password pair               |
|   signInWithEmailAndPassword()   | email: user email<br>password: account password | Authenticates the email-password pair and signs the user in if they are a valid user. |
|            signOut()             |                       NIL                       |                              Signs out the current user.                              |
|       onStateAuthChanged()       |                       NIL                       | Attaches an observer object that obtains information on the currently logged in user. |


More information can be found at Firebase Authentication's Documentation found [here](https://firebase.google.com/docs/auth/web/password-auth).

## 8.2 Database
We rely on Firebase's **Cloud Firestore** to store information on users and booking information.

We utilise 2 different tables, (1) **accounts** and (2) **bookings**. We also make use of Firestore's
[Collection Groups](https://firebase.google.com/docs/firestore/query-data/queries#collection-group-query) 
to implement the **bookings** table to facilitate querying all bookings.

## Accounts Table
| FieldName | Data Type |                Description                |      Example       |
| :-------: | :-------: | :---------------------------------------: | :----------------: |
|    ID     |    id     |       Email is used as document ID        |  test@domain.com   |
| firstName |  string   |            First name of user             |       Xin Yu       |
| lastName  |  string   |             Last name of user             |        Wang        |
|    dob    |  string   |           User's Date of Birth            |     2001-01-01     |
|  gender   |  string   |              Gender of user               |       Female       |
|   phone   |  string   |          Contact number of user           |      98765432      |
|  course   |  string   |    Driving Course user is enrolled in     |      Class 2A      |
|  address  |  string   |        Residential address of user        | 13 Computing Drive |
|  postal   |  string   | Postal code of user's residential address |       117417       |

## Booking Table
The booking table contains 3 documents: **practicals**, **simulators** & **theory**, each keeping track
of the current booking number for that category. Each document links to a **records** collection group. 

``` 
Booking {
  practicals: {
    // booking number starts with 1
    bookingNo: 1000001,
    records: {
      ...
    }
  },
  simulators: {
    // booking number starts with 2
    bookingNo: 2000001,
    records: {
      ...
    }
  },
  theory: {
    // booking number starts with 3
    bookingNo: 3000001,
    records: {
      ...
    }
  }
}
```

## Records Table
|  FieldName  | Data Type |              Description              |            Example             |
| :---------: | :-------: | :-----------------------------------: | :----------------------------: |
|     ID      |    id     | Booking Number is used as document ID |            1000001             |
| bookingDesc |  string   |      Type of lesson/test booked       |              BTT               |
|  datetime   |  string   |       Date and Time of Booking        | 30 June 2022 at 17:00:00 UTC+8 |
|    user     |  string   |  Email of user that made the booking  |        test@domain.com         |



More information can be found at Cloud Firestore's Documentation found [here](https://firebase.google.com/docs/firestore/quickstart).

# 9. Technical Proof of Concept
We have implemented the following features:

1. BBDC Home Page
2. Account Registration Page
3. Log In Modals (in both Home and Registration Page)
4. BBDC Portal Main Page
5. My Account Page & Account Update Page
6. New Booking Page

Refer to the [Google Docs READme](https://docs.google.com/document/d/1PqYUTE46f6gu7wPJZtAs-r5d5xIN9YkK-Fy0MB-j46M/edit?usp=sharing) for accompanying images and more information.

# 10. Software Engineering Practices
We detail our software engineering practices used in this project, namely: version control with Git.

## Branching 
We utilized branching in Git. We created one "main" branch for Milestone 2, *milestone2*; which then 
branches off to 2 separate branches for the 2 collaborators: *crud-frontend* (for Xin Yu) and
*crud-backend* (for Charles). By working on our own branches instead of working on *main*, we avoid 
any unintended code updates to the master branch.

## Pull Requests (PRs) and Review Workflow
We utilized Git's pull request function to update the *milestone2* branch. We adopted a peer review system,
where if one party wishes to merge their commits to *milestone2*, the other party will review the code
and approve the pull request (and vice versa). This ensures that there is ample communication between parties 
such that everyone is aware with each other's development progress and avoid unwanted code pushes to main.

Furthermore, using Netlify's feature of *Deploy Previews*, we are able to test all code for Milestone 2 
before pushing it to *main*, facilitating testing and avoiding any unwanted code pushes.

# 11. Challenges Faced and Future Work

### Milestone 2 Issues:
- There are styling issues with the navbars, especially on mobile viewports. This will be addressed in Milestone 3.
- We faced difficulties in implementing the Telegram Bot for reminders on test/lesson bookings. 
As such, we defer the creation of the Telegram bot to Milestone 3.
- We have not managed to integrate account balances and payment for lessons into our web application yet
due to time constraints. We defer this to Milestone 3.
- As of now, the system allows unlimited users to book a lesson at any one time slot. This backend issue will be addressed in Milestone 3.
addressed in Milestone 3.
- There can be further improvements made to the current database design. 
- More stringent database security rules can be enforced in the Firebase console. 
This will be pursued during Milestone 3 subject to time constraints.
- When a user updates their email, the user's existing bookings are not updated and are lost 
unless they revert back to their original email. This backend issue will be addressed in Milestone 3.


### Further Extensions:
- As aforementioned, we plan to extend the project by adding a Web Forum and a AskJamie-styled 
Help Chatbot in our web application.
- We have received feedback that account top-ups are a crucial feature to users of our platform. 
We will start planning and implementing this feature subject to time constraints.

# Other Links
- [Project Poster](https://drive.google.com/file/d/1BxJ0CcB72xjCnpuBdjH_11S-nFVwN5h6/view?usp=sharing)
- [Project Video](https://drive.google.com/file/d/1Yt0aghiwqnVy10Bfe8SICkAHwOL4B4ZS/view?usp=sharing)
- [Project Log](https://docs.google.com/spreadsheets/d/1qyYAI4xEDxlCCG3IyzlDAnqgQwfhd_8biwHQM1JzAqI/edit?usp=sharing)
- [Figma Prototype (WIP)](https://www.figma.com/proto/2vEriPljl65Etd0ZpulQhw/Kachow!?node-id=221%3A1919&scaling=scale-down&page-id=221%3A1890&starting-point-node-id=221%3A1919&show-proto-sidebar=1)
