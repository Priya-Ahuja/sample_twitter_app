import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-card";
import { getHttpEffect } from "./getHttpEffect";
import customData from "./data.json";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

const view = (state, { updateState }) => {
	// The view to be rendered on the DOM
	const { properties } = state;
	return (
		<div className="tweet-wrap">
			<div className="tweet-header">
				<now-card
					size="lg"
					interaction="none"
					sidebar={{ color: "positive", variant: "primary" }}
				>
					<now-card-header
						tagline={{
							label: properties.name,
							icon: "tree-view-short-outline",
						}}
						heading={{
							label: properties.heading,
							size: "sm",
							lines: 2,
						}}
						metaData={{
							label: properties.username,
						}}
					></now-card-header>
					<img src={properties.image} alt="" className="tweet-img"></img>
					<now-card-footer label="Card footer" split="equal">					
						<now-icon icon="chat-outline" size="md" label={properties.commentCount}></now-icon>
						<now-icon icon="list-hide-outline" size="md" label={properties.retweets}></now-icon>
						<now-icon icon="heart-outline" size="md" label={properties.likeCount}></now-icon>
					</now-card-footer>
				</now-card>
			</div>
		</div>
	);
};

createCustomElement("x-959667-twitter-app", {
	// TAGNAME, CONFIGS
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: (coEffects) => {
			// const { dispatch } = coEffects;
			// dispatch("FETCH_LATEST_INCIDENT", {});
		},
		FETCH_LATEST_INCIDENT: getHttpEffect({
			successActionType: "INCIDENT_FETCH_SUCCEEDED",
			errorActionType: "INCIDENT_FETCH_FAILED",
		}),
		INCIDENT_FETCH_SUCCEEDED: ({ dispatch, action, updateState }) => {
			console.log(result);
		},
		INCIDENT_FETCH_FAILED: ({ dispatch, action, updateState }) => {
			console.log(result);
		},
	},
	renderer: { type: snabbdom },
	view,
	properties: {
		name: { default: customData.includes.users[0].name },
		username: { default: customData.includes.users[0].username },
		data: { default: customData.includes.users[0].created_at },
		heading: { default: customData.includes.tweets[0].text },
		image: { default: customData.includes.media[0].url },
		likeCount: { default: customData.includes.tweets[0].public_metrics.like_count },
		retweets: { default: customData.includes.tweets[0].public_metrics.retweet_count },
		commentCount: { default: customData.includes.tweets[0].public_metrics.reply_count}
	},
	styles
});
