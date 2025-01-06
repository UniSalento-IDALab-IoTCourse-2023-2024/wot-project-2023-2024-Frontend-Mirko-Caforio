export const ProfileModel = {
    profile: {
        email: "",
        name: "",
        surname: "",
        role: "",
        registrationDate: ""
    },
    setProfileAll(profile) {
        this.profile = profile;
    },
    setProfile(email,name, surname, date, city, address, tel,fiscalCode, role, registrationDate) {
        this.profile.email = email || this.profile.email;
        this.profile.name = name || this.profile.name;
        this.profile.surname = surname || this.profile.surname;
        this.profile.role = role || this.profile.role;
        this.profile.registrationDate = registrationDate || this.profile.registrationDate;
        return this.profile;
    },
    getProfile() {
        return this.profile;
    }
}