import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { BackendAgent } from './BackendAgent/AgentBackend.node';

export class Agent extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Backend AI Agent',
			name: 'agentBackend',
			icon: 'fa:robot',
			iconColor: 'black',
			group: ['transform'],
			description: 'Generates an action plan and executes it. Can use external tools.',
			codex: {
				alias: ['LangChain', 'Chat', 'Conversational', 'Plan and Execute', 'ReAct', 'Tools'],
				categories: ['AI'],
				subcategories: {
					AI: ['Agents', 'Root Nodes'],
				},
				resources: {
					primaryDocumentation: [
						{
							url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/',
						},
					],
				},
			},
			defaultVersion: 2,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new BackendAgent(baseDescription),
			1.1: new BackendAgent(baseDescription),
			1.2: new BackendAgent(baseDescription),
			1.3: new BackendAgent(baseDescription),
			1.4: new BackendAgent(baseDescription),
			1.5: new BackendAgent(baseDescription),
			1.6: new BackendAgent(baseDescription),
			1.7: new BackendAgent(baseDescription),
			1.8: new BackendAgent(baseDescription),
			1.9: new BackendAgent(baseDescription),
			// 2: new AgentV2(baseDescription),
			2: new BackendAgent(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
