Feature: Remove completed todos
    As a user with a full list of completed todos
    I want to remove my old tasks with one click
    So that I can focus on open tasks

    Scenario: Clear completed tasks
        Given I have the following tasks on my todo list
            | text                      | status     |
            | Ignore this one           | uncomplete |
            | To be completed           | completed  |
            | Complete this one as well | completed  |
            | Never finish this one     | uncomplete |
        And I can clear completed tasks
        When I clear all completed tasks
        Then I have 2 uncomplete item on my todo list
        And I have 0 completed items left on my todo list
        And I cannot clear completed tasks
