import type { Config } from 'release-it';

export default {
    git: {
        commitMessage: 'chore(release): v${version}',
        tagName: 'v${version}',
        tagAnnotation: 'release v${version}',
        requireBranch: 'main',
        push: false
    },
    npm: {
        publish: false
    },
    plugins: {
        '@release-it/conventional-changelog': {
            preset: 'angular',
            infile: 'CHANGELOG.md',
            context: {
                linkCompare: false
            },
            writerOpts: {
                commitPartial: '* {{header}}\n'
            }
        }
    }
} satisfies Config;
