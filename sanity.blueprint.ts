import {
  defineBlueprint,
  defineRobotToken,
  defineScheduledFunction,
} from "@sanity/blueprints";

export default defineBlueprint({
  resources: [
    defineRobotToken({
      name: "tour-archiver",
      label: "Tour date archiver",
      memberships: [
        {
          resourceType: "project",
          resourceId: "h53jkfvu",
          roleNames: ["editor"],
        },
      ],
    }),

    defineScheduledFunction({
      name: "archive-tour-dates",
      event: {
        expression: "5 0 * * *",
      },
      timezone: "America/New_York",
      robotToken: "$.resources.tour-archiver.token",
    }),
  ],
});