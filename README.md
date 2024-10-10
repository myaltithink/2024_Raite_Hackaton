# FoodHub (RAITE 2024 iThink Hackathon)

## Description

**FoodHub** is a system that aims to create a solution for the United Nation's
SDG #2, "_Zero Hunger_". This system is intended to be hosted on
[The Internet Computer](https://internetcomputer.org/) (ICP) blockchain network.

## Requirements

This system has been tested on the following platforms:

- Operating System
  - Windows Subsystem for Linux (WSL) [Kali/Ubuntu]
  - Fedora Workstation 40
- Dependencies
  - Python v3.12.\*
    - Kybra v0.5.\*

## Development Setup

> [!NOTE]
>
> To start developing on a Windows environment, you have to install the
> [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)
> (WSL) feature. On later versions of Windows, you can install WSL by
> running a single command:
>
> ```powershell
> wsl --install
> ```
>
> By default, this will install the Ubuntu distribution of WSL. Depending
> on your machine, you might have to perform extra steps to install the
> feature. Read Microsoft's detailed documentation on how to install WSL [here](https://learn.microsoft.com/en-us/windows/wsl/install).

### Setting Up ICP DFX

`dfx` is the command-line interface for the [IC SDK](https://wiki.internetcomputer.org/wiki/Main_Page).

The command below will install a binary compatible with your operating system,
and add it to `/home/<username>/.local/share/dfx/`. It is recommended to
choose the default installation.

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

### Setting Up Python Environment

Make sure that you have Python 3.12.\* installed on your system.

```bash
python3 --version  # The command may be `python` or `python3`

# If it is not installed, install via apt.
sudo apt update && sudo apt install python3 python3-venv
```

To make sure that all developers have the same environment, run the following commands:

```bash
cd FoodHub/
python3 -m venv env              # Create virtual environment
source ./env/bin/activate        # Activate the virtual environment
pip install -r requirements.txt  # Install dependencies
```

> [!WARNING]
>
> There might be some missing packages/modules, resulting to fatal errors.
>
> The missing packages/modules may vary, so just search them out to find
> what package name they belong to. An example of this occurence is...
>
> ```text
> Error: missing module _ssl
> ```
>
> `_ssl` belongs to `libssl-dev` package for Debian-based systems such as
> Ubuntu. To fix this problem, run:
>
> ```bash
> sudo apt install libssl-dev
> # or
> sudo apt-get install libssl-dev
> ```

## Local Deployment

First, navigate the terminal to the project directory. For freshly
setup environments first check if there is a problem with `dfx` by running...

```bash
dfx diagnose
```

Ensure that the Node modules are installed. If not, or if it is missing some
of the dependencies, run the command while inside the directory where the
`package.json` is located:

```bash
npm install
```

> [!NOTE]
> Ensure that the virtual environment is active.
> If not, locate your virtual environment and activate it using...
>
> ```bash
> source venv/bin/activate
> ```

Run the replica server,

```bash
dfx start
# or
dfx start --background
```

Then run:

```bash
dfx deploy
```
