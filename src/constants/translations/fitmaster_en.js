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
      email: "Email",
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
      registerRequestSent:
        "Registration request sent. If your request is approved, you will receive an email to verify your account.",
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
      exercises: "Exercises",
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
  Dashboard: {
    messages: {
      welcome_back: "Welcome back",
    },
  },
  AddMembers: {
    fields: {
      avatar: "Profile Picture",
      firstName: "First Name",
      lastName: "Last Name",
      gender: "Gender",
      address: "Address",
      email: "Email",
      phoneNumber: "Phone Number",
      birthDate: "Date of Birth",
      create_new_member: "Create New Member",
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
  Packages: {
    messages: {
      noPackages: "There are no packages available",
      title: "Delete Package",
      successMessage: "Successfully added a new package",
      successDelete: "Successfully deleted a package",
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
  Exercises: {
    titles: {
      add_exercise: "Add Exercise",
    },
    fields: {
      name: "Name",
      category: "Category",
      body_part: "Body Part",
      instructions: "Instructions",
      search: "Search",
    },
    buttons: {
      save: "Save",
      clear: "Clear",
    },
    messages: {
      create_exercise_title: "Create Exercise",
      create_exercise_success: "Successfully created an exercise",
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
      theme: "Theme",
    },
    accountSettings: {
      messages: {
        titleDelete: "Delete Account",
        textDelete:
          "Are you sure you want to delete your account? This action cannot be undone and deleting your account will permanently remove all data associated with it.",
        titleUpdate: "Update Account",
        textUpdate: "Are you sure you want to update your account?",
        updateSuccessMessage: "Successfully updated your account",
        titleChangePassword: "Change Password",
        textPasswordsMismatch: "New passwords do not match",
        textPasswordChanged: "Password successfully changed",
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
        oldPassword: "Old Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
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
  ExercisesTable: {
    name: "Name",
    category: "Category",
    bodyPart: "Body Part",
    edit: "Edit",
    delete: "Delete",
  },

  // Rows
  MemberRow: {
    fields: {
      active: "Active",
      inactive: "Inactive",
      banned: "Banned",
      pending: "Pending",
    },
    messages: {
      title: "Delete Member",
      successMessage: "Successfully deleted a member",
      text: "Are you sure you want to delete the member?",
    },
  },
  PackageRow: {
    messages: {
      title: "Delete Package",
      successDelete: "Successfully deleted a package",
      text: "Are you sure you want to delete the package?",
    },
  },
  ExerciseRow: {
    messages: {
      confirm_delete_title: "Delete Exercise",
      confirm_delete_text: "Are you sure you want to delete the exercise?",
      delete_exercise_title: "Delete Exercise",
      delete_exercise_success: "Successfully deleted an exercise",
      edit_exercise_title: "Edit Exercise",
      edit_exercise_success: "Successfully edited an exercise",
    },
    fields: {
      name: "Name",
      category: "Category",
      body_part: "Body Part",
      instructions: "Instructions",
    },
    buttons: {
      save: "Save",
      clear: "Clear",
    },
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

  // Modals
  MemberModal: {
    tabs: {
      general_info: "General Information",
      memberships: "Memberships",
    },
    fields: {
      member_ID: "Member ID",
      first_name: "First Name",
      last_name: "Last Name",
      gender: "Gender",
      address: "Address",
      phone_number: "Phone Number",
      birth_date: "Birth Date",
      email: "Email",
    },
    buttons: {
      cancel: "Cancel",
      edit: "Edit",
      save: "Save",
      delete: "Delete",
    },
    messages: {},
  },

  CustomEditor: {
    fields: {
      title: "Title",
      plan_ID: "Plan ID",
      member: "Member",
      trainer: "Trainer",
      starts_at: "Starts At",
      ends_at: "Ends At",
      comment: "Comment",
      activities: "Activities",
      sets: "sets",
      reps: "reps",
    },
    buttons: {
      change_member: "Change Member",
      change_trainer: "Change Trainer",
      edit_activities: "Edit Activities",
      cancel: "Cancel",
      confirm: "Confirm",
    },
  },
  CustomViewer: {
    fields: {
      loading: "Loading...",
      status: "Status",
      completed: "Completed",
    },
  },
};
