export const validSignin = {
    email: 'vishal.thakur1@caeliusconsulting.com',
    password: 'Test@123'
};

export const invalidSignin = {
    email: 'invalid@example.com',
    password: 'wrong'
};

// Asset Type test data
export const validAssetTypeIds = {
    validId: '1',
    anotherValidId: '2',
    highValidId: '100'
};

export const invalidAssetTypeIds = {
    nonExistentId: '99999',
    invalidFormat: 'abc',
    zeroId: '0',
    negativeId: '-1'
};

export const assetTypeExpectedSchema = {
    id: 1,
    name: 'Laptop',
    description: 'Computer asset',
    createdAt: '2025-01-01T00:00:00Z',
    status: 'ACTIVE'
};
