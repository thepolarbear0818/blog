.PHONY : help lint-fix build clear-cache

help :
	@echo "use: make [lint-fix] [build] [clear-cache]"

lint-fix :
	yarn lint:fix

build :
	yarn build

clear-cache :
	rm -rf .next
