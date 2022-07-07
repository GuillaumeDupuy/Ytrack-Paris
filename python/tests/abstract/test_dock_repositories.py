import inspect
from abc import ABC

from dock import SpaceDock
from dock_repositories import SpaceDockRepository, SpaceDockFileRepository, SpaceDockInMemoryRepository


class TestSpaceDockRepository:
    def test_should_be_abstract(self):
        assert issubclass(SpaceDockRepository, ABC)
    
    def test_should_declare_save_method(self):
        is_declared = 'save' in list(getattr(SpaceDockRepository, '__abstractmethods__', []))
        assert is_declared, 'you should declare save method as abstract'

    def test_should_declare_save_method_with_parameter(self):
        parameters = inspect.signature(SpaceDockRepository.save).parameters
        dock_param = parameters.get('dock')
        dock_param_type = dock_param.annotation
        
        assert dock_param, 'save take 1 argument'
        assert dock_param_type == SpaceDock, 'dock argument should be hint typed as SpaceDock'
    
    def test_should_declare_load_method(self):
        is_declared = 'load' in list(getattr(SpaceDockRepository, '__abstractmethods__', []))
        assert is_declared, 'you should declare load method as abstract'
    

class TestSpaceDockFileRepository:
    def test_should_implement_abstract(self):
        assert issubclass(SpaceDockFileRepository, SpaceDockRepository)

    def test_should_implement_save(self):
        is_implemented = 'save' in SpaceDockFileRepository.__dict__
        assert is_implemented, 'SpaceDockFileRepository should implement save method'
        
    def test_should_implement_load(self):
        is_implemented = 'load' in SpaceDockFileRepository.__dict__
        assert is_implemented, 'SpaceDockFileRepository should implement load method'

class TestSpaceDockInMemoryRepository:
    def test_should_implement_abstract(self):
        assert issubclass(SpaceDockInMemoryRepository, SpaceDockRepository)
        
    def test_should_implement_save(self):
        is_implemented = 'save' in SpaceDockInMemoryRepository.__dict__
        assert is_implemented, 'SpaceDockInMemoryRepository should implement save method'
        
    def test_should_implement_load(self):
        is_implemented = 'load' in SpaceDockInMemoryRepository.__dict__
        assert is_implemented, 'SpaceDockInMemoryRepository should implement load method'
