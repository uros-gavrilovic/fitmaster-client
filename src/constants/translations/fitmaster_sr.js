export const translation = {
  // General
  Login: {
    titleLogIn: "Prijavite se koristeći postojeći račun",
    titleRegister: "Kreirajte novi račun",
    subtitles: {
      loginInfo: "Podaci za prijavu",
      generalInfo: "Opšti podaci",
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
      btnRegister: "Registruj se",
      btnNext: "Dalje",
      btnBack: "Nazad",
      btnReset: "Poništi",
    },
    messages: {
      registerTitle: "Registracija",
      registerRequestSent:
        "Zahtev za registraciju poslat. Ako se odobri, dobićete e-mail za verifikaciju vašeg računa.",
      registerSuccessMessage: "Uspešno registrovan novi trener",
      loginTitle: "Prijava",
      loginSuccessMessage: "Uspešno prijavljeni",
    },
  },
  Menu: {
    tabs: {
      dashboard: "Nadzorna tabla",
      addMembers: "Dodaj članove",
      members: "Članovi",
      workoutPlans: "Trenerski planovi",
      planner: "Planer",
      exercises: "Vežbe",
      packages: "Paketi",
      trainers: "Treneri",
      settings: "Podešavanja",
      logOut: "Odjava",
    },
    messages: {
      logoutTitle: "Odjava",
      logoutSuccessMessage: "Uspešno odjavljeni",
    },
  },
  Dashboard: {
    messages: {
      welcome_back: "Dobrodošli nazad",
    },
  },
  AddMembers: {
    fields: {
      avatar: "Profilna slika",
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
      btnUploadImage: "Postavi sliku",
    },
    messages: {
      title: "Dodaj člana",
      successMessage: "Uspešno dodat novi član",
    },
  },
  Members: {
    search: "Pretraži",
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
      title: "Kreirajte trenerski plan",
      successMessage: "Uspešno kreiran novi trenerski plan",
      noMemberSelected: "Nije izabran nijedan član",
      noTrainerSelected: "Nije izabran nijedan trener",
      noDateTimeSelected: "Nije izabran datum i vreme",
      noExerciseSelected: "Nije izabrana vežba",
    },
    steps: {
      participantsInfo: "Podaci o učesnicima",
      workoutPlan: "Dizajniranje trenerskog plana",
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
      workoutPlan: "Trenerski plan",
      sets: "serija",
      reps: "ponavljanja",
      selected: "izabrano",
    },
    buttons: {
      btnSavePlan: "Sačuvaj plan",
      btnBack: "Nazad",
      btnNext: "Dalje",
      btnChooseMember: "Izaberite člana",
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
        end: "Završetak",
        allDay: "Ceo dan",
      },
      validation: {
        required: "Obavezno polje",
        invalidEmail: "Nevažeća e-mail adresa",
        onlyNumbers: "Dozvoljeni su samo brojevi",
        min: "Minimum {{min}} karaktera",
        max: "Maksimum {{max}} karaktera",
      },
      moreEvents: "Još...",
      loading: "Učitava se...",
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
      search: "Pretraži",
    },
    buttons: {
      save: "Sačuvaj",
      clear: "Obriši",
    },
    messages: {
      create_exercise_title: "Kreiraj vežbu",
      create_exercise_success: "Uspešno kreirana vežba",
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
          "Da li ste sigurni da želite da obrišete svoj nalog? Ova akcija ne može da se poništi i trajno će ukloniti sve podatke koji su sa njim povezani.",
        titleUpdate: "Ažuriraj nalog",
        textUpdate: "Da li ste sigurni da želite da ažurirate svoj nalog?",
        updateSuccessMessage: "Uspešno ažuriran vaš nalog",
        titleChangePassword: "Promeni lozinku",
        textPasswordsMismatch: "Nove lozinke se ne poklapaju",
        textPasswordChanged: "Lozinka uspešno promenjena",
      },
      fields: {
        trainerID: "ID trenera",
        firstName: "Ime",
        lastName: "Prezime",
        gender: "Pol",
        address: "Adresa",
        phoneNumber: "Broj telefona",
        hireDate: "Datum zapošljavanja",
        username: "Korisničko ime",
        password: "Lozinka",
        oldPassword: "Stara lozinka",
        newPassword: "Nova lozinka",
        confirmPassword: "Potvrdi lozinku",
      },
      buttons: {
        btnUpdate: "Ažuriraj nalog",
        btnDelete: "Obriši nalog",
        btnClear: "Obriši",
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
    hireDate: "Datum zapošljavanja",
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
      banned: "Blokiran",
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
      delete_exercise_success: "Uspešno obrisana vežba",
      edit_exercise_title: "Izmeni vežbu",
      edit_exercise_success: "Uspešno izmenjena vežba",
    },
    fields: {
      name: "Naziv",
      category: "Kategorija",
      body_part: "Deo tela",
      instructions: "Uputstva",
    },
    buttons: {
      save: "Sačuvaj",
      clear: "Obriši",
    },
  },

  // Components
  CustomAccountMenu: {
    addAnotherAccount: "Dodaj drugi nalog",
    settings: "Podešavanja",
    logout: "Odjava",
  },
  CustomStepper: {
    optional: "Opciono",
    btnNext: "Dalje",
    btnBack: "Nazad",
    btnSkip: "Preskoči",
    btnFinish: "Završi",
    btnReset: "Poništi",
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
      btnSave: "Sačuvaj",
    },
    messages: {
      title: "Dodaj člana",
      successMessage: "Uspešno dodat novi paket",
    },
  },
};
