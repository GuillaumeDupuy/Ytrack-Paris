import os

from base_spaceships import Fighter
from dock import SpaceDock
from dock_repositories import SpaceDockFileRepository


class FakeInterceptor(Fighter):
    def __init__(self):
        super().__init__(attack=100, defense=100)


class TestSpaceDockFileRepository:
    def test_save(self, tmp_path):
        dock = SpaceDock()
        dock['new fleet'] = [FakeInterceptor(), FakeInterceptor()]
        
        filepath = tmp_path / 'test_fleets.pickle'
        dock_repo = SpaceDockFileRepository(filepath)
        
        dock_repo.save(dock)
        
        file_exists = os.path.exists(filepath)
        assert file_exists, 'The SpaceDock instance must be saved in a pickle file'
    
    def test_load_if_exists(self, tmp_path):
        dock = SpaceDock()
        dock['new fleet'] = [FakeInterceptor(), FakeInterceptor()]
        
        filepath = tmp_path / 'test_fleets.pickle'
        dock_repo = SpaceDockFileRepository(filepath)
        dock_repo.save(dock)

        retrieved_dock = dock_repo.load()
        
        assert str(retrieved_dock) == str(dock), 'should load SpaceDock instance from given pickle file'

    def test_load_new_if_not_exists(self, tmp_path):
        filepath = tmp_path / 'test_fleets.pickle'
        dock_repo = SpaceDockFileRepository(filepath)

        retrieved_dock = dock_repo.load()
        
        assert str(retrieved_dock) == str(SpaceDock()), 'should return now SpaceDock instance if pickle file not exists'
