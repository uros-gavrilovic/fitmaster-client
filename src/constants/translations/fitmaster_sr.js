export const translation = {
  // Opšte
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
      email: "E-mail",
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
      registerRequestSent:
        "Zahtev za registraciju poslat. Ukoliko su podaci ispravni, dobićete e-mail za verifikaciju naloga.",
      registerSuccessMessage: "Uspešno registrovan novi trener",
      loginTitle: "Prijava",
      loginSuccessMessage: "Uspešno prijavljen",
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
      logoutSuccessMessage: "Uspešno odjavljen",
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
      email: "E-mail",
      phoneNumber: "Broj telefona",
      birthDate: "Datum rođenja",
      create_new_member: "Kreirajte novog člana",
    },
    buttons: {
      btnSave: "Sačuvaj",
      btnClear: "Obriši",
      btnUploadImage: "Učitaj sliku",
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
      name: "Naziv paketa",
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
      banned: "Zabranjen",
      pending: "Na čekanju",
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
      successMessage: "Uspešno dodat novi paket",
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
      noMemberSelected: "Nije odabran nijedan član",
      noTrainerSelected: "Nije odabran nijedan trener",
      noDateTimeSelected: "Nije odabrano datum i vreme",
      noExerciseSelected: "Nije odabran nijedan vežba",
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
      noMemberSelected: "Nije odabran nijedan član",
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
        invalidEmail: "Nevažeći e-mail",
        onlyNumbers: "Dozvoljeni su samo brojevi",
        min: "Minimum {{min}} slova",
        max: "Maksimum {{max}} slova",
      },
      moreEvents: "Još...",
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
      theme: "Tema",
    },
    accountSettings: {
      messages: {
        titleDelete: "Obriši nalog",
        textDelete:
          "Da li ste sigurni da želite da obrišete svoj nalog? Ova radnja nije reversibilna i brisanjem naloga trajno će se izbrisati svi podaci povezani s njim.",
        titleUpdate: "Ažuriraj nalog",
        textUpdate: "Da li ste sigurni da želite da ažurirate svoj nalog?",
        updateSuccessMessage: "Uspešno ažuriran vaš nalog",
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
        confirmPassword: "Potvrdite lozinku",
      },
      buttons: {
        btnUpdate: "Ažuriraj nalog",
        btnDelete: "Obriši nalog",
        btnClear: "Obriši",
        btnChangePassword: "Promeni lozinku",
      },
    },
  },

  // Tabele
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

  // Komponente
  CustomAccountMenu: {
    addAnotherAccount: "Dodaj još jedan nalog",
    settings: "Podešavanja",
    logout: "Odjava",
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
