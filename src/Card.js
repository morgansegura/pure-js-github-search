const Card = ({ avatar_url, html_user, bio, name, public_repos }) => {
    return `
	<li class="rounded border border-gray-300 shadow-md mb-4">
		<a class="flex p-4" href="${html_user}" title="${name}">
			<img class="w-16 h-16 mr-4 rounded-full overflow-hidden" src="${avatar_url}" alt="${name}" />
			<div class="flex-1 flex flex-col">
				<h3 class="font-semibold text-lg">
					${name}
				</h3>
				<p class="text-sm mb-1">
					<span class="font-semibold">Public Repos:</span> 
					${public_repos}
				</p>
				${
                    bio
                        ? `				
						<p class="text-sm">
							<span class="font-semibold">Bio:</span> ${bio}
						</p>
						`
                        : ""
                }

			</div>
		</a>
	</li>
	`
}

export default Card
