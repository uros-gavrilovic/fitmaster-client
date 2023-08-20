export const translation = {
  // General
  Login: {
    titleLogIn: "Prijavite se koristeći postojeći račun",
    titleRegister: "Kreirajte novi račun",
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
      btnLogIn: "Prijavite se",
      btnRegister: "Registrujte se",
      btnNext: "Dalje",
      btnBack: "Nazad",
      btnReset: "Resetujte",
    },
    messages: {
      registerTitle: "Registracija",
      registerRequestSent: "Zahtev za registraciju poslat",
      registerSuccessMessage: "Uspešno registrovan novi trener",
      loginTitle: "Prijava",
      loginSuccessMessage: "Uspešno ste se prijavili",
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
      settings: "Postavke",
      logOut: "Odjava",
    },
    messages: {
      logoutTitle: "Odjava",
      logoutSuccessMessage: "Uspešno ste se odjavili",
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
      btnSave: "Sačuvajte",
      btnClear: "Obrišite",
      btnUploadImage: "Prenesite sliku",
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
      title: "Dodajte članu",
      successMessage: "Uspešno dodat novi paket",
    },
  },

  MemberRow: {
    fields: {
      active: "Aktivan",
      inactive: "Neaktivan",
    },
    messages: {
      title: "Obrišite člana",
      successMessage: "Uspešno obrisan član",
      text: "Da li ste sigurni da želite da obrišete člana?",
    },
  },

  Packages: {
    messages: {
      noPackages: "There are no packages available",
      title: "Obrišite paket",
      successMessage: "Uspešno dodat novi paket",
      successDelete: "Uspešno obrisan paket",
    },
  },

  PackageRow: {
    messages: {
      title: "Obrišite paket",
      successDelete: "Uspešno obrisan paket",
      text: "Da li ste sigurni da želite da obrišete paket?",
    },
  },

  WorkoutPlans: {
    messages: {
      title: "Kreirajte plan treninga",
      successMessage: "Uspešno kreiran novi plan treninga",
      noMemberSelected: "Nije izabran nijedan član",
      noTrainerSelected: "Nije izabran nijedan trener",
      noDateTimeSelected: "Nije izabran datum i vreme",
      noExerciseSelected: "Nije izabran nijedan vežba",
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
      noMemberSelected: "Nije izabran nijedan član",
    },
    plan: {
      category: "Kategorija",
      bodyPart: "Deo tela",
      availableExercises: "Dostupne vežbe",
      workoutPlan: "Plan treninga",
      sets: "setovi",
      reps: "ponavljanja",
      selected: "izabrano",
    },
    buttons: {
      btnSavePlan: "Sačuvajte plan",
      btnBack: "Nazad",
      btnNext: "Dalje",
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
        addTitle: "Dodajte događaj",
        editTitle: "Izmenite događaj",
        confirm: "Potvrdite",
        delete: "Obrišite",
        cancel: "Otkažite",
      },
      event: {
        title: "Naslov",
        start: "Početak",
        end: "Završetak",
        allDay: "Ceo dan",
      },
      validation: {
        required: "Obavezno",
        invalidEmail: "Nevažeća email adresa",
        onlyNumbers: "Dozvoljeni su samo brojevi",
        min: "Minimum {{min}} slova",
        max: "Maksimum {{max}} slova",
      },
      moreEvents: "Još...",
      loading: "Učitavanje...",
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
    name: "Naziv",
    price: "Cena",
    delete: "Izbriši",
  },

  // Components
  CustomAccountMenu: {
    addAnotherAccount: "Dodajte još jedan nalog",
    settings: "Postavke",
    logout: "Odjavite se",
  },

  CustomStepper: {
    optional: "Opciono",
    btnNext: "Dalje",
    btnBack: "Nazad",
    btnSkip: "Preskoči",
    btnFinish: "Završi",
    btnReset: "Resetujte",
  },

  ConfirmModal: {
    btnYes: "Da",
    btnNo: "Ne",
  },
};
