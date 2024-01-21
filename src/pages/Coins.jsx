import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function CoinsPage() {
	// We "ensured" that there will be a uuid in the router by doing
	// <Route path="*" element={<NotFound />} />
	// Can you guess why?

	// TODO: use React Router Hooks extract the coin uuid that is passed from the homepage

	const [coinInfo, setCoinInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// TODO: use React Hooks to fetch coin details from https://api.coinranking.com/v2/coin/${uuid} when the value of uuid is updated

	return (
		<Container>
			<h1>CoinsPage for UUID {uuid}</h1>
			{isLoading && <p>Loading...</p>}
			{coinInfo && coinInfo.status === "success" && (
				<>
					{/* TODO: create a custom component to display coin data and pass these fields as props */}
					<p>{coinInfo.data.coin.symbol}</p>
					<p>{coinInfo.data.coin.name}</p>
					<p>{coinInfo.data.coin.iconUrl}</p>
					<p>MarketCap: {coinInfo.data.coin.marketCap}</p>
					<p>
						Links:{" "}
						{coinInfo.data.coin.links.map(({ name, url, type }) => (
							<p key={`${uuid}_link_${name}`}>
								{name}, {url}, {type}
							</p>
						))}
					</p>
				</>
			)}

			{coinInfo && coinInfo.status === "error" && <p>Error: {coinInfo.data.message}</p>}
		</Container>
	);
}
