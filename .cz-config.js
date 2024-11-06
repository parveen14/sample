module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "style",
      name: "style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "perf",
      name: "perf:     A code change that improves performance",
    },
    { value: "test", name: "test:     Adding missing tests" },
    {
      value: "chore",
      name: "chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation",
    },
    { value: "revert", name: "revert:   Revert to a commit" },
    { value: "WIP", name: "WIP:      Work in progress" },
  ],

  scopes: [
    { name: "cid-cd" },
    { name: "migrations" },
    { name: "audit-facade" },
    { name: "user-tenant-facade" },
    { name: "notification-facade" },
    { name: "auth-service" },
    { name: "user-tenant-service" },
    { name: "notification-service" },
    { name: "socketio-service" },
    { name: "audit-service" },
  ],

  appendBranchNameToCommitMessage: false,
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "Fixes - ",

  // override the messages, defaults are as follows
  prompts: {
    type: {
      description: "Select the type of change you addddre committing:",
      type: "list",
      choices: module.exports.types,
    },
    scope: {
      description:
        "What is the scope of this change (e.g., component or file namdddde)?",
      type: "input",
    },
    ticket: {
      description: "Enter ticket number:",
      type: "input",
    },
    message: {
      description: "Write a short description of the change:",
      type: "input",
    },
    ticket_time: {
      description: 'Enter ticket time (e.g., "2h 30m") (optional):',
      type: "input",
    },
  },

  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: "|", // It is supported for fields body and footer.
  footerPrefix: "",
  askForBreakingChangeFirst: true, // default is false
};
