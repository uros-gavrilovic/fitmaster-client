// App Information
export const appInfoPath = () => `/app-info`;

// User - Trainer
export const loginTrainerPath = () => `/login-trainer`;
export const registerTrainerPath = () => `/register-trainer`;
export const logoutTrainerPath = () => `/logout-trainer`;

// User - Member
export const loginMemberPath = () => `/login-member`;
export const registerMemberPath = () => `/register-member`;
export const logoutMemberPath = () => `/logout-member`;

// Members
const memberAPI = `/api/member`;
export const membersPath = () => memberAPI;
export const membersDTOPath = () => memberAPI + `/dto`;
export const membersIDPath = (id) => memberAPI + `/${id}`;

// Exercises
const exerciseAPI = `/api/exercise`;
export const exercisesDTOPath = () => exerciseAPI + `/dto`;
export const filtersPath = () => exerciseAPI + `/filters`;

// Statistics
const statisticsAPI = `/api/statistics`;
export const membersActivityPath = () => statisticsAPI + `/members-activity`;

// Packages
const packageAPI = `/api/package`;
export const packagesPath = () => packageAPI;
export const packagesDTOPath = () => packageAPI + `/dto`;
export const packagesIDPath = (id) => packageAPI + `/${id}`;
