from exceptions import ResourceError


class TestResourceError:
    def test_should_be_an_exception(self):
        assert issubclass(ResourceError, Exception)
