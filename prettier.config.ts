import { type Config } from 'prettier';

export default {
    endOfLine: 'auto',
    printWidth: 100,
    proseWrap: 'never',
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2
            }
        }
    ]
} satisfies Config;
