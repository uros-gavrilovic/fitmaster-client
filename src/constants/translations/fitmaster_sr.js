export const translation = {
  // General
  Login: {
    titleLogIn: "Prijavite se koristeći postojeći nalog",
    titleRegister: "Kreirajte novi nalog",
    subtitles: {
      loginInfo: "Podaci za prijavu",
      generalInfo: "Opšti podaci",
    },
    input: {
      username: "Korisničko ime",
      password: "Šifra",
      firstName: "Ime",
      lastName: "Prezime",
      email: "Email",
    },
    buttons: {
      btnLogIn: "Prijavi se",
      btnRegister: "Registrujte se",
      btnNext: "Sledeće",
      btnBack: "Nazad",
      btnReset: "Resetujte",
    },
    messages: {
      registerTitle: "Registracija",
      registerRequestSent:
        "Zahtev za registraciju je poslat. Ako se vaš zahtev odobri, dobićete email za verifikaciju naloga.",
      registerSuccessMessage: "Uspešno registrovan novi trener",
      loginTitle: "Prijava",
      loginSuccessMessage: "Uspešno ste se prijavili",
    },
  },
  Menu: {
    tabs: {
      dashboard: "Nadzorna tabla",
      addMembers: "Dodaj članove",
      members: "Članovi",
      workoutPlans: "Planovi treninga",
      planner: "Planer",
      exercises: "Vezbe",
      packages: "Paketi",
      trainers: "Treneri",
      settings: "Podešavanja",
      logOut: "Odjava",
    },
    messages: {
      logoutTitle: "Odjava",
      logoutSuccessMessage: "Uspešno ste se odjavili",
    },
  },
  Dashboard: {
    messages: {
      welcome_back: "Dobrodošli nazad",
    },
  },
  AddMembers: {
    fields: {
      avatar: "Slika profila",
      firstName: "Ime",
      lastName: "Prezime",
      gender: "Pol",
      address: "Adresa",
      email: "Email",
      phoneNumber: "Broj telefona",
      birthDate: "Datum rođenja",
      create_new_member: "Kreirajte novog člana",
    },
    buttons: {
      btnSave: "Sačuvajte",
      btnClear: "Očistite",
      btnUploadImage: "Postavite sliku",
    },
    messages: {
      title: "Dodajte člana",
      successMessage: "Uspešno dodat novi član",
    },
  },
  Members: {
    search: "Pretraga",
    messages: {
      noMembers: "Nema pronađenih članova",
    },
  },
  Packages: {
    messages: {
      noPackages: "Nema dostupnih paketa",
      title: "Obriši paket",
      successMessage: "Uspešno dodat novi paket",
      successDelete: "Uspešno obrisan paket",
    },
  },
  WorkoutPlans: {
    messages: {
      title: "Kreirajte plan treninga",
      successMessage: "Uspešno kreiran novi plan treninga",
      noMemberSelected: "Nije odabran član",
      noTrainerSelected: "Nije odabran trener",
      noDateTimeSelected: "Nije odabrano datum i vreme",
      noExerciseSelected: "Nije odabrana vežba",
    },
    steps: {
      participantsInfo: "Informacije o učesnicima",
      workoutPlan: "Dizajniranje plana treninga",
    },
    fields: {
      firstName: "Ime",
      lastName: "Prezime",
      trainerID: "ID trenera",
      memberID: "ID člana",
    },
    participants: {
      noMemberSelected: "Nije odabran član",
    },
    plan: {
      category: "Kategorija",
      bodyPart: "Deo tela",
      availableExercises: "Dostupne vežbe",
      workoutPlan: "Plan treninga",
      sets: "setova",
      reps: "ponavljanja",
      selected: "izabrano",
    },
    buttons: {
      btnSavePlan: "Sačuvajte plan",
      btnBack: "Nazad",
      btnNext: "Sledeće",
      btnChooseMember: "Izaberite člana",
      btnChangeMember: "Promenite člana",
      btnChangeTrainer: "Promenite trenera",
    },
    scheduler: {
      navigation: {
        month: "Mesec",
        week: "Nedelja",
        day: "Dan",
        today: "Danas",
      },
      form: {
        addTitle: "Dodaj događaj",
        editTitle: "Izmeni događaj",
        confirm: "Potvrdi",
        delete: "Obriši",
        cancel: "Otkaži",
      },
      event: {
        title: "Naslov",
        start: "Početak",
        end: "Kraj",
        allDay: "Celi dan",
      },
      validation: {
        required: "Obavezno",
        invalidEmail: "Nevažeći email",
        onlyNumbers: "Dozvoljeni su samo brojevi",
        min: "Minimum {{min}} slova",
        max: "Maksimum {{max}} slova",
      },
      moreEvents: "Više...",
      loading: "Učitavanje...",
    },
  },
  Exercises: {
    titles: {
      add_exercise: "Dodaj vežbu",
    },
    fields: {
      name: "Naziv",
      category: "Kategorija",
      body_part: "Deo tela",
      instructions: "Uputstva",
      search: "Pretraga",
    },
    buttons: {
      save: "Sačuvajte",
      clear: "Očistite",
    },
    messages: {
      create_exercise_title: "Kreirajte vežbu",
      create_exercise_success: "Uspešno kreirana nova vežba",
    },
  },
  Settings: {
    tabs: {
      generalSettings: "Opšta podešavanja",
      displaySettings: "Podešavanja prikaza",
      accountSettings: "Podešavanja naloga",
    },
    generalSettings: {},
    displaySettings: {
      language: "Jezik",
      theme: "Tema",
    },
    accountSettings: {
      messages: {
        titleDelete: "Obriši nalog",
        textDelete:
          "Da li ste sigurni da želite da obrišete svoj nalog? Ova akcija se ne može poništiti i trajno će ukloniti sve podatke koji su povezani sa njim.",
        titleUpdate: "Ažurirajte nalog",
        textUpdate: "Da li ste sigurni da želite da ažurirate svoj nalog?",
        updateSuccessMessage: "Uspešno ste ažurirali svoj nalog",
        titleChangePassword: "Promenite šifru",
        textPasswordsMismatch: "Nove šifre se ne podudaraju",
        textPasswordChanged: "Šifra je uspešno promenjena",
      },
      fields: {
        trainerID: "ID trenera",
        firstName: "Ime",
        lastName: "Prezime",
        gender: "Pol",
        address: "Adresa",
        phoneNumber: "Broj telefona",
        hireDate: "Datum zaposlenja",
        username: "Korisničko ime",
        password: "Šifra",
        oldPassword: "Stara šifra",
        newPassword: "Nova šifra",
        confirmPassword: "Potvrdite šifru",
      },
      buttons: {
        btnUpdate: "Ažurirajte nalog",
        btnDelete: "Obrišite nalog",
        btnClear: "Očistite",
        btnChangePassword: "Promenite šifru",
      },
    },
  },

  // Tables
  MembersTable: {
    firstName: "Ime",
    lastName: "Prezime",
    gender: "Pol",
    address: "Adresa",
    phoneNumber: "Broj telefona",
    birthDate: "Datum rođenja",
    active: "Status",
    select: "Izaberi",
    workoutPlan: "Planovi",
    info: "Informacije",
    delete: "Obriši",
  },
  PackagesTable: {
    name: "Naziv",
    price: "Cena",
    delete: "Obriši",
  },
  TrainersTable: {
    firstName: "Ime",
    lastName: "Prezime",
    gender: "Pol",
    address: "Adresa",
    phoneNumber: "Broj telefona",
    hireDate: "Datum zaposlenja",
  },
  ExercisesTable: {
    name: "Naziv",
    category: "Kategorija",
    bodyPart: "Deo tela",
    edit: "Izmeni",
    delete: "Obriši",
  },

  // Rows
  MemberRow: {
    fields: {
      active: "Aktivan",
      inactive: "Neaktivan",
      banned: "Banovan",
      pending: "Na čekanju",
    },
    messages: {
      title: "Obriši člana",
      successMessage: "Uspešno obrisan član",
      text: "Da li ste sigurni da želite da obrišete člana?",
    },
  },
  PackageRow: {
    messages: {
      title: "Obriši paket",
      successDelete: "Uspešno obrisan paket",
      text: "Da li ste sigurni da želite da obrišete paket?",
    },
  },
  ExerciseRow: {
    messages: {
      confirm_delete_title: "Obriši vežbu",
      confirm_delete_text: "Da li ste sigurni da želite da obrišete vežbu?",
      delete_exercise_title: "Obriši vežbu",
      delete_exercise_success: "Uspešno obrisan vežbu",
      edit_exercise_title: "Izmeni vežbu",
      edit_exercise_success: "Uspešno izmenjen vežbu",
    },
    fields: {
      name: "Naziv",
      category: "Kategorija",
      body_part: "Deo tela",
      instructions: "Uputstva",
    },
    buttons: {
      save: "Sačuvajte",
      clear: "Očistite",
    },
  },

  // Components
  CustomAccountMenu: {
    addAnotherAccount: "Dodajte još jedan nalog",
    settings: "Podešavanja",
    logout: "Odjavite se",
  },
  CustomStepper: {
    optional: "Opciono",
    btnNext: "Sledeće",
    btnBack: "Nazad",
    btnSkip: "Preskoči",
    btnFinish: "Završi",
    btnReset: "Resetujte",
  },
  ConfirmModal: {
    btnYes: "Da",
    btnNo: "Ne",
  },
  AddPackage: {
    fields: {
      name: "Naziv paketa",
      price: "Cena",
    },
    components: {
      h1Component: "Unesite novi paket",
    },
    buttons: {
      btnSave: "Sačuvajte",
    },
    messages: {
      title: "Dodajte paket",
      successMessage: "Uspešno dodat novi paket",
    },
  },

  // Modals
  MemberModal: {
    tabs: {
      general_info: "Opšti podaci",
      memberships: "Članstva",
    },
    fields: {
      member_ID: "ID člana",
      first_name: "Ime",
      last_name: "Prezime",
      gender: "Pol",
      address: "Adresa",
      phone_number: "Broj telefona",
      birth_date: "Datum rođenja",
      email: "Email",
    },
    buttons: {
      cancel: "Otkaži",
      edit: "Izmeni",
      save: "Sačuvajte",
      delete: "Obriši",
    },
    messages: {},
  },

  CustomEditor: {
    fields: {
      title: "Naslov",
      plan_ID: "ID plana",
      member: "Član",
      trainer: "Trener",
      starts_at: "Počinje u",
      ends_at: "Završava se u",
      comment: "Komentar",
      activities: "Aktivnosti",
      sets: "setova",
      reps: "ponavljanja",
    },
    buttons: {
      change_member: "Promenite člana",
      change_trainer: "Promenite trenera",
      edit_activities: "Izmeni aktivnosti",
      cancel: "Otkaži",
      confirm: "Potvrdi",
    },
    errors: {
      no_activities: "Nisu izabrane aktivnosti",
      end_date_before_start_date:
        "Datum završetka mora biti nakon datuma početka",
    },
    messages: {
      title: "Izmeni plan treninga",
      success_message: "Uspešno izmenjen plan treninga",
    },
  },
  CustomViewer: {
    fields: {
      loading: "Učitavanje...",
      awaiting: "Očekivanje",
      cancelled: "Otkazano",
      expired: "Isteklo",
      completed: "Završeno",
    },
  },
};
