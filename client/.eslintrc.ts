import { Linter } from 'eslint';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Projeyi belirtin
    tsconfigRootDir: __dirname, // Kök dizini ayarlayın
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript için önerilen kurallar
    'next/core-web-vitals' // Next.js için önerilen kurallar
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error' // 'any' kullanımını engeller
    // Diğer kurallarınızı burada ekleyebilirsiniz
  }
};

export default config;
