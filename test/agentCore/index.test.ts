import * as agentCore from '../../src/agentCore';

describe('AgentCore Index', () => {
  test('exports AgentCoreOpenAPI', () => {
    expect(agentCore.AgentCoreOpenAPI).toBeDefined();
  });
});