import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult, TrackDetail } from '../components';

export const GET_TRACK = gql`
	query getTrack($trackId: ID!) {
		track(id: $trackId) {
			id
			title
			author {
				id
				name
				photo
			}
			thumbnail
			length
			modulesCount
			numberOfViews
			modules {
				id
				title
				length
			}
			description
		}
	}
`;

const Track = ({ trackId }) => {
	const { data, loading, error } = useQuery(GET_TRACK, {
		variables: { trackId: trackId },
	});
	return (
		<Layout>
			<QueryResult error={error} loading={loading} data={data}>
				<TrackDetail track={data?.track} />
			</QueryResult>
		</Layout>
	);
};

export default Track;
