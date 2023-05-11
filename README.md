# Flask App Template

This is a project that I started to learn more about Flask and how I can integrate it to previous and future projects

## Functionality of this add
- Mysql lite databases

## Docker 
This project has a docker container, you can test it by:
1. Doing a docker pull:
    ```bash
    docker pull ivanrulik/temp-flask-app:latest
    ```
2. Test the by running an attached container:
    ```bash
    docker run -p 8000:5000 ivanrulik/temp-flask-app
    ```
3. Open the app in your browser (copy and paste)
    ```bash
    127.0.0.1:8000
    ```

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