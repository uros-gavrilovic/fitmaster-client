export default function membersConfig(selectVersion) {
  const fields = [
    {
      type: "icon",
      id: "icon",
      input: "icon",
      align: "center",
    },
    {
      type: "data",
      id: "firstName",
      minWidth: 100,
      input: "text",
    },
    {
      type: "data",
      id: "lastName",
      minWidth: 100,
      input: "text",
    },
    {
      type: "data",
      id: "gender",
      minWidth: 100,
      input: "text",
    },
    {
      type: "data",
      id: "address",
      minWidth: 100,
      input: "text",
    },
    {
      type: "data",
      id: "phoneNumber",
      minWidth: 100,
      input: "text",
    },
    {
      type: "data",
      id: "birthDate",
      minWidth: 100,
      input: "text",
    },
    {
      type: "data",
      id: "active",
      input: "text",
      align: "center",
    },
  ];

  if (selectVersion) {
    fields.push({
      type: "action",
      id: "select",
      align: "center",
    });
  } else {
    fields.push(
      {
        type: "action",
        id: "workoutPlan",
        align: "center",
      },
      {
        type: "action",
        id: "info",
        align: "center",
      },
      {
        type: "action",
        id: "delete",
        align: "center",
      }
    );
  }

  return fields;
}
