import {
  defineBlueprint,
  defineDocumentFunction,
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

    defineRobotToken({
      name: "music-video-sorter",
      label: "Music video sorter",
      memberships: [
        {
          resourceType: "project",
          resourceId: "h53jkfvu",
          roleNames: ["editor"],
        },
      ],
    }),

    defineDocumentFunction({
      name: "promote-new-music-video",
      project: "h53jkfvu",
      event: {
        on: ["create"],
        filter: '_type == "musicVideo"',
        projection: "{_id, sortOrder, title}",
      },
      robotToken: "$.resources.music-video-sorter.token",
    }),
  ],
});