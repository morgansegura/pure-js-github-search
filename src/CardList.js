import { render } from "./index"
import Card from "./Card"

const CardList = cards => {
    const html = `
		<ul class="mx-auto w-full max-w-lg">
			${cards.map(card => Card(card)).join("")}
		</ul>
	`
    render(html, document.getElementById("root"))
}

export default CardList
