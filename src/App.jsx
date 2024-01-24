import { Button, Container, Flex, Text, TextField } from "@radix-ui/themes";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
	const [coinData, setCoinData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const formData = new FormData(event.target);
		const coinName = formData.get("coin_name_field");

		const respones = await fetch(`https://api.coinranking.com/v2/coins?search=${coinName}`);
		const data = await respones.json()
		setCoinData(data);
		// console.log(coinData);
		// console.log(data);

		if (coinName == "") {
			alert("Please provide the coin name!");
		}

		if (coinData.data.stats.total == 0) {
			alert("We can't find a result for you. Are you sure that is correct huh?")
		}

		// TODO: inform user if coin name is not provided
		// TODO: inform user if there are no results returned by the API

		// Can you use React Hooks to achieve this functionality?

		// TODO: fetch data from https://api.coinranking.com/v2/coins?search=${coinName} and save it into coinData

		setIsLoading(false);
	};

	return (

		<Container>
			<div class="flex justify-center">
				<img src="https://cdn.coinranking.com/0Ss-HT19O/btcv.svg" class="w-16" />
			</div>
			<h1 class="text-center">Crypto Finder</h1>

			<Flex direction="column" gap="4">
				<form onSubmit={handleSubmit}>
					<Flex direction="column" gap="2">
						<TextField.Root>
							<TextField.Slot>
								<IconSearch height="16" width="16" />
							</TextField.Slot>
							<TextField.Input name="coin_name_field" placeholder="Search for BTC, ETH, XRP..." />
						</TextField.Root>
						<div className="ml-auto">
							<Button>Search</Button>
						</div>
					</Flex>
				</form>

				{isLoading && <Text>Loading..</Text>}

				{coinData && coinData.status === "error" && <Text>Error: {coinData.message}</Text>}

				{coinData && coinData.status === "success" && (
					<Flex direction="column" gap="4">
						{coinData.data.coins.map((coin) => (
							<Link key={`coin_${coin.uuid}`} to={"/coins" /* TODO: pass uuid to coin info page*/}>
								{/* TODO: create a custom component to display list of coins and pass these fields as props */}
								<div>{coin.name}</div>
								<div>{coin.symbol}</div>
								<div>{coin.iconUrl}</div>
							</Link>
						))}
					</Flex>
				)}
			</Flex>
		</Container>
	);
}

export default App;
