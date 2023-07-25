export const membershipConfig = [
  {
    type: "data",
    id: "membershipID",
    label: "ID",
    input: "text",
  },
  {
    type: "data",
    id: "package",
    label: "Package",
    minWidth: 100,
    input: "text",
  },
  {
    type: "data",
    id: "startDate",
    label: "Starts",
    minWidth: 100,
    input: "date",
  },
  {
    type: "data",
    id: "endDate",
    label: "Ends",
    minWidth: 100,
    input: "date",
  },
  {
    type: "data",
    id: "status",
    label: "status",
    input: "text",
  },
  {
    type: "action",
    id: "delete",
    label: "Delete",
    align: "center",
  },
];

export default membershipConfig;
