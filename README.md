# agent-workshop
Workshop for creating agents for testing purposes with GitHub Copilot. 

We are building **context**:
system prompt (hidden) +
copilot-instructions.md
*.agent.md

## Playwright Agents

Out of box *Playwright Agents* are Playwright MCP installation + few files you get: 
`.github/agents/*.agent.md`
`.vscode/mcp.json`
`tests/seed.spec.ts`

Agents are sample tasks of Planner (design test cases without automating them), Generator (create code that matches planned test cases) and Healer (fix tests when they start failing). 

### Install

Install playwright
`npm init playwright@latest`

Install agents (if you did not bring them in with this repo or want to update)
`npx playwright init-agents --loop=vscode`

## Inspirations

- Beast mode https://gist.github.com/burkeholland/88af0249c4b6aff3820bf37898c8bacf