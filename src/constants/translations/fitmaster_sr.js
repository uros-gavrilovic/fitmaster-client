export const translation = {
	Login: {
		titleLogIn: 'Prijavite se koristeći postojeći nalog',
		titleRegister: 'Kreirajte novi nalog',
		subtitles: {
			loginInfo: 'Podaci za prijavu',
			generalInfo: 'Opšti podaci',
		},
		input: {
			username: 'Korisničko ime',
			password: 'Lozinka',
			firstName: 'Ime',
			lastName: 'Prezime',
		},
		buttons: {
			btnLogIn: 'Prijavite se',
			btnRegister: 'Registrujte se',
			btnNext: 'Sledeće',
			btnBack: 'Nazad',
			btnReset: 'Poništi',
		},
		messages: {
			registerTitle: 'Registracija',
			registerRequestSent: 'Zahtev za registraciju poslat',
			registerSuccessMessage: 'Uspešno registrovan novi trener',
			loginTitle: 'Prijavljivanje',
			loginSuccessMessage: 'Uspešno ste se prijavili',
		},
	},

	Menu: {
		tabs: {
			dashboard: 'Kontrolna tabla',
			addMembers: 'Dodaj članove',
			members: 'Članovi',
			workoutPlans: 'Planovi vežbanja',
			packages: 'Paketi',
			trainers: 'Treneri',
			settings: 'Podešavanja',
			logOut: 'Odjava',
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
			btnUploadImage: 'Otpremi sliku',
		},
		messages: {
			title: 'Dodaj člana',
			successMessage: 'Uspešno dodat novi član',
		},
	},

	WorkoutPlans: {
		steps: {
			participantsInfo: 'Informacije o učesnicima',
			workoutPlan: 'Kreirajte plan vežbanja',
		},
		participants: {},
		plan: {
			category: 'Kategorija',
			bodyPart: 'Deo tela',
			availableExercises: 'Dostupne vežbe',
			workoutPlan: 'Plan vežbanja',
			sets: 'serije',
			reps: 'ponavljanja',
			selected: 'izabrano',
		},
		buttons: {
			btnBack: 'Nazad',
			btnNext: 'Sledeće',
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
				editTitle: 'Izmeni događaj',
				confirm: 'Potvrdi',
				delete: 'Obriši',
				cancel: 'Otkaži',
			},
			event: {
				title: 'Naslov',
				start: 'Početak',
				end: 'Završetak',
				allDay: 'Ceo dan',
			},
			validation: {
				required: 'Obavezno polje',
				invalidEmail: 'Nevažeća email adresa',
				onlyNumbers: 'Dozvoljeni su samo brojevi',
				min: 'Minimum {{min}} karaktera',
				max: 'Maksimum {{max}} karaktera',
			},
			moreEvents: 'Više...',
			loading: 'Učitavanje...',
		},
	},

	CustomAccountMenu: {
		addAnotherAccount: 'Dodaj drugi nalog',
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
