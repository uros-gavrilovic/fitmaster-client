export const translation = {
	Login: {
		titleLogIn: 'Prijavite se koristeći postojeći nalog',
		titleRegister: 'Kreirajte novi nalog',
		subtitles: {
			loginInfo: 'Podaci za prijavljivanje',
			generalInfo: 'Opšti podaci',
		},
		input: {
			username: 'Korisničko ime',
			password: 'Lozinka',
			firstName: 'Ime',
			lastName: 'Prezime',
		},
		buttons: {
			btnLogIn: 'Prijavi se',
			btnRegister: 'Registrujte se',
			btnNext: 'Sledeće',
			btnBack: 'Nazad',
			btnReset: 'Poništi',
		},
		messages: {
			registerTitle: 'Registracija',
			registerRequestSent: 'Zahtev za registraciju poslat',
			registerSuccessMessage: 'Uspešno ste registrovali novog trenera',
			loginTitle: 'Prijava',
			loginSuccessMessage: 'Uspešno ste se prijavili',
		},
	},

	Menu: {
		tabs: {
			dashboard: 'Kontrolna tabla',
			addMembers: 'Dodaj članove',
			members: 'Članovi',
			workoutPlans: 'Planovi treninga',
			planner: 'Raspored',
			packages: 'Paketi',
			trainers: 'Treneri',
			settings: 'Podešavanja',
			logOut: 'Odjavite se',
		},
		messages: {
			logoutTitle: 'Odjava',
			logoutSuccessMessage: 'Uspešno ste se odjavili',
		},
	},

	AddMembers: {
		fields: {
			firstName: 'Ime',
			lastName: 'Prezime',
			gender: 'Pol',
			address: 'Adresa',
			phoneNumber: 'Broj telefona',
			birthDate: 'Datum rođenja',
		},
		buttons: {
			btnSave: 'Sačuvaj',
			btnClear: 'Obriši',
			btnUploadImage: 'Postavi sliku',
		},
		messages: {
			title: 'Dodaj člana',
			successMessage: 'Uspešno ste dodali novog člana',
		},
	},

	WorkoutPlans: {
		messages: {
			title: 'Kreiranje plana treninga',
			successMessage: 'Uspešno ste kreirali novi plan treninga',
			noMemberSelected: 'Nijedan član nije izabran',
			noTrainerSelected: 'Nijedan trener nije izabran',
			noDateTimeSelected: 'Nijedan datum nije izabran',
			noExerciseSelected: 'Nijedna vežba nije izabrana',
		},
		steps: {
			participantsInfo: 'Informacije o učesnicima',
			workoutPlan: 'Dizajnirajte plan treninga',
		},
		fields: {
			firstName: 'Ime',
			lastName: 'Prezime',
			trainerID: 'ID trenera',
			memberID: 'ID člana',
		},
		participants: {
			noMemberSelected: 'Nijedan član nije izabran',
		},
		plan: {
			category: 'Kategorija',
			bodyPart: 'Deo tela',
			availableExercises: 'Dostupni vežbanja',
			workoutPlan: 'Plan treninga',
			sets: 'serije',
			reps: 'ponavljanja',
			selected: 'izabrano',
		},
		buttons: {
			btnSavePlan: 'Sačuvaj plan',
			btnBack: 'Nazad',
			btnNext: 'Sledeće',
			btnChooseMember: 'Izaberi člana',
			btnChangeMember: 'Promeni člana',
			btnChangeTrainer: 'Promeni trenera',
		},
		scheduler: {
			navigation: {
				month: 'Mesec',
				week: 'Nedelja',
				day: 'Dan',
				today: 'Danas',
			},
			form: {
				addTitle: 'Dodaj događaj',
				editTitle: 'Uredi događaj',
				confirm: 'Potvrdi',
				delete: 'Obriši',
				cancel: 'Otkaži',
			},
			event: {
				title: 'Naslov',
				start: 'Početak',
				end: 'Kraj',
				allDay: 'Celi dan',
			},
			validation: {
				required: 'Obavezno',
				invalidEmail: 'Nevažeća email adresa',
				onlyNumbers: 'Dozvoljeni su samo brojevi',
				min: 'Minimum {{min}} slova',
				max: 'Maksimum {{max}} slova',
			},
			moreEvents: 'Više...',
			loading: 'Učitavanje...',
		},
	},

	CustomAccountMenu: {
		addAnotherAccount: 'Dodaj još jedan nalog',
		settings: 'Podešavanja',
		logout: 'Odjava',
	},
	CustomStepper: {
		optional: 'Opciono',
		btnNext: 'Sledeće',
		btnBack: 'Nazad',
		btnSkip: 'Preskoči',
		btnFinish: 'Završi',
		btnReset: 'Poništi',
	},
};
