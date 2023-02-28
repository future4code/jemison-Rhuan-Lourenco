module.exports = {
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};