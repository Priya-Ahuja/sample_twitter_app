import {createHttpEffect} from '@servicenow/ui-effect-http';


export const getHttpEffect = ({successActionType, errorActionType}) => {
	let fieldsInUrl =
		"attachments,author_id,conversation_id,created_at,edit_controls,edit_history_tweet_ids,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld&expansions=attachments.media_keys,attachments.poll_ids,author_id,edit_history_tweet_ids,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id&media.fields=alt_text,duration_ms,height,media_key,non_public_metrics,organic_metrics,preview_image_url,promoted_metrics,public_metrics,type,url,variants,width&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type";
	return createHttpEffect('https://api.twitter.com/2/tweets?ids=1607954087638896642', {
        method: 'GET',		
        headers: {
			Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAB9XkwEAAAAAhYe3oHr2hVSIaYeSZPNvWaJ3%2Bsw%3DtS6H9anob7otxWcXGWWuhBIzPZbTVoNcsxL5L5UYCAepwv20Lh"
		},
		pathParams: [],
		successActionType,
		errorActionType
	});		
};