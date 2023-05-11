# Flask App Template

This is a project that I started to learn more about Flask and how I can integrate it to previous and future projects

## Functionality of this add
- Mysql lite databases

## Setup environment for the project
Follow this steps by copying the commands on the terminal:
1. Clone this repository
    ```bash
    git clone <this-repository>
    ```
2. Install the virtual environment python library
    ```bash
    python3 -m venv env
    ```
3. Activate projectcs
    ```bash
    source env/bin/activate
    ```
4. Install python requirements
    ```bash
    pip install -r requirements.txt
    ```
5. Export the project enviromental variables
    ```bash
    export FLASK_APP=app
    ```
    ```bash
    export FLASK_ENV=development
    ```
6. Inittialice the data base
    ```bash
    python init_db.py
    ```

## Run app
run this on the root of the folder after activating the environment
```bash
flask run
```