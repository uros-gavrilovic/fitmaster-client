export const translation = {
  // General
  Login: {
    titleLogIn: "Prijavite se koristeći postojeći nalog",
    titleRegister: "Napravite novi nalog",
    subtitles: {
      loginInfo: "Informacije za prijavu",
      generalInfo: "Opšte informacije",
    },
    input: {
      username: "Korisničko ime",
      password: "Lozinka",
      firstName: "Ime",
      lastName: "Prezime",
    },
    buttons: {
      btnLogIn: "Prijavi se",
      btnRegister: "Registracija",
      btnNext: "Dalje",
      btnBack: "Nazad",
      btnReset: "Resetuj",
    },
    messages: {
      registerTitle: "Registracija",
      registerRequestSent: "Zahtev za registraciju poslat",
      registerSuccessMessage: "Uspešno registrovan novi trener",
      loginTitle: "Prijavljivanje",
      loginSuccessMessage: "Uspešno prijavljivanje",
    },
  },

  Menu: {
    tabs: {
      dashboard: "Kontrolna tabla",
      addMembers: "Dodaj članove",
      members: "Članovi",
      workoutPlans: "Planovi treninga",
      planner: "Planer",
      packages: "Paketi",
      trainers: "Treneri",
      settings: "Podešavanja",
      logOut: "Odjava",
    },
    messages: {
      logoutTitle: "Odjava",
      logoutSuccessMessage: "Uspešna odjava",
    },
  },

  AddMembers: {
    fields: {
      firstName: "Ime",
      lastName: "Prezime",
      gender: "Pol",
      address: "Adresa",
      phoneNumber: "Broj telefona",
      birthDate: "Datum rođenja",
    },
    buttons: {
      btnSave: "Sačuvaj",
      btnClear: "Očisti",
      btnUploadImage: "Otpremi sliku",
    },
    messages: {
      title: "Dodaj člana",
      successMessage: "Uspešno dodat novi član",
    },
  },

  Members: {
    search: "Pretraga",
    messages: {
      noMembers: "Nema pronađenih članova",
    },
  },

  AddPackage: {
    fields: {
      name: "Ime paketa",
      price: "Cena",
    },
    components: {
      h1Component: "Unesite novi paket",
    },
    buttons: {
      btnSave: "Sačuvaj",
    },
    messages: {
      title: "Dodaj paket",
      successMessage: "Uspešno dodat novi paket",
    },
  },

  MemberRow: {
    fields: {
      active: "Aktivan",
      inactive: "Neaktivan",
    },
    messages: {
      title: "Obriši člana",
      successMessage: "Uspešno obrisan član",
      text: "Da li ste sigurni da želite da obrišete člana?",
    },
  },

  Packages: {
    messages: {
      noPackages: "Nema dostupnih paketa",
      title: "Obriši paket",
      successMessage: "Uspešno obrisan novi paket",
      successDelete: "Uspešno obrisan paket",
    },
  },

  PackageRow: {
    messages: {
      title: "Obriši paket",
      successDelete: "Uspešno obrisan paket",
      text: "Da li ste sigurni da želite da obrišete paket?",
    },
  },

  WorkoutPlans: {
    messages: {
      title: "Kreirajte plan treninga",
      successMessage: "Uspešno kreiran novi plan treninga",
      noMemberSelected: "Nijedan član nije izabran",
      noTrainerSelected: "Nijedan trener nije izabran",
      noDateTimeSelected: "Nije izabran datum i vreme",
      noExerciseSelected: "Nije izabran vežba",
    },
    steps: {
      participantsInfo: "Informacije o učesnicima",
      workoutPlan: "Dizajnirajte plan treninga",
    },
    fields: {
      firstName: "Ime",
      lastName: "Prezime",
      trainerID: "ID trenera",
      memberID: "ID člana",
    },
    participants: {
      noMemberSelected: "Nijedan član nije izabran",
    },
    plan: {
      category: "Kategorija",
      bodyPart: "Deo tela",
      availableExercises: "Dostupne vežbe",
      workoutPlan: "Plan treninga",
      sets: "serija",
      reps: "ponavljanja",
      selected: "izabrano",
    },
    buttons: {
      btnSavePlan: "Sačuvaj plan",
      btnBack: "Nazad",
      btnNext: "Dalje",
      btnChooseMember: "Izaberi člana",
      btnChangeMember: "Promeni člana",
      btnChangeTrainer: "Promeni trenera",
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
        allDay: "Ceo dan",
      },
      validation: {
        required: "Obavezno",
        invalidEmail: "Nevažeća email adresa",
        onlyNumbers: "Dozvoljeni su samo brojevi",
        min: "Minimum {{min}} slova",
        max: "Maksimum {{max}} slova",
      },
      moreEvents: "Više...",
      loading: "Učitavanje...",
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
    },
    accountSettings: {
      messages: {
        titleDelete: "Obriši nalog",
        textDelete:
          "Da li ste sigurni da želite da obrišete svoj nalog? Ova akcija se ne može poništiti i trajno će ukloniti sve podatke koji su s njim povezani.",
        titleUpdate: "Ažuriraj nalog",
        textUpdate: "Da li ste sigurni da želite da ažurirate svoj nalog?",
        updateSuccessMessage: "Successfully updated your account",
        titleChangePassword: "Promeni lozinku",
        textPasswordsMismatch: "Nove lozinke se ne podudaraju",
        textPasswordChanged: "Lozinka uspešno promenjena",
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
        password: "Lozinka",
        oldPassword: "Stara lozinka",
        newPassword: "Nova lozinka",
        confirmPassword: "Potvrdi lozinku",
      },
      buttons: {
        btnUpdate: "Ažuriraj nalog",
        btnDelete: "Obriši nalog",
        btnClear: "Očisti",
        btnChangePassword: "Promeni lozinku",
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
    info: "Info",
    delete: "Obriši",
  },
  PackagesTable: {
    name: "Ime",
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

  // Components
  CustomAccountMenu: {
    addAnotherAccount: "Dodaj drugi nalog",
    settings: "Podešavanja",
    logout: "Odjavi se",
  },

  CustomStepper: {
    optional: "Opciono",
    btnNext: "Dalje",
    btnBack: "Nazad",
    btnSkip: "Preskoči",
    btnFinish: "Završi",
    btnReset: "Resetuj",
  },

  ConfirmModal: {
    btnYes: "Da",
    btnNo: "Ne",
  },
};
