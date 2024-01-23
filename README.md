# Stamford Coin

## Project Overview

Welcome to our workshop! We're going to build a user-friendly website that lets you search for cryptocurrencies and view their details. This site will use data from the CoinRankings API (https://coinranking.com).

### What We'll Do
You'll be hands-on with coding, but don't worry! A lot of the groundwork has already been laid out for you. Your tasks will be clearly marked with comments like `// TODO: [Your Task Here]` in the code. Let's see what you'll be creating:

#### Home Page
- **Your Task: Set up the Search Bar**
	- When someone uses the search bar, your code will need to fetch a list of cryptocurrencies from the CoinRankings API.
	- **Display Cryptocurrencies:** Each cryptocurrency from the API should be shown in its own "entry" or "card" format.
	- **Click to Learn More:** Clicking on a cryptocurrency card should take the user to a detailed "Coin Page" for that cryptocurrency, passing its unique UUID in the URL.
	- **Handling No Results:** If the search yields no results, your page should display a friendly "No Results" message.
	- **Error Handling:** Make sure to include error handling in case something goes wrong with the API request.

#### Coin Page
- **Your Task: Show Coin Details**
	- **Get the UUID:** First, extract the UUID passed from the home page.
	- **Fetch Coin Data:** Use this UUID to get detailed information about the cryptocurrency from the CoinRankings API.
	- **Display Information Creatively:** Present the coin's details like price, market cap, etc., in a user-friendly way. Feel free to be creative with how you display this data!

---
If you run into any issues or have questions, don't hesitate to ask for help. Let's get started! 🚀