export interface IAppConfigurations {
  discordBotToken: string | undefined;
  githubToken: string | undefined;
  jiraToken: string | undefined;
}

export default (): IAppConfigurations => ({
  discordBotToken: process.env.BOT_TOKEN,
  githubToken: process.env.GITHUB_TOKEN,
  jiraToken: process.env.JIRA_TOKEN,
});
