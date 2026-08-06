SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

# Web-local production helpers. The canonical production deploy logic lives in
# ../deploy/oracle/Makefile; this file keeps the public website commands easy
# to run from the bemama_web repository (mirrors ../bemama_admin/Makefile).

LOCAL_ROOT ?= $(abspath ..)
ORACLE_DEPLOY_DIR ?= $(LOCAL_ROOT)/deploy/oracle
DEPLOY_MAKEFILE := $(ORACLE_DEPLOY_DIR)/Makefile
PROD_HOST ?= root@5.78.213.175
PROD_SSH_KEY ?= ~/.ssh/bemama-vps.key
PROD_SSH_COMMAND = ssh -i $(PROD_SSH_KEY) $(PROD_HOST)
DEPLOY_MAKE = $(MAKE) -C "$(ORACLE_DEPLOY_DIR)" LOCAL_ROOT="$(LOCAL_ROOT)" PROD_HOST="$(PROD_HOST)" PROD_SSH_KEY="$(PROD_SSH_KEY)"

.DEFAULT_GOAL := help

.PHONY: help deploy-make-check install dev build validate serve \
	prod-check prod-status prod-ps prod-sync prod-install prod-install-web prod-deploy \
	prod-reload-nginx prod-ssh

help:
	@printf '%s\n' "BeMama Web targets"
	@printf '%s\n' ""
	@printf '%s\n' "Local:"
	@printf '%s\n' "  make install            Install npm dependencies"
	@printf '%s\n' "  make dev                Run the public website dev server"
	@printf '%s\n' "  make build              Build the public website bundle"
	@printf '%s\n' "  make validate           Validate the public website"
	@printf '%s\n' "  make serve              Serve the built/public website locally"
	@printf '%s\n' ""
	@printf '%s\n' "Production public website deploy:"
	@printf '%s\n' "  make prod-install       Sync, build, publish, and reload nginx"
	@printf '%s\n' "  make prod-sync          Sync public website source to production"
	@printf '%s\n' "  make prod-status        Show BeMama production container status"
	@printf '%s\n' "  make prod-reload-nginx  Test and reload production nginx"
	@printf '%s\n' "  make prod-ssh           Open production SSH: $(PROD_SSH_COMMAND)"
	@printf '%s\n' ""
	@printf '%s\n' "Run from WSL for production targets:"
	@printf '%s\n' "  cd /mnt/c/WorkSpace/Practice/bemama_web"
	@printf '%s\n' "  make prod-install"
	@printf '%s\n' ""
	@printf '%s\n' "Override production connection when needed:"
	@printf '%s\n' "  make prod-install PROD_HOST=root@1.2.3.4 PROD_SSH_KEY=~/.ssh/key"

deploy-make-check:
	@test -f "$(DEPLOY_MAKEFILE)" || { \
		printf 'Missing deploy Makefile: %s\n' "$(DEPLOY_MAKEFILE)" >&2; \
		exit 1; \
	}

install:
	npm install

dev:
	npm run dev

build:
	npm run build

validate:
	npm run validate

serve:
	npm run serve

prod-check: deploy-make-check
	@$(DEPLOY_MAKE) prod-check

prod-status prod-ps: deploy-make-check
	@$(DEPLOY_MAKE) prod-status

prod-sync: deploy-make-check
	@$(DEPLOY_MAKE) prod-sync-web

prod-install prod-install-web prod-deploy: deploy-make-check
	@$(DEPLOY_MAKE) prod-install-web

prod-reload-nginx: deploy-make-check
	@$(DEPLOY_MAKE) prod-reload-nginx

prod-ssh:
	$(PROD_SSH_COMMAND)
