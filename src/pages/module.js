import React from 'react';
import { ModuleDetail, QueryResult, Layout } from '../components';
import { gql, useQuery } from '@apollo/client';

const GET_MODULE_BY_ID = gql`
	query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
		module(id: $moduleId) {
			id
			videoUrl
			content
			title
			durationInSeconds
		}
		track(id: $trackId) {
			id
			title
			modules {
				id
				title
				durationInSeconds
			}
		}
	}
`;

const Module = ({ trackId, moduleId }) => {
	const { loading, error, data } = useQuery(GET_MODULE_BY_ID, {
		variables: { moduleId, trackId },
	});

	return (
		<Layout fullWidth>
			<QueryResult error={error} data={data} loading={loading}>
				<ModuleDetail module={data?.module} track={data?.track}></ModuleDetail>
			</QueryResult>
		</Layout>
	);
};

export default Module;
