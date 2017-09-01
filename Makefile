# -*- mode: makefile -*-

YARN = yarn

.PHONY: build-browser
build-browser:
	$(YARN) run build-browser

.PHONY: build-node
build-node:
	$(YARN) run build-node

.PHONY: build
build: checkstyle test build-browser build-node

.PHONY: checkstyle
checkstyle:
	$(YARN) run checkstyle

.PHONY: test
test:
	$(YARN) run test

.PHONY: fmt
fmt:
	$(YARN) run fmt
