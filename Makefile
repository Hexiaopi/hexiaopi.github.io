GIT_VERSION = $(shell git describe --tags)

version:
	@echo $(GIT_VERSION)

run: 
	pnpm run docs:dev

update:
	pnpm run docs:update-package

install:
	go install github.com/arnaud-deprez/gsemver@latest
	go install github.com/git-chglog/git-chglog/cmd/git-chglog@latest

gsemver:
	gsemver bump

changelog:
	git-chglog -o src/CHANGELOG.md
	git add src/CHANGELOG.md
	git commit -m "docs: update changelog $(GIT_VERSION)"
	git push
