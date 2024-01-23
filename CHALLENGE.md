# Project Challenges
In addition to the basic tasks, we've got some exciting challenges to enhance your website's functionality. These challenges will give users more interactive features and improve their experience on your site.


## Challenge for the Homepage: Display Top 10 Cryptocurrencies

- **Your Task: Showcase the Top 10 Cryptocurrencies**
	- **API Call:** Use the endpoint `https://api.coinranking.com/v2/coins?limit=10` to fetch the top 10 cryptocurrencies.
	- **Display on Homepage:** Show these top 10 coins prominently on the homepage. This gives users a quick view of the leading cryptocurrencies and a starting point to explore more.


## Challenge for the Coin Page: Currency Conversion Feature

- **Your Task: Implement a Currency Conversion Option**
	- **Fetch Reference Currencies:** First, retrieve the list of available currencies using `https://api.coinranking.com/v2/reference-currencies`.
	- **User Selection:** Allow the user to select a currency for conversion.
	- **Fetch and Convert:** Once a user selects a currency, make an API call to `https://api.coinranking.com/v2/coins?referenceCurrencyUuid=<Selected Currency UUID>` using the chosen currency's UUID. This will display the cryptocurrency details in the user-selected currency.


These challenges are designed to push your skills further and add more value to your project. They will make your website not just informative but also interactive and user-centric. Take these one step at a time and feel free to ask for help if you need it. Happy coding! 🌟