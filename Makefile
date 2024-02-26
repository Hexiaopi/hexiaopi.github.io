GIT_VERSION = $(shell git describe --tags)

version:
	@echo $(GIT_VERSION)

install:
	go install github.com/arnaud-deprez/gsemver@latest
	go install github.com/git-chglog/git-chglog/cmd/git-chglog@latest

gsemver:
	gsemver bump

changelog:
	git-chglog -o src/CHANGELOG.md
