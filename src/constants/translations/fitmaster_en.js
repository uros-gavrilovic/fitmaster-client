export const translation = {
  // General
  Login: {
    titleLogIn: "Sign in using an existing account",
    titleRegister: "Create a New Account",
    subtitles: {
      loginInfo: "Log-In Information",
      generalInfo: "General Information",
    },
    input: {
      username: "Username",
      password: "Password",
      firstName: "First Name",
      lastName: "Last Name",
    },
    buttons: {
      btnLogIn: "Sign In",
      btnRegister: "Register",
      btnNext: "Next",
      btnBack: "Back",
      btnReset: "Reset",
    },
    messages: {
      registerTitle: "Registration",
      registerRequestSent: "Registration request sent",
      registerSuccessMessage: "Successfully registered a new trainer",
      loginTitle: "Log-In",
      loginSuccessMessage: "Successfully logged in",
    },
  },

  Menu: {
    tabs: {
      dashboard: "Dashboard",
      addMembers: "Add Members",
      members: "Members",
      workoutPlans: "Workout Plans",
      planner: "Scheduler",
      packages: "Packages",
      trainers: "Trainers",
      settings: "Settings",
      logOut: "Log Out",
    },
    messages: {
      logoutTitle: "Log Out",
      logoutSuccessMessage: "Successfully logged out",
    },
  },

  AddMembers: {
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      gender: "Gender",
      address: "Address",
      phoneNumber: "Phone Number",
      birthDate: "Date of Birth",
    },
    buttons: {
      btnSave: "Save",
      btnClear: "Clear",
      btnUploadImage: "Upload Image",
    },
    messages: {
      title: "Add Member",
      successMessage: "Successfully added a new member",
    },
  },

  Members: {
    search: "Search",
    messages: {
      noMembers: "No Members Found",
    },
  },

  AddPackage: {
    fields: {
      name: "Package Name",
      price: "Price",
    },
    components: {
      h1Component: "Insert a new package",
    },
    buttons: {
      btnSave: "Save",
    },
    messages: {
      title: "Add Member",
      successMessage: "Successfully added a new package",
    },
  },

  MemberRow: {
    fields: {
      active: "Active",
      inactive: "Inactive",
    },
    messages: {
      title: "Delete Member",
      successMessage: "Successfully deleted a member",
      text: "Are you sure you want to delete the member?",
    },
  },

  Packages: {
    messages: {
      noPackages: "There are no packages available",
      title: "Delete Package",
      successMessage: "Successfully added a new package",
      successDelete: "Successfully deleted a package",
    },
  },

  PackageRow: {
    messages: {
      title: "Delete Package",
      successDelete: "Successfully deleted a package",
      text: "Are you sure you want to delete the package?",
    },
  },

  WorkoutPlans: {
    messages: {
      title: "Create Workout Plan",
      successMessage: "Successfully created a new workout plan",
      noMemberSelected: "No Member Has Been Selected",
      noTrainerSelected: "No Trainer Has Been Selected",
      noDateTimeSelected: "No Date and Time Has Been Selected",
      noExerciseSelected: "No Exercise Has Been Selected",
    },
    steps: {
      participantsInfo: "Participants' Information",
      workoutPlan: "Design a Workout Plan",
    },
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      trainerID: "Trainer's ID",
      memberID: "Member's ID",
    },
    participants: {
      noMemberSelected: "No Member Has Been Selected",
    },
    plan: {
      category: "Category",
      bodyPart: "Body Part",
      availableExercises: "Available Exercises",
      workoutPlan: "Workout Plan",
      sets: "sets",
      reps: "reps",
      selected: "selected",
    },
    buttons: {
      btnSavePlan: "Save Plan",
      btnBack: "Back",
      btnNext: "Next",
      btnChooseMember: "Choose a Member",
      btnChangeMember: "Change Member",
      btnChangeTrainer: "Change Trainer",
    },
    scheduler: {
      navigation: {
        month: "Month",
        week: "Week",
        day: "Day",
        today: "Today",
      },
      form: {
        addTitle: "Add Event",
        editTitle: "Edit Event",
        confirm: "Confirm",
        delete: "Delete",
        cancel: "Cancel",
      },
      event: {
        title: "Title",
        start: "Start",
        end: "End",
        allDay: "All Day",
      },
      validation: {
        required: "Required",
        invalidEmail: "Invalid Email",
        onlyNumbers: "Only Numbers Allowed",
        min: "Minimum {{min}} letters",
        max: "Maximum {{max}} letters",
      },
      moreEvents: "More...",
      loading: "Loading...",
    },
  },

  Settings: {
    tabs: {
      generalSettings: "General Settings",
      displaySettings: "Display Settings",
      accountSettings: "Account Settings",
    },
    generalSettings: {},
    displaySettings: {
      language: "Language",
    },
    accountSettings: {
      messages: {
        titleDelete: "Delete Account",
        textDelete:
          "Are you sure you want to delete your account? This action cannot be undone and deleting your account will permanently remove all data associated with it.",
        titleUpdate: "Update Account",
        textUpdate: "Are you sure you want to update your account?",
      },
      fields: {
        trainerID: "Trainer's ID",
        firstName: "First Name",
        lastName: "Last Name",
        gender: "Gender",
        address: "Address",
        phoneNumber: "Phone Number",
        hireDate: "Hired",
        username: "Username",
        password: "Password",
      },
      buttons: {
        btnUpdate: "Update Account",
        btnDelete: "Delete Account",
        btnClear: "Clear",
        btnChangePassword: "Change Password",
      },
    },
  },

  // Tables
  MembersTable: {
    firstName: "First Name",
    lastName: "Last Name",
    gender: "Gender",
    address: "Address",
    phoneNumber: "Phone Number",
    birthDate: "Birth Date",
    active: "Status",
    select: "Select",
    workoutPlan: "Plans",
    info: "Info",
    delete: "Delete",
  },
  PackagesTable: {
    name: "Name",
    price: "Price",
    delete: "Izbriši",
  },
  TrainersTable: {
    firstName: "First Name",
    lastName: "Last Name",
    gender: "Gender",
    address: "Address",
    phoneNumber: "Phone Number",
    hireDate: "Hired",
  },

  // Components
  CustomAccountMenu: {
    addAnotherAccount: "Add another account",
    settings: "Settings",
    logout: "Sign Out",
  },

  CustomStepper: {
    optional: "Optional",
    btnNext: "Next",
    btnBack: "Back",
    btnSkip: "Skip",
    btnFinish: "Finish",
    btnReset: "Reset",
  },

  ConfirmModal: {
    btnYes: "Yes",
    btnNo: "No",
  },
};
