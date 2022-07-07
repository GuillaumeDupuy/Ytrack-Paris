import os

import pytest

from app import init_dock_repository
from dock_repositories import SpaceDockFileRepository, SpaceDockInMemoryRepository


def test_init_dock_repository_in_memory_lower():
    os.environ['DOCK_REPOSITORY'] = 'in_memory'
    res = init_dock_repository()
    assert isinstance(res, SpaceDockInMemoryRepository)
    

def test_init_dock_repository_in_memory_upper():
    os.environ['DOCK_REPOSITORY'] = 'IN_MEMORY'
    res = init_dock_repository()
    assert isinstance(res, SpaceDockInMemoryRepository)
    

def test_init_dock_repository_file_lower():
    os.environ['DOCK_REPOSITORY'] = 'file'
    res = init_dock_repository()
    assert isinstance(res, SpaceDockFileRepository)
    

def test_init_dock_repository_file_upper():
    os.environ['DOCK_REPOSITORY'] = 'FILE'
    res = init_dock_repository()
    assert isinstance(res, SpaceDockFileRepository)


def test_init_dock_repository_should_raise():
    os.environ['DOCK_REPOSITORY'] = 'bad value'
    with pytest.raises(ValueError, match='Repository bad value does not exist'):
        init_dock_repository()
