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
    { name: "ci-cd" },
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
  isTicketNumberRequired: true,
  ticketNumberPrefix: "Fixes - ",

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "Denote the SCOPE of this change:",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    ticket_time: "Enter ticket time (optional). E.g 2h 30m:",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: RPMS-31dd, RPMS-34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  message:
    "{{type}}({{scope}}): {{ticket}} {{message}}{{ticket_time ? ' ' + ticket_time : ''}}",

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: "|", // It is supported for fields body and footer.
  footerPrefix: "",
  askForBreakingChangeFirst: true, // default is false
};
