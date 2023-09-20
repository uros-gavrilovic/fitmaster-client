export const translation = {
  // General
  Login: {
    titleLogIn: "Prijavite se koristeći postojeći nalog",
    titleRegister: "Kreirajte novi nalog",
    subtitles: {
      loginInfo: "Informacije za prijavu",
      generalInfo: "Opšte informacije",
    },
    input: {
      username: "Korisničko ime",
      password: "Šifra",
      firstName: "Ime",
      lastName: "Prezime",
      email: "E-mail",
    },
    buttons: {
      btnLogIn: "Prijavite se",
      btnRegister: "Registrujte se",
      btnNext: "Sledeće",
      btnBack: "Nazad",
      btnReset: "Resetujte",
    },
    messages: {
      registerTitle: "Registracija",
      registerRequestSent:
        "Zahtev za registraciju poslat. Ako se odobri, dobićete e-mail za verifikaciju naloga.",
      registerSuccessMessage: "Uspešno registrovan novi trener",
      loginTitle: "Prijavljivanje",
      loginSuccessMessage: "Uspešno prijavljivanje",
    },
  },
  Menu: {
    tabs: {
      dashboard: "Nadzorna tabla",
      addMembers: "Dodaj članove",
      members: "Članovi",
      workoutPlans: "Planovi vežbanja",
      planner: "Planer",
      exercises: "Vežbe",
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
  Packages: {
    messages: {
      noPackages: "Nema dostupnih paketa",
      title: "Izbriši paket",
      successMessage: "Uspešno dodat novi paket",
      successDelete: "Uspešno obrisan paket",
    },
  },
  WorkoutPlans: {
    messages: {
      title: "Kreirajte plan vežbanja",
      successMessage: "Uspešno kreiran novi plan vežbanja",
      noMemberSelected: "Nije izabran nijedan član",
      noTrainerSelected: "Nije izabran nijedan trener",
      noDateTimeSelected: "Nije izabran datum i vreme",
      noExerciseSelected: "Nije izabrana vežba",
    },
    steps: {
      participantsInfo: "Informacije o učesnicima",
      workoutPlan: "Dizajnirajte plan vežbanja",
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
      workoutPlan: "Plan vežbanja",
      sets: "serije",
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
        addTitle: "Dodajte događaj",
        editTitle: "Izmenite događaj",
        confirm: "Potvrdite",
        delete: "Obrišite",
        cancel: "Otkažite",
      },
      event: {
        title: "Naslov",
        start: "Početak",
        end: "Kraj",
        allDay: "Ceo dan",
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
  Planner: {
    labels: {
      category: "Kategorija",
      body_part: "Deo tela",
      available_exercises: "Dostupne vežbe",
      workout_plan: "Plan vežbanja",
      sets: "serije",
      reps: "ponavljanja",
      selected: "izabrano",
      loading: "Učitavanje...",
    },
    status: {
      awaiting: "Očekivanje",
      cancelled: "Otkazano",
      expired: "Isteklo",
      completed: "Završeno",
    },
    errors: {
      no_activities: "Nisu izabrane aktivnosti",
      end_date_before_start_date:
        "Datum završetka mora biti posle datuma početka",
    },
    messages: {
      title: "Izmenite plan vežbanja",
      success_message: "Uspešno izmenjen plan vežbanja",
    },
    fields: {
      title: "Naslov",
      plan_ID: "ID plana",
      member: "Član",
      trainer: "Trener",
      starts_at: "Počinje u",
      ends_at: "Završava se u",
      comment: "Komentar",
      activities: "Aktivnosti",
      sets: "serije",
      reps: "ponavljanja",
      category: "Kategorija",
      body_part: "Deo tela",
      selected: "izabrano",
      workout_plan: "Plan vežbanja",
      available_exercises: "Dostupne vežbe",
    },
    buttons: {
      change_member: "Promenite člana",
      change_trainer: "Promenite trenera",
      edit_activities: "Izmenite aktivnosti",
      add_activities: "Dodajte aktivnosti",
      exit: "Izađite",
      cancel: "Otkažite",
      confirm: "Potvrdite",
      save: "Sačuvajte",
    },
  },
  Exercises: {
    titles: {
      add_exercise: "Dodajte vežbu",
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
      clear: "Obrišite",
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
        titleDelete: "Obrišite nalog",
        textDelete:
          "Da li ste sigurni da želite da obrišete svoj nalog? Ova radnja ne može da se poništi i brisanje naloga će trajno ukloniti sve podatke koji su s njim povezani.",
        titleUpdate: "Ažurirajte nalog",
        textUpdate: "Da li ste sigurni da želite da ažurirate svoj nalog?",
        updateSuccessMessage: "Uspešno ažuriran vaš nalog",
        titleChangePassword: "Promenite šifru",
        textPasswordsMismatch: "Nove šifre se ne podudaraju",
        textPasswordChanged: "Šifra uspešno promenjena",
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
        password: "Šifra",
        oldPassword: "Stara šifra",
        newPassword: "Nova šifra",
        confirmPassword: "Potvrdite šifru",
      },
      buttons: {
        btnUpdate: "Ažurirajte nalog",
        btnDelete: "Obrišite nalog",
        btnClear: "Obrišite",
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
    select: "Izaberite",
    workoutPlan: "Planovi",
    info: "Informacije",
    delete: "Obrišite",
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
      banned: "Banovan",
      pending: "Na čekanju",
    },
    messages: {
      title: "Obrišite člana",
      successMessage: "Uspešno obrisan član",
      text: "Da li ste sigurni da želite da obrišete člana?",
    },
  },
  PackageRow: {
    messages: {
      title: "Obrišite paket",
      successDelete: "Uspešno obrisan paket",
      text: "Da li ste sigurni da želite da obrišete paket?",
    },
  },
  ExerciseRow: {
    messages: {
      confirm_delete_title: "Obrišite vežbu",
      confirm_delete_text: "Da li ste sigurni da želite da obrišete vežbu?",
      delete_exercise_title: "Obrišite vežbu",
      delete_exercise_success: "Uspešno obrisanja vežba",
      edit_exercise_title: "Izmenite vežbu",
      edit_exercise_success: "Uspešno izmenjena vežba",
    },
    fields: {
      name: "Naziv",
      category: "Kategorija",
      body_part: "Deo tela",
      instructions: "Uputstva",
    },
    buttons: {
      save: "Sačuvajte",
      clear: "Obrišite",
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
    btnSkip: "Preskočite",
    btnFinish: "Završite",
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
      general_info: "Opšte informacije",
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
      email: "E-mail",
    },
    buttons: {
      cancel: "Otkažite",
      edit: "Izmenite",
      save: "Sačuvajte",
      delete: "Obrišite",
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
      sets: "serije",
      reps: "ponavljanja",
    },
    buttons: {
      change_member: "Promenite člana",
      change_trainer: "Promenite trenera",
      edit_activities: "Izmenite aktivnosti",
      cancel: "Otkažite",
      confirm: "Potvrdite",
    },
    errors: {
      no_activities: "Nisu izabrane aktivnosti",
      end_date_before_start_date:
        "Datum završetka mora biti posle datuma početka",
    },
    messages: {
      title: "Izmenite plan vežbanja",
      success_message: "Uspešno izmenjen plan vežbanja",
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
