# FoodHub (Raite 2024 iThink Hackaton)

## Description
FoodHub is a system that aims to create a solution for "Zero Hunger", one of the UN's SDGs

## Requirement/s
- A Working WSL for Windows Systems
- Python Virtual Environment

## Setup
- WSL Installation
Open command prompt and write
```
wsl --install
```
##
- Setting up ICP Hub CLI
simply run and choose the default installation
```
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```
##
- Setting up python virtual environment
```
curl https://pyenv.run | bash
~/.pyenv/bin/pyenv install 3.10.7 --verbose
```
_Note: There might be some missing packages/modules which is why the --verbose is added so we can see where/why the installation failed_

The missing packages/modules may vary, so just search them out to find what package name they belong to
```
Exmaple:
Error: missing module _ssl
```
_ssl belongs to libssl-dev package for debian based system such as Ubuntu.
To fix the problem run:
```
sudo apt install libssl-dev
or
sudo apt-get install libssl-dev
```
Repeat the command for other missing packages/modules with their respective package name

- Creating a virtual environment
```
creates an environment folder name "venv"
~/.pyenv/versions/3.10.7/bin/python -m venv venv

activates the virtual environment
source venv/bin/activate

installs the required kybra module
pip install kybra
```

##

## Deployment (local)
First navigate the terminal to the project directory

For freshly setup environments first check if there is a problem with dfx by running
```
dfx diagnose
```

Ensure that the node_modules are install
If not or missing some dependnecy run the command while inside the directory where the package.json is located
```
npm install
```

Ensure that the virtual environment is active
if not locate your virtual environment and activate it using
```
source venv/bin/activate
```

Run the replica server
```
dfx start
or
dfx start --background
```

Then run
```
dfx deploy
```
