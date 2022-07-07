from dataclasses import is_dataclass
import inspect

import pytest

from base_spaceships import Spaceship
from spaceships import Interceptor, Frigate, Bomber, Destroyer, Cruiser
from requirements import Requirements


class TestRequirements:
    def test_is_dataclass(self):
        assert is_dataclass(Requirements), 'Requirements must be a daatclass'
        
    def test_should_have_metal_int_attr(self):
        metal_attr = inspect.get_annotations(Requirements).get('metal')
        assert metal_attr is int, 'missing metal int attribute'

    def test_should_have_crystal_int_attr(self):
        crystal_attr = inspect.get_annotations(Requirements).get('crystal')
        assert crystal_attr is int, 'missing crystal int attribute'


class TestSpaceships:
    def test_has_requirements_attr(self):
        requirements_attr = inspect.get_annotations(Spaceship).get('requirements')
        assert requirements_attr is Requirements, 'Spaceship class must have an attribute requirements: Requirements'

    @pytest.mark.parametrize('class_, metal, crystal', [
        (Interceptor, 1000, 200),
        (Bomber, 2500, 400),
        (Cruiser, 25000, 10000),
        (Frigate, 10000, 10000),
        (Destroyer, 35000, 20000),
    ])
    def test_should_have_correct_requirements(self, class_, metal, crystal):
        assert isinstance(class_.requirements, Requirements), f'{class_.__name__} should have a class attribute requirements'
        assert class_.requirements.metal == metal, f'{class_.__name__} actually costs {metal} metal'
        assert class_.requirements.crystal == crystal, f'{class_.__name__} actually costs {crystal} crystal'
