// For reference only. Not to be used directly in tests. (PUT and POST request builders only)

export class CreateEmployeeRequestBuilder {
  private request: any = {
    aadharNum: '888908080808',
    alternateNumber: '9882123475',
    anniversaryDate: '',
    bloodGroup: 'A+ve',
    dob: '1998-06-27',
    doj: '2025-11-21',
    firstName: 'Check_test',
    gender: 'male',
    lastName: 'Kim',
    maritalStatus: 'Single',
    middleName: 'test',
    panNum: 'BAJPC4350M',
    passportNum: 'TWHS12322222',
    permanentAddress: '1321321321',
    personalEmail: 'Jiya@yopmail.com',
    phoneNumber: '6576576576',
    presentAddress: '123213213',
    alternateName: 'Barney',
    relationWithAlternateNo: 'mother',
    token: '1macf390nrfeq--1of3q528bvkmo',
  };

  /* ================= SETTERS (Override Only What You Need) ================= */

  setFirstName(value: string): this {
    this.request.firstName = value;
    return this;
  }

  setLastName(value: string): this {
    this.request.lastName = value;
    return this;
  }

  setPersonalEmail(value: string): this {
    this.request.personalEmail = value;
    return this;
  }

  setPhoneNumber(value: string): this {
    this.request.phoneNumber = value;
    return this;
  }

  setDob(value: string): this {
    this.request.dob = value;
    return this;
  }

  setToken(value: string): this {
    this.request.token = value;
    return this;
  }

  /* ================= GETTERS (Optional) ================= */

  getEmail() {
    return this.request.personalEmail;
  }

  getPhone() {
    return this.request.phoneNumber;
  }

  /* ================= BUILD ================= */

  build() {
    return { ...this.request };
  }
}


//Test file for upper request builder for refrence only.


// test('Create employee with minimal overrides', async ({ request }) => {
//   const payload = new CreateEmployeeRequestBuilder()
//     .setFirstName('John')
//     .setLastName('Doe')
//     .setPersonalEmail('john.doe@yopmail.com')
//     .build();

//   const res = await request.post('/employee/create', { data: payload });

//   expect(res.status()).toBe(201);
// });