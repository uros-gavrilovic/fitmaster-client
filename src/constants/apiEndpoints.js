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
export const membersPath = () => `/api/member`;
export const membersDTOPath = () => `/api/member/dto`;
export const membersIDPath = (id) => `/api/member/${id}`;

// Exercises
export const exercisesDTOPath = () => `/api/exercise/dto`;

// Statistics
export const membersActivityPath = () => `api/statistics/members-activity`;

// Packages
export const packagesPath = () => `/api/package`;
export const packagesDTOPath = () => `/api/package/dto`;
export const packagesIDPath = (id) => `/api/package/${id}`;
