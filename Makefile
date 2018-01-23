DIR=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))
J_HOME=/home/jovyan/work

help:
	@echo "Usage --> 'make notebook'"

notebook:
	@docker run -it --rm -v $(DIR):$(J_HOME) -p 8888:8888 \
	jupyter/datascience-notebook start-notebook.sh --NotebookApp.token=''

start:
	docker-compose -f docker/docker-compose.yml up --build

