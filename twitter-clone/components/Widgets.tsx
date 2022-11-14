import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
	return (
		<div className="col-span-2 mt-2 hidden px-2 lg:inline">
			{/* SearchBox */}
			<div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
				<SearchIcon className="h-5 w-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search Twitter"
					className="flex-1 bg-transparent outline-none"
				/>
			</div>

			{/* React Twitter Embed */}
			<div className="mt-5">
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="sonnysangha"
					options={{ height: 1000 }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
