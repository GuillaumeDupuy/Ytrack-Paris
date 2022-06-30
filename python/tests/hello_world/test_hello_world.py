import hello_world


def test_should_say_hello_world():
    res = hello_world.say_hello_world()
    assert res == 'Hello World!'
