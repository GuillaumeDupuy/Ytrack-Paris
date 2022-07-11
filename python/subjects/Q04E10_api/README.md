# API

## Instructions

In this final exercise, you will learn to build a little REST API with FastAPI.

**You will should use ALL code you wrote in previous exercises for quests 3 and 4.**

Your API will expose 2 routes:

* GET `/ship/fleet/{fleet_name}`: get available ships for given fleet
* POST `/ship`: build new ships and store them in space dock

See specifications bellow.

FastAPI is an external python library, you need to install it:

```bash
$ pip install fastapi uvicorn
```

You also declare your dependencies in a `requirements.txt` file and specify versions:

```requirements
fastapi==0.78.0
uvicorn==0.18.2
```

Install them with command:

```bash
pip install -r requirements.txt
```

`uvicorn` is an ASGI web server. It is used to run fastAPI application.


FastAPI have a [great documentation](https://fastapi.tiangolo.com/tutorial/first-steps/) with many tutorials.

## Technical requirements

**Required folder structure**

```
app.py
base_spaceships.py
dock_repositories.py
dock.py
exceptions.py
fleet.py
requirements.py
ship_types.py
space_yard.py
spaceships.py
fleets.pickle
```

**Dock pickle file name**

`"fleets.pickle"`

**Main app object**

In file `app.py`, create fastAPI main object at the file root as follow:

```python
app = FastAPI()
# don't use other name for app variable
```


## Specifications

**Route GET `/ship/fleet/{fleet_name}`**

* Should return status code `200` if request succeed
* Should return json response, ex:

```json
{
	"alive_battleships": 0,
	"alive_fighters": 1000,
	"dead_battleships": 0,
	"dead_fighters": 0
}
```

**Route POST `/ship`**

* Should load space dock from existing pickle file if exists, else create an empty one
* Expect json request body, ex:

```json
{
	"metal_stock": 100000000,
	"crystal_stock": 1000000000,
	"fleet_name": "default",
	"quantity": 250,
	"ship_name": "interceptor"
}
```

* Request fields details:

  * `metal_stock`: available metal in user stock
  * `crystal_stock`: available crystal in user stock
  * `fleet_name`: destination fleet name. The built ships will be store in this fleet
  * `quantity`: number of ship to build
  * `ship_name`: ship type to build

* Should return status code `201` if request succeed
* Should handle following ships:
  * `interceptor`
  * `bomber`
  * `destroyer`
  * `cruiser`
  * `frigate`
* Should create specified ship and quantity, store them in space dock and save dock in pickle file
* Should handler `ship_name` as lower or upper case
* Should return status code `400` if not enough resource (metal or crystal or both) provided
* Should return status code `404` if ship_name is invalid (does not corresponding to Spaceship subclass: interceptor, cruiser...)
* Should not save space dock in pickle file if any error occurred


## Usage

In a first terminal:

```bash
$ uvicorn app:app --reload
```

```console
INFO:     Will watch for changes in these directories: ['...']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [327158] using StatReload
INFO:     Started server process [327160]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

In other terminal:

```bash
$ curl http://localhost:8000/ship/fleet/attackers
$ curl -d '{"metal_stock": 100000000, "crystal_stock": 1000000000, "fleet_name": "attackers", "quantity": 250, "ship_name": "interceptor"}' --header 'Content-Type: application/json' -X POST http://localhost:8000/ship
$ curl http://localhost:8000/ship/fleet/attackers
$ curl -d '{"metal_stock": 100000000, "crystal_stock": 1000000000, "fleet_name": "attackers", "quantity": 100, "ship_name": "interceptor"}' --header 'Content-Type: application/json' -X POST http://localhost:8000/ship
$ curl http://localhost:8000/ship/fleet/attackers
```

```console
{"alive_battleships":0,"alive_fighters":0,"dead_battleships":0,"dead_fighters":0}
null
{"alive_battleships":0,"alive_fighters":250,"dead_battleships":0,"dead_fighters":0}
null
{"alive_battleships":0,"alive_fighters":350,"dead_battleships":0,"dead_fighters":0}
```

## Notion

* FastAPI useful links:
  * [FastAPI documentation](https://fastapi.tiangolo.com/)
  * [Request body for POST requests](https://fastapi.tiangolo.com/tutorial/body/)
  * [Customize response status code](https://fastapi.tiangolo.com/tutorial/response-status-code/)
* Other resources:
  * [uvicorn](https://www.uvicorn.org/)
  * [introduction to RES APIs](https://www.geeksforgeeks.org/rest-api-introduction/)
  * [Course about REST API (part 1 only)](https://openclassrooms.com/fr/courses/6031886-debutez-avec-les-api-rest)