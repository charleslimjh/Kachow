# Kachow!

Note: The technical proof of our project is hosted on Netlify! 
Click [here](https://enchanting-piroshki-538dcd.netlify.app/) to try out our web application (work in progress)!

## Table of Contents
- [Kachow!](#kachow)
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
- [8. Other Links](#8-other-links)

# 1. Projected Level of Achievement
Gemini

# 2. Motivation
While learning to obtain our driving licenses, we had the *absolute pleasure* of utilizing the *well-designed* and *up-to-date* online portals to do lesson/test bookings at Bukit Batok Driving Centre (BBDC). Its old, unintuitive and poor design choices impeded our experience in using the web portals, which caused great inconvenience and lots of frustration in the process.

# 3. Aim
To **overhaul the current web application currently used** by BBDC used for lesson/test bookings, as well as to **add quality-of-life improvements** to improve the lesson booking process of students.

# 4 User Stories

## 4.1 Core User Stories
1. As an incoming student enrolling into the driving school, I want to **create an account** easily.
2. As a student, I want to update my profile details and check my account balance easily.
3. As a student taking the private path, I want to **book Simulator slots, Circuit slots and Test slots** (BTT/FTT/TP Test).
4. As a student taking the school path, I wish to be able to **book Theory lessons, Practical lessons, Simulator slots and Test slots** (BTT/FTT/TP Test).
5. As a student, I want to be able to **cancel or trysell my lesson/circuit slot**.
6. As a student, I want to have an **overview of my upcoming bookings/lessons**.
7. As a administrator, I wish to **update the account balances of students in the driving school** to allow them to pay for their lesson bookings.

## 4.2 Extensions
1. As a student, I want to have any **driving-related questions answered by my peers or instructors**. 
2. As a student, I want to **get reminders** of my upcoming lessons/bookings.
3. As a user of the platform, I want to **clarify my doubts on how to use the platform** easily.

# 5. Scope of Project
The **core web application** will support basic CRUD (Create, Read, Update, Delete) functionality with regards to:
 - Account creation;
 - Balance top-ups; and
 - Lesson/test/simulator bookings.

 A **Telegram Bot** will support automated reminders of upcoming lessons/bookings to students who opt-in to the service.

 The web application will be extended further by implementing (1) **a  help chatbot** to answer FAQs on the use of the web application; and (2) **a web forum** for users to post queries on driving, platform use and other miscellaneous questions.

# 6. Timeline and Development Plan
| Milestone  |    Date     |                                                    Task                                                     |
| :--------: | :---------: | :---------------------------------------------------------------------------------------------------------: |
| Splashdown | 9/5 - 15/5  |                                           Video & Poster Creation                                           |
|     M1     | 16/5 - 22/5 |                    Prototyping with Figma + <br>Start learning<br>necessary technologies                    |
|     M1     | 23/5 - 29/5 | HTML Web Application with <br>login authentication, <br>integrated with Firebase, <br>and hosted on Netlify |
|     M2     | 30/5 - 5/6  |                     CRUD Functionality for Profiles, <br>Bookings and Account Balances                      |
|     M2     | 6/6 - 12/6  |                                  Telegram Bot Integration <br>with Website                                  |
|     M2     | 13/6 - 19/6 |                                          Self Testing + Debugging                                           |
|     M2     | 20/6 - 26/6 |                            User Testing, implementing <br>suggested improvements                            |
|     M3     | 27/6 - 10/7 |                                  Help Chatbot integration <br>into Web App                                  |
|     M3     | 11/7 - 17/7 |                                   Web Forum integration <br>into Web App                                    |
|     M3     | 18/7 - 24/7 |                                          User Testing + Debugging                                           |

# 7. Proposed Tech Stack
1. HTML/CSS/Javascript (Frontend)
2. Firebase (Backend)
3. Netlify (Web App Hosting Platform)
4. Python (Telegram Bot Integration)

# 8. Other Links
- [Project Poster](https://drive.google.com/file/d/1XjNX19q6VD3UyhUgE7Wgi3L301ELKpub/view?usp=sharing)
- [Project Video](https://drive.google.com/file/d/1pg-N62fxiEzsbaExhlBiufve4H0gviJB/view?usp=sharing)
- [Project Log](https://docs.google.com/spreadsheets/d/1qyYAI4xEDxlCCG3IyzlDAnqgQwfhd_8biwHQM1JzAqI/edit?usp=sharing)
- [Figma Prototype (WIP)](https://www.figma.com/proto/2vEriPljl65Etd0ZpulQhw/Kachow!?node-id=221%3A1919&scaling=scale-down&page-id=221%3A1890&starting-point-node-id=221%3A1919&show-proto-sidebar=1)
