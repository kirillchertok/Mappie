module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@/types/(.*)$': '<rootDir>/src/types/$1',
    },
};
